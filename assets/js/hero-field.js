/* A signal surface: connected paths respond to proximity, never to clicks. */
(() => {
  'use strict';
  const hero = document.querySelector('.hero');
  const canvas = document.getElementById('hero-field');
  const ctx = canvas?.getContext('2d', { alpha: true });
  if (!hero || !ctx) return;

  const drawing = hero.querySelector('.map-drawing');
  const queries = [
    matchMedia('(hover: hover) and (pointer: fine)'),
    matchMedia('(min-width: 761px)'),
    matchMedia('(prefers-reduced-motion: reduce)')
  ];
  const columns = 43;
  const rows = 18;
  const xs = new Float32Array(columns * rows);
  const ys = new Float32Array(columns * rows);
  const proximity = new Float32Array(columns * rows);
  const pointer = { x: 0, y: 0, targetX: 0, targetY: 0, strength: 0, inside: false };
  let width = 1, height = 1, phase = 0, energy = 0;
  let frame = 0, previousTime = 0, visible = true;
  let interactive = false;

  function render() {
    ctx.clearRect(0, 0, width, height);
    const radius = Math.min(240, width * .22);
    const shiftX = (pointer.x / width - .5) * pointer.strength * 18;
    const shiftY = (pointer.y / height - .5) * pointer.strength * 10;
    for (let row = 0; row < rows; row++) {
      const v = row / (rows - 1);
      for (let col = 0; col < columns; col++) {
        const u = col / (columns - 1);
        const index = row * columns + col;
        let x = width * .72 + (u - .5) * width * (.36 + 1.12 * v) + shiftX * v;
        let y = height * (.14 + .82 * v)
          + Math.sin(u * 7.4 + v * 3.6 + phase * .36) * height * .055 * (.35 + v)
          + Math.cos(u * 3.8 - phase * .21) * height * .025 + shiftY * v;
        const dx = x - pointer.x, dy = y - pointer.y;
        const influence = Math.exp(-(dx * dx + dy * dy) / (radius * radius)) * pointer.strength;
        x += dx * influence * .12;
        y -= influence * 64;
        xs[index] = x;
        ys[index] = y;
        proximity[index] = influence;
      }
    }

    // Continuous lanes and sparse cross-connections give the field a circuit structure.
    ctx.lineWidth = .75;
    ctx.strokeStyle = 'rgba(0, 201, 235, .24)';
    ctx.beginPath();
    for (let row = 0; row < rows; row++) {
      for (let col = 0; col < columns; col++) {
        const i = row * columns + col;
        if (col === 0) ctx.moveTo(xs[i], ys[i]);
        else ctx.lineTo(xs[i], ys[i]);
      }
    }
    for (let col = 0; col < columns; col += 3) {
      for (let row = 0; row < rows; row++) {
        const i = row * columns + col;
        if (row === 0) ctx.moveTo(xs[i], ys[i]);
        else ctx.lineTo(xs[i], ys[i]);
      }
    }
    ctx.stroke();

    // Only nearby segments illuminate; the rest remain a quiet structural layer.
    for (let row = 0; row < rows; row++) {
      for (let col = 1; col < columns; col++) {
        const i = row * columns + col;
        const light = Math.max(proximity[i], proximity[i - 1]);
        if (light < .05) continue;
        ctx.strokeStyle = `rgba(92, 224, 249, ${light * .66})`;
        ctx.beginPath();
        ctx.moveTo(xs[i - 1], ys[i - 1]);
        ctx.lineTo(xs[i], ys[i]);
        ctx.stroke();
      }
    }
    for (let row = 1; row < rows; row += 3) {
      for (let col = 3; col < columns; col += 6) {
        const i = row * columns + col;
        ctx.fillStyle = `rgba(128, 233, 250, ${.24 + proximity[i] * .65})`;
        ctx.fillRect(xs[i] - 1.5, ys[i] - 1.5, 3, 3);
      }
    }
    // Data packets travel on the paths rather than floating independently.
    for (let packet = 0; packet < 8; packet++) {
      const row = 3 + packet * 2;
      const position = ((phase * (1.1 + packet * .07) + packet * 5.37) % (columns - 1));
      const col = Math.floor(position), fraction = position - col;
      const i = row * columns + col;
      const x = xs[i] + (xs[i + 1] - xs[i]) * fraction;
      const y = ys[i] + (ys[i + 1] - ys[i]) * fraction;
      ctx.fillStyle = `rgba(128, 233, 250, ${.5 + energy * .3})`;
      ctx.fillRect(x - 2, y - 1, 5, 2);
    }
    if (pointer.strength > .02) {
      ctx.strokeStyle = `rgba(128, 233, 250, ${pointer.strength * .4})`;
      ctx.lineWidth = 1;
      ctx.beginPath();
      ctx.moveTo(pointer.x - 10, pointer.y); ctx.lineTo(pointer.x - 5, pointer.y);
      ctx.moveTo(pointer.x + 5, pointer.y); ctx.lineTo(pointer.x + 10, pointer.y);
      ctx.moveTo(pointer.x, pointer.y - 10); ctx.lineTo(pointer.x, pointer.y - 5);
      ctx.moveTo(pointer.x, pointer.y + 5); ctx.lineTo(pointer.x, pointer.y + 10);
      ctx.stroke();
    }
  }

  function shouldRun() {
    return interactive && visible && !document.hidden;
  }

  function tick(time) {
    frame = 0;
    if (!shouldRun()) return;
    const delta = previousTime ? Math.min((time - previousTime) / 1000, .05) : 1 / 60;
    previousTime = time;
    const smoothing = 1 - Math.exp(-delta * 8);
    pointer.x += (pointer.targetX - pointer.x) * smoothing;
    pointer.y += (pointer.targetY - pointer.y) * smoothing;
    pointer.strength += ((pointer.inside ? 1 : 0) - pointer.strength) * smoothing;
    phase += delta;
    energy = Math.max(0, energy - delta * .65);
    drawing.style.setProperty('--map-rx', `${-(pointer.y / height - .5) * pointer.strength * 5}deg`);
    drawing.style.setProperty('--map-ry', `${(pointer.x / width - .5) * pointer.strength * 6}deg`);
    render();
    frame = requestAnimationFrame(tick);
  }

  function sync() {
    if (frame) cancelAnimationFrame(frame);
    frame = 0;
    previousTime = 0;
    hero.dataset.fieldInteractive = String(interactive);
    if (shouldRun()) frame = requestAnimationFrame(tick);
  }

  function configure() {
    interactive = queries[0].matches && queries[1].matches && !queries[2].matches;
    if (!interactive) {
      pointer.strength = 0;
      pointer.inside = false;
      drawing.style.removeProperty('--map-rx');
      drawing.style.removeProperty('--map-ry');
    }
    sync();
    render();
  }

  function resize() {
    const bounds = hero.getBoundingClientRect();
    width = Math.max(1, bounds.width);
    height = Math.max(1, bounds.height);
    const scale = Math.min(devicePixelRatio || 1, 1.5, Math.sqrt(2000000 / (width * height)));
    canvas.width = Math.round(width * scale);
    canvas.height = Math.round(height * scale);
    ctx.setTransform(scale, 0, 0, scale, 0, 0);
    pointer.x = pointer.targetX = width * .72;
    pointer.y = pointer.targetY = height * .5;
    render();
  }

  hero.addEventListener('pointermove', event => {
    if (!shouldRun() || event.pointerType === 'touch') return;
    const bounds = hero.getBoundingClientRect();
    pointer.targetX = event.clientX - bounds.left;
    pointer.targetY = event.clientY - bounds.top;
    pointer.inside = true;
  }, { passive: true });
  hero.addEventListener('pointerleave', () => { pointer.inside = false; });
  hero.querySelector('.map-controls').addEventListener('click', () => {
    if (shouldRun()) energy = 1;
  });
  queries.forEach(query => query.addEventListener('change', configure));
  document.addEventListener('visibilitychange', sync);
  if ('IntersectionObserver' in window) {
    new IntersectionObserver(entries => {
      visible = entries[0].isIntersecting;
      sync();
    }).observe(hero);
  } else {
    window.addEventListener('scroll', () => {
      const bounds = hero.getBoundingClientRect();
      const next = bounds.bottom > 0 && bounds.top < innerHeight;
      if (visible !== next) { visible = next; sync(); }
    }, { passive: true });
  }
  if ('ResizeObserver' in window) new ResizeObserver(resize).observe(hero);
  window.addEventListener('resize', resize, { passive: true });
  resize();
  configure();
})();
