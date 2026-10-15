#!/usr/bin/env bash
set -euo pipefail

usage() {
  cat <<'USAGE'
Usage:
  scripts/add-learning.sh TITLE START_DATE END_DATE HOURS MINUTES [URL] [DESCRIPTION]

Dates use YYYY/MM/DD. The script fills the personal learning form and leaves it
open for review. It does not click Save.

Example:
  scripts/add-learning.sh \
    "IBM Data Engineering Workshop" 2026/10/10 2026/10/10 3 30 \
    "https://example.com/workshop" "Hands-on workshop about data pipelines"
USAGE
}

if [[ "${1:-}" == "-h" || "${1:-}" == "--help" ]]; then
  usage
  exit 0
fi

if (( $# < 5 || $# > 7 )); then
  usage >&2
  exit 2
fi

command -v npx >/dev/null 2>&1 || {
  echo "Error: npx is required. Install Node.js/npm first." >&2
  exit 1
}

title=$1
start_date=$2
end_date=$3
hours=$4
minutes=$5
url=${6:-}
description=${7:-}

for date_value in "$start_date" "$end_date"; do
  if [[ ! "$date_value" =~ ^[0-9]{4}/[0-9]{2}/[0-9]{2}$ ]]; then
    echo "Error: dates must use YYYY/MM/DD (received: $date_value)." >&2
    exit 2
  fi
done

if [[ ! "$hours" =~ ^[0-9]+$ || ! "$minutes" =~ ^[0-9]+$ ]] || (( 10#$minutes > 59 )); then
  echo "Error: hours and minutes must be integers; minutes must be between 0 and 59." >&2
  exit 2
fi

if (( 10#$hours == 0 && 10#$minutes == 0 )); then
  echo "Error: duration must be greater than zero." >&2
  exit 2
fi

export CODEX_HOME="${CODEX_HOME:-$HOME/.codex}"
PWCLI="$CODEX_HOME/skills/playwright/scripts/playwright_cli.sh"
if [[ ! -x "$PWCLI" ]]; then
  echo "Error: Playwright CLI wrapper not found at: $PWCLI" >&2
  echo "Install the Playwright skill or set CODEX_HOME to its parent directory." >&2
  exit 1
fi

tmp_code=$(mktemp "${TMPDIR:-/tmp}/add-learning.XXXXXX.js")
trap 'rm -f "$tmp_code"' EXIT

node - "$tmp_code" "$title" "$start_date" "$end_date" "$hours" "$minutes" "$url" "$description" <<'NODE'
const fs = require("node:fs");
const [file, title, startDate, endDate, hours, minutes, url, description] = process.argv.slice(2);
const data = { title, startDate, endDate, hours, minutes, url, description };
const code = `async (page) => {
  const data = ${JSON.stringify(data)};
  const current = new URL(page.url());
  if (current.hostname !== "yourlearning.ibm.com" || current.pathname !== "/add-learning") {
    throw new Error("Open https://yourlearning.ibm.com/add-learning in the Playwright CLI session before running this script.");
  }

  const fillOne = async (locator, name, value) => {
    const count = await locator.count();
    if (count !== 1) throw new Error(`Expected one ${name} field, found ${count}. The page labels may have changed.`);
    await locator.fill(value);
  };

  await fillOne(page.getByLabel("Título"), "title", data.title);
  await fillOne(page.getByLabel(/Data de início/i), "start date", data.startDate);
  await fillOne(page.getByLabel(/Data de conclusão/i), "completion date", data.endDate);
  await fillOne(page.getByLabel("Horas"), "hours", data.hours);
  await fillOne(page.getByLabel("Minutos"), "minutes", data.minutes);

  if (data.url) await fillOne(page.getByLabel(/URL/i), "URL", data.url);
  if (data.description) await fillOne(page.getByPlaceholder("Descreva brevemente esta atividade"), "description", data.description);

  return `Filled the form for "${data.title}". Review it in the browser; Save was not clicked.`;
}`;
fs.writeFileSync(file, code, { mode: 0o600 });
NODE

"$PWCLI" run-code --filename "$tmp_code"
