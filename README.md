# ksio.dev

Static landing page for ksio.dev.

## Files kept in the repository

- `index.html`: the published site.
- `favicon.svg`: editable favicon asset.
- `CNAME`: GitHub Pages custom-domain configuration for `ksio.dev`.
- `.nojekyll`: keeps GitHub Pages from applying Jekyll processing to the static files.

Open Design metadata, exported artifact JSON files, and unused PNG drafts are ignored by Git.

## Cloudflare DNS

To make `ksio.dev` serve this repository through GitHub Pages, replace the current apex `A`
record with GitHub Pages records:

```dns
ksio.dev.  A  185.199.108.153
ksio.dev.  A  185.199.109.153
ksio.dev.  A  185.199.110.153
ksio.dev.  A  185.199.111.153
www        CNAME  cassioln.github.io
```

After DNS resolves to GitHub Pages, enable HTTPS enforcement in the repository Pages settings.
