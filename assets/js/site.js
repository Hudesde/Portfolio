// ═══ Shared script: i18n · nav · reveal · carousel · lightbox · citations · contact · visual effects ═══
// Each page may define window.PAGE_I18N = { es: {...}, en: {...} } before loading this file.
// Spanish text lives in the HTML; a key missing from the dictionary falls back to it.
(() => {
'use strict';

const CONTACT_EMAIL = 'aatr010423@gmail.com';
const FORM_ENDPOINT = 'https://formsubmit.co/ajax/' + CONTACT_EMAIL;

const ICON = {
  x:    '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" aria-hidden="true"><path d="M18 6 6 18M6 6l12 12"/></svg>',
  prev: '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="m15 18-6-6 6-6"/></svg>',
  next: '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="m9 18 6-6-6-6"/></svg>',
  mail: '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect x="2" y="4" width="20" height="16" rx="2"/><path d="m22 7-10 6L2 7"/></svg>',
};

// Strings shared by every page. `es` only holds text injected by this script.
const COMMON = {
  es: {
    'fab': `Contáctame`,
    'cm.avail': `Disponible para nuevas oportunidades`,
    'cm.title': `Hablemos`,
    'cm.sub': `¿Tienes una vacante, un proyecto o un servicio en mente? Déjame un mensaje y te responderé lo antes posible.`,
    'cm.close': `Cerrar`,
    'cm.name': `Nombre`,
    'cm.email': `Correo electrónico`,
    'cm.reason': `Motivo`,
    'cm.r.job': `Oferta de empleo`,
    'cm.r.project': `Proyecto o servicio freelance`,
    'cm.r.academic': `Colaboración académica`,
    'cm.r.other': `Otro`,
    'cm.org': `Empresa u organización <span class="opt">(opcional)</span>`,
    'cm.msg': `Mensaje`,
    'cm.msg.ph': `Cuéntame brevemente en qué puedo ayudarte…`,
    'cm.alt': `¿Prefieres el correo?`,
    'cm.send': `Enviar mensaje`,
    'cm.sending': `Enviando…`,
    'cm.ok': `¡Gracias! Tu mensaje fue enviado. Te responderé pronto.`,
    'cm.err': `No se pudo enviar el mensaje en este momento.`,
    'cm.err.link': `Envíalo por correo →`,
    'lb.label': `Galería de imágenes`,
    'lb.close': `Cerrar`,
    'lb.prev': `Anterior`,
    'lb.next': `Siguiente`,
    'car.prev': `Foto anterior`,
    'car.next': `Foto siguiente`,
    'car.goto': `Ir a la foto`,
  },
  en: {
    'nav.home': `Home`,
    'nav.about': `About`,
    'nav.experience': `Experience`,
    'nav.projects': `Projects`,
    'nav.publications': `Publications`,
    'nav.skills': `Skills`,
    'nav.certifications': `Certifications`,
    'nav.contact': `Contact`,
    'nav.menu': `Menu`,
    'footer.by': `Designed by <strong>Jose Ramon Aragon Toledo</strong> · <a href="https://github.com/Hudesde" target="_blank" rel="noopener" style="color:rgba(255,255,255,.65);text-decoration:underline">github.com/Hudesde</a>`,
    'footer.loc': `Oaxaca, Mexico · 2026`,
    'crumb.home': `Home`,
    'crumb.projects': `Projects`,
    'crumb.pubs': `Publications`,
    'rel.title': `<i class="ic ic-link"></i> Related`,
    'rel.project': `Project`,
    'rel.thesis': `Thesis`,
    'rel.paper': `Paper`,
    'rel.award': `Award`,
    'info.title': `Fact sheet`,
    'info.links': `Links`,
    'cite.title': `<i class="ic ic-quote"></i> How to cite`,
    'cite.copy': `<i class="ic ic-copy"></i> Copy citation`,
    'cite.copied': `<i class="ic ic-check"></i> Copied`,
    'cite.bib': `<i class="ic ic-copy"></i> Copy BibTeX`,
    'cite.bibshow': `Show BibTeX`,
    'doc.view': `View PDF`,
    'doc.read': `<i class="ic ic-book"></i> Read`,
    'doc.dl': `Download`,
    'fab': `Contact me`,
    'cm.avail': `Open to new opportunities`,
    'cm.title': `Let's talk`,
    'cm.sub': `Have a job opening, a project, or a service in mind? Leave me a message and I'll get back to you as soon as possible.`,
    'cm.close': `Close`,
    'cm.name': `Name`,
    'cm.email': `Email`,
    'cm.reason': `Reason`,
    'cm.r.job': `Job offer`,
    'cm.r.project': `Freelance project or service`,
    'cm.r.academic': `Academic collaboration`,
    'cm.r.other': `Other`,
    'cm.org': `Company or organization <span class="opt">(optional)</span>`,
    'cm.msg': `Message`,
    'cm.msg.ph': `Briefly tell me how I can help…`,
    'cm.alt': `Prefer email?`,
    'cm.send': `Send message`,
    'cm.sending': `Sending…`,
    'cm.ok': `Thank you! Your message has been sent. I'll reply soon.`,
    'cm.err': `The message could not be sent right now.`,
    'cm.err.link': `Send it by email →`,
    'lb.label': `Image gallery`,
    'lb.close': `Close`,
    'lb.prev': `Previous`,
    'lb.next': `Next`,
    'car.prev': `Previous photo`,
    'car.next': `Next photo`,
    'car.goto': `Go to photo`,
  },
};

const PAGE = window.PAGE_I18N || {};

const store = {
  get(k) { try { return localStorage.getItem(k); } catch { return null; } },
  set(k, v) { try { localStorage.setItem(k, v); } catch { /* storage unavailable */ } },
};

function lookup(lang, key) {
  const p = PAGE[lang], c = COMMON[lang];
  if (p && p[key] != null) return p[key];
  if (c && c[key] != null) return c[key];
  return null;
}

let lang = store.get('lang') || ((navigator.language || '').toLowerCase().startsWith('en') ? 'en' : 'es');
if (!['es', 'en'].includes(lang)) lang = 'es';

// Current-language string; falls back to Spanish.
function t(key) { return lookup(lang, key) ?? lookup('es', key) ?? ''; }

// ═══ CONTACT: floating button + modal (injected on every page) ═══
function buildContact() {
  const fab = document.createElement('button');
  fab.type = 'button';
  fab.className = 'fab';
  fab.dataset.contactOpen = '';
  fab.innerHTML = `<span class="pulse" aria-hidden="true"></span>${ICON.mail}<span data-i18n="fab">${COMMON.es.fab}</span>`;

  const dlg = document.createElement('dialog');
  dlg.className = 'modal';
  dlg.id = 'contactModal';
  dlg.setAttribute('aria-labelledby', 'contactTitle');
  const s = COMMON.es;
  dlg.innerHTML = `
    <div class="modal-hd">
      <span class="avail"><span class="pulse" aria-hidden="true"></span><span data-i18n="cm.avail">${s['cm.avail']}</span></span>
      <h2 id="contactTitle" data-i18n="cm.title">${s['cm.title']}</h2>
      <p data-i18n="cm.sub">${s['cm.sub']}</p>
      <button type="button" class="modal-x" data-contact-close aria-label="${s['cm.close']}" data-i18n-attr="aria-label:cm.close">${ICON.x}</button>
    </div>
    <form class="modal-bd" id="contactForm">
      <div class="form-row">
        <div class="field"><label for="cf-name" data-i18n="cm.name">${s['cm.name']}</label><input id="cf-name" name="name" required maxlength="120" autocomplete="name"></div>
        <div class="field"><label for="cf-email" data-i18n="cm.email">${s['cm.email']}</label><input id="cf-email" name="email" type="email" required maxlength="160" autocomplete="email"></div>
      </div>
      <div class="form-row">
        <div class="field"><label for="cf-reason" data-i18n="cm.reason">${s['cm.reason']}</label>
          <select id="cf-reason" name="reason">
            <option value="job" data-i18n="cm.r.job">${s['cm.r.job']}</option>
            <option value="project" data-i18n="cm.r.project">${s['cm.r.project']}</option>
            <option value="academic" data-i18n="cm.r.academic">${s['cm.r.academic']}</option>
            <option value="other" data-i18n="cm.r.other">${s['cm.r.other']}</option>
          </select>
        </div>
        <div class="field"><label for="cf-org" data-i18n="cm.org">${s['cm.org']}</label><input id="cf-org" name="company" maxlength="160" autocomplete="organization"></div>
      </div>
      <div class="field"><label for="cf-msg" data-i18n="cm.msg">${s['cm.msg']}</label><textarea id="cf-msg" name="message" required maxlength="4000" placeholder="${s['cm.msg.ph']}" data-i18n-attr="placeholder:cm.msg.ph"></textarea></div>
      <input type="text" name="_honey" class="hp" tabindex="-1" autocomplete="off" aria-hidden="true">
      <div class="form-foot">
        <span class="form-alt"><span data-i18n="cm.alt">${s['cm.alt']}</span> <a href="mailto:${CONTACT_EMAIL}">${CONTACT_EMAIL}</a></span>
        <button type="submit" class="btn btn-primary btn-send">${ICON.mail}<span class="send-lbl" data-i18n="cm.send">${s['cm.send']}</span></button>
      </div>
      <div class="form-status" role="status" aria-live="polite"></div>
    </form>`;

  document.body.append(fab, dlg);
}

function initContact() {
  const dlg = document.getElementById('contactModal');
  const form = document.getElementById('contactForm');
  const statusEl = form.querySelector('.form-status');
  const sendBtn = form.querySelector('.btn-send');
  const sendLbl = sendBtn.querySelector('.send-lbl');
  const html = document.documentElement;

  const open = (reason) => {
    if (typeof dlg.showModal !== 'function') { location.href = 'mailto:' + CONTACT_EMAIL; return; }
    if (reason) form.elements.reason.value = reason;
    statusEl.className = 'form-status';
    dlg.showModal();
    html.classList.add('modal-open');
    form.querySelector('#cf-name').focus();
  };

  document.addEventListener('click', e => {
    const trigger = e.target.closest('[data-contact-open]');
    if (trigger) { e.preventDefault(); open(trigger.dataset.contactReason); }
  });
  dlg.addEventListener('click', e => {
    if (e.target === dlg || e.target.closest('[data-contact-close]')) dlg.close();
  });
  dlg.addEventListener('close', () => html.classList.remove('modal-open'));

  const mailto = (subject, body) =>
    `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

  form.addEventListener('submit', async e => {
    e.preventDefault();
    if (!form.reportValidity()) return;
    const fd = new FormData(form);
    if (fd.get('_honey')) return;

    const sel = form.elements.reason;
    const reason = sel.options[sel.selectedIndex].text;
    const name = String(fd.get('name')).trim();
    const email = String(fd.get('email')).trim();
    const company = String(fd.get('company') || '').trim();
    const message = String(fd.get('message')).trim();
    const subject = `Portafolio · ${reason} · ${name}`;

    sendBtn.disabled = true;
    sendLbl.textContent = t('cm.sending');
    statusEl.className = 'form-status';
    try {
      const res = await fetch(FORM_ENDPOINT, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({
          nombre: name, email, motivo: reason, empresa: company || '—', mensaje: message,
          pagina: location.href, _subject: subject, _template: 'table', _captcha: 'false',
        }),
      });
      const data = await res.json().catch(() => ({}));
      if (!res.ok || String(data.success) !== 'true') throw new Error(data.message || res.status);
      form.reset();
      statusEl.textContent = t('cm.ok');
      statusEl.className = 'form-status ok';
    } catch {
      const body = `${message}\n\n— ${name} (${email})${company ? ' · ' + company : ''}`;
      statusEl.innerHTML = `${t('cm.err')} <a href="${mailto(subject, body)}">${t('cm.err.link')}</a>`;
      statusEl.className = 'form-status err';
    } finally {
      sendBtn.disabled = false;
      sendLbl.textContent = t('cm.send');
    }
  });
}

// ═══ LIGHTBOX ═══
let lb = null;
function buildLightbox() {
  const s = COMMON.es;
  const d = document.createElement('dialog');
  d.className = 'lightbox';
  d.setAttribute('aria-label', s['lb.label']);
  d.dataset.i18nAttr = 'aria-label:lb.label';
  d.innerHTML = `
    <div class="lb-inner">
      <span class="lb-count" aria-live="polite"></span>
      <img class="lb-img" alt="">
      <p class="lb-cap"></p>
      <button type="button" class="lb-btn lb-close" aria-label="${s['lb.close']}" data-i18n-attr="aria-label:lb.close">${ICON.x}</button>
      <button type="button" class="lb-btn lb-prev" aria-label="${s['lb.prev']}" data-i18n-attr="aria-label:lb.prev">${ICON.prev}</button>
      <button type="button" class="lb-btn lb-next" aria-label="${s['lb.next']}" data-i18n-attr="aria-label:lb.next">${ICON.next}</button>
    </div>`;
  document.body.appendChild(d);

  const img = d.querySelector('.lb-img'), cap = d.querySelector('.lb-cap'), count = d.querySelector('.lb-count');
  let items = [], i = 0, onClose = null;
  const show = n => {
    i = (n + items.length) % items.length;
    const it = items[i];
    img.src = it.dataset.full || it.currentSrc || it.src;
    img.alt = it.alt;
    const fig = it.closest('figure');
    const fc = fig && fig.querySelector('figcaption');
    cap.textContent = fc ? fc.textContent.trim() : it.alt;
    count.textContent = `${i + 1} / ${items.length}`;
  };
  d.querySelector('.lb-prev').addEventListener('click', () => show(i - 1));
  d.querySelector('.lb-next').addEventListener('click', () => show(i + 1));
  d.querySelector('.lb-close').addEventListener('click', () => d.close());
  d.addEventListener('click', e => { if (e.target === d || e.target.classList.contains('lb-inner')) d.close(); });
  d.addEventListener('keydown', e => {
    if (items.length < 2) return;
    if (e.key === 'ArrowLeft') show(i - 1);
    if (e.key === 'ArrowRight') show(i + 1);
  });
  d.addEventListener('close', () => {
    document.documentElement.classList.remove('modal-open');
    if (onClose) onClose(i);
  });

  lb = {
    open(list, start, cb) {
      if (typeof d.showModal !== 'function') { window.open(list[start].src, '_blank'); return; }
      items = list; onClose = cb || null;
      d.classList.toggle('single', list.length < 2);
      show(start);
      d.showModal();
      document.documentElement.classList.add('modal-open');
    },
  };
}

// Stand-alone zoomable images: <img data-zoom> (grouped by the closest [data-gallery])
function initZoom() {
  document.querySelectorAll('img[data-zoom]').forEach(im => {
    if (im.closest('[data-carousel]')) return;
    im.addEventListener('click', () => {
      const group = im.closest('[data-gallery]');
      const list = group ? [...group.querySelectorAll('img[data-zoom]')] : [im];
      lb.open(list, list.indexOf(im));
    });
  });
}

// ═══ CAROUSEL ═══
// Markup: .car[data-carousel] > .carousel (> .car-track > figure.car-slide*, .car-btn, .car-count) + .car-dots
function initCarousel(root) {
  const track = root.querySelector('.car-track');
  const slides = [...track.children];
  const imgs = slides.map(s => s.querySelector('img'));
  const dots = root.querySelector('.car-dots');
  const count = root.querySelector('.car-count');
  let idx = 0;

  slides.forEach((s, n) => {
    const im = imgs[n];
    // Absolute URL: a relative one would resolve against the stylesheet, not the page
    if (im) s.style.setProperty('--img', `url("${im.src}")`);
    s.setAttribute('role', 'group');
    s.setAttribute('aria-roledescription', 'slide');
    s.setAttribute('aria-label', `${n + 1} / ${slides.length}`);
  });

  const dotBtns = slides.map((_, n) => {
    const b = document.createElement('button');
    b.type = 'button';
    b.className = 'car-dot';
    b.addEventListener('click', () => go(n));
    if (dots) dots.appendChild(b);
    return b;
  });

  const labelDots = () => dotBtns.forEach((b, n) => b.setAttribute('aria-label', `${t('car.goto')} ${n + 1}`));
  document.addEventListener('langchange', labelDots);
  labelDots();

  function update() {
    dotBtns.forEach((b, n) => b.setAttribute('aria-current', n === idx ? 'true' : 'false'));
    if (count) count.textContent = `${idx + 1} / ${slides.length}`;
  }
  function go(n, instant) {
    idx = (n + slides.length) % slides.length;
    track.scrollTo({ left: slides[idx].offsetLeft, behavior: instant ? 'auto' : 'smooth' });
    update();
  }

  const io = new IntersectionObserver(entries => {
    entries.forEach(e => {
      if (e.isIntersecting && e.intersectionRatio >= 0.6) { idx = slides.indexOf(e.target); update(); }
    });
  }, { root: track, threshold: [0.6] });
  slides.forEach(s => io.observe(s));

  root.querySelector('.car-prev')?.addEventListener('click', () => go(idx - 1));
  root.querySelector('.car-next')?.addEventListener('click', () => go(idx + 1));
  root.addEventListener('keydown', e => {
    if (e.target.closest('.car-dot')) return;
    if (e.key === 'ArrowLeft') { e.preventDefault(); go(idx - 1); }
    if (e.key === 'ArrowRight') { e.preventDefault(); go(idx + 1); }
  });
  imgs.forEach((im, n) => im && im.addEventListener('click', () => lb.open(imgs, n, last => go(last, true))));

  if (slides.length < 2) root.querySelectorAll('.car-btn').forEach(b => b.hidden = true);
  update();
}

// ═══ COPY CITATION / BIBTEX ═══
function copyText(text) {
  if (navigator.clipboard && window.isSecureContext) return navigator.clipboard.writeText(text);
  return new Promise((resolve, reject) => {
    const ta = document.createElement('textarea');
    ta.value = text;
    ta.setAttribute('readonly', '');
    ta.style.cssText = 'position:fixed;top:-1000px;opacity:0';
    document.body.appendChild(ta);
    ta.select();
    const ok = document.execCommand('copy');
    ta.remove();
    ok ? resolve() : reject();
  });
}
function initCopy() {
  document.querySelectorAll('[data-copy]').forEach(btn => {
    btn.addEventListener('click', async () => {
      const src = document.querySelector(btn.dataset.copy);
      if (!src) return;
      try {
        const text = src.tagName === 'PRE' ? src.textContent.trim() : src.textContent.replace(/\s+/g, ' ').trim();
        await copyText(text);
        btn.dataset.state = 'copied';
        clearTimeout(btn._t);
        btn._t = setTimeout(() => { delete btn.dataset.state; }, 2200);
      } catch { /* clipboard unavailable: text stays selectable */ }
    });
  });
}

// ═══ LANGUAGE ═══
const originals = new WeakMap();
const attrOriginals = new WeakMap();
const docTitle = document.title;
const metaDesc = document.querySelector('meta[name="description"]');
const metaDescOrig = metaDesc ? metaDesc.getAttribute('content') : '';

function applyLang(l) {
  lang = l;
  document.documentElement.lang = l;

  document.querySelectorAll('[data-i18n]').forEach(el => {
    if (!originals.has(el)) originals.set(el, el.innerHTML);
    const v = lookup(l, el.dataset.i18n);
    el.innerHTML = v != null ? v : originals.get(el);
  });

  document.querySelectorAll('[data-i18n-attr]').forEach(el => {
    const pairs = el.dataset.i18nAttr.split(';').map(p => p.split(':').map(x => x.trim()));
    let orig = attrOriginals.get(el);
    if (!orig) {
      orig = {};
      pairs.forEach(([a]) => { orig[a] = el.getAttribute(a); });
      attrOriginals.set(el, orig);
    }
    pairs.forEach(([a, k]) => {
      const v = lookup(l, k);
      el.setAttribute(a, v != null ? v : orig[a]);
    });
  });

  document.title = lookup(l, 'meta.title') ?? docTitle;
  if (metaDesc) metaDesc.setAttribute('content', lookup(l, 'meta.desc') ?? metaDescOrig);

  document.querySelectorAll('.lang-btn').forEach(b => {
    const on = b.dataset.lang === l;
    b.classList.toggle('active', on);
    b.setAttribute('aria-pressed', String(on));
  });

  store.set('lang', l);
  document.dispatchEvent(new CustomEvent('langchange', { detail: { lang: l } }));
}

// ═══ NAV ═══
function initNav() {
  const nav = document.getElementById('nav');
  if (!nav) return;
  const onScroll = () => nav.classList.toggle('scrolled', scrollY > 40);
  addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  const toggle = document.getElementById('navToggle');
  const links = document.getElementById('navLinks');
  if (!toggle || !links) return;
  toggle.addEventListener('click', () => toggle.setAttribute('aria-expanded', String(links.classList.toggle('open'))));
  links.querySelectorAll('a').forEach(a => a.addEventListener('click', () => {
    links.classList.remove('open');
    toggle.setAttribute('aria-expanded', 'false');
  }));

  // Scroll-spy only for in-page anchors (home page)
  const spy = links.querySelectorAll('a[href^="#"]');
  if (!spy.length) return;
  document.querySelectorAll('section[id]').forEach(s => {
    new IntersectionObserver(entries => {
      entries.forEach(e => {
        if (e.isIntersecting) spy.forEach(a => a.classList.toggle('active', a.getAttribute('href') === '#' + e.target.id));
      });
    }, { threshold: 0.35 }).observe(s);
  });
}

// ═══ REVEAL ═══
// Elements that enter the viewport together fade in one after another.
function initReveal() {
  const els = document.querySelectorAll('.reveal');
  if (!('IntersectionObserver' in window)) { els.forEach(el => el.classList.add('visible')); return; }
  const ro = new IntersectionObserver(entries => {
    let k = 0;
    entries.forEach(e => {
      if (!e.isIntersecting) return;
      const el = e.target, delay = Math.min(k++, 6) * 80;
      if (delay) {
        el.style.transitionDelay = delay + 'ms';
        setTimeout(() => { el.style.transitionDelay = ''; }, delay + 700);
      }
      el.classList.add('visible');
      ro.unobserve(el);
    });
  }, { threshold: 0.1 });
  els.forEach(el => ro.observe(el));
}

const REDUCED = matchMedia('(prefers-reduced-motion: reduce)').matches;

// ═══ AMBIENT BACKGROUND (hero + detail headers) ═══
function initFx() {
  document.querySelectorAll('#inicio, .page-hero').forEach(host => {
    const fx = document.createElement('div');
    fx.className = 'fx';
    fx.setAttribute('aria-hidden', 'true');
    fx.innerHTML = '<i class="fx-blob fx-b1"></i><i class="fx-blob fx-b2"></i><i class="fx-blob fx-b3"></i><i class="fx-blob fx-b4"></i><i class="fx-grid"></i>';
    host.prepend(fx);
    if (host.id === 'inicio') initNet(host, fx);
    fx.insertAdjacentHTML('beforeend', '<i class="fx-grain"></i>');
  });
}

// Neural-network canvas behind the hero: drifting nodes linked by proximity,
// plus links to the pointer. Paused off-screen and in background tabs.
function initNet(host, fx) {
  const cv = document.createElement('canvas');
  cv.className = 'fx-net';
  fx.appendChild(cv);
  fx.insertAdjacentHTML('beforeend', '<i class="fx-veil"></i>');
  const ctx = cv.getContext('2d');
  if (!ctx) return;
  const LINK = 130, REACH = 170;
  const mouse = { x: -1e4, y: -1e4 };
  let w = 0, h = 0, pts = [], raf = 0, inView = true;

  const spawn = () => ({
    x: Math.random() * w, y: Math.random() * h,
    vx: (Math.random() - 0.5) * 0.3, vy: (Math.random() - 0.5) * 0.3,
    r: Math.random() * 1.3 + 0.7,
  });
  // Existing nodes are rescaled, not re-seeded, so height changes (e.g. the badge
  // wrapping to two lines on phones) don't make the network jump.
  function size() {
    const dpr = Math.min(window.devicePixelRatio || 1, 2), ow = w, oh = h;
    w = host.clientWidth; h = host.clientHeight;
    cv.width = w * dpr; cv.height = h * dpr;
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    if (ow && oh) for (const p of pts) { p.x *= w / ow; p.y *= h / oh; }
    const n = Math.round(Math.min(85, Math.max(24, w * h / 15000)));
    while (pts.length < n) pts.push(spawn());
    pts.length = n;
  }
  function line(a, b, color) {
    ctx.strokeStyle = color;
    ctx.beginPath(); ctx.moveTo(a.x, a.y); ctx.lineTo(b.x, b.y); ctx.stroke();
  }
  function draw() {
    ctx.clearRect(0, 0, w, h);
    ctx.lineWidth = 1;
    for (let i = 0; i < pts.length; i++) {
      const a = pts[i];
      for (let j = i + 1; j < pts.length; j++) {
        const b = pts[j], dx = a.x - b.x, dy = a.y - b.y, d2 = dx * dx + dy * dy;
        if (d2 < LINK * LINK) line(a, b, `rgba(147,197,253,${(1 - Math.sqrt(d2) / LINK) * 0.28})`);
      }
      const dm = Math.hypot(a.x - mouse.x, a.y - mouse.y);
      if (dm < REACH) line(a, mouse, `rgba(252,211,77,${(1 - dm / REACH) * 0.45})`);
    }
    ctx.fillStyle = 'rgba(191,219,254,.8)';
    for (const p of pts) { ctx.beginPath(); ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2); ctx.fill(); }
  }
  function step() {
    for (const p of pts) {
      p.x += p.vx; p.y += p.vy;
      if (p.x < 0 || p.x > w) p.vx *= -1;
      if (p.y < 0 || p.y > h) p.vy *= -1;
    }
    draw();
    raf = requestAnimationFrame(step);
  }
  function sync() {
    const run = inView && !document.hidden && !REDUCED;
    if (run && !raf) raf = requestAnimationFrame(step);
    if (!run && raf) { cancelAnimationFrame(raf); raf = 0; }
  }

  size(); draw();
  if ('ResizeObserver' in window) new ResizeObserver(() => { size(); draw(); }).observe(host);
  if ('IntersectionObserver' in window) new IntersectionObserver(([e]) => { inView = e.isIntersecting; sync(); }).observe(host);
  document.addEventListener('visibilitychange', sync);
  host.addEventListener('pointermove', e => {
    const r = host.getBoundingClientRect();
    mouse.x = e.clientX - r.left; mouse.y = e.clientY - r.top;
  }, { passive: true });
  host.addEventListener('pointerleave', () => { mouse.x = mouse.y = -1e4; });
  sync();
}

// ═══ CARDS: pointer-following light (mouse/trackpad only) ═══
function initSpotlight() {
  if (!matchMedia('(hover: hover) and (pointer: fine)').matches) return;
  document.querySelectorAll('.proj-card, .pub-card, .tl-card, .sk-group, .cert-card, .kpi, .mod, .rel-card, .doc-card, .contact-link')
    .forEach(el => el.classList.add('spot'));
  document.addEventListener('pointermove', e => {
    const el = e.target.closest && e.target.closest('.spot');
    if (!el) return;
    const r = el.getBoundingClientRect();
    el.style.setProperty('--mx', `${e.clientX - r.left}px`);
    el.style.setProperty('--my', `${e.clientY - r.top}px`);
  }, { passive: true });
}

// ═══ COUNTERS: metrics count up when they scroll into view ═══
// Animates the first number in the element's leading text node ("89", "×2.8", "83.9").
function initCounters() {
  if (REDUCED || !('IntersectionObserver' in window)) return;
  const io = new IntersectionObserver(entries => entries.forEach(e => {
    if (!e.isIntersecting) return;
    io.unobserve(e.target);
    const { node, pre, to, dec, post } = e.target._count;
    const t0 = performance.now(), dur = 1400;
    const tick = now => {
      const p = Math.min(1, (now - t0) / dur);
      node.nodeValue = pre + (to * (1 - Math.pow(1 - p, 3))).toFixed(dec) + post;
      if (p < 1) requestAnimationFrame(tick);
    };
    requestAnimationFrame(tick);
  }), { threshold: 0.6 });

  document.querySelectorAll('.stat .n, .m-val, .kpi .v').forEach(el => {
    const node = [...el.childNodes].find(n => n.nodeType === 3 && /\d/.test(n.nodeValue));
    const m = node && node.nodeValue.match(/^(\D*?)(\d+(?:\.\d+)?)([\s\S]*)$/);
    if (!m) return;
    const dec = (m[2].split('.')[1] || '').length;
    el._count = { node, pre: m[1], to: parseFloat(m[2]), dec, post: m[3] };
    node.nodeValue = m[1] + (0).toFixed(dec) + m[3];
    io.observe(el);
  });
}

// ═══ LIMA BANNER: replays a real session log line by line ═══
function initLimaTerm() {
  const body = document.querySelector('[data-lima-term]');
  if (!body || REDUCED || !('IntersectionObserver' in window)) return;
  const lines = [...body.children];
  const typed = body.querySelector('[data-type]');
  const text = typed.textContent;
  const caret = document.createElement('span');
  caret.className = 'caret';
  let inView = false, wake = null;
  const sleep = ms => new Promise(r => setTimeout(r, ms));
  // Resolves once the terminal is on screen and the tab is visible
  const ready = () => (inView && !document.hidden) ? Promise.resolve() : new Promise(r => { wake = r; });
  const sync = () => { if (wake && inView && !document.hidden) { wake(); wake = null; } };
  new IntersectionObserver(([e]) => { inView = e.isIntersecting; sync(); }, { threshold: 0.3 }).observe(body);
  document.addEventListener('visibilitychange', sync);
  body.classList.add('is-anim');

  (async () => {
    for (;;) {
      lines.forEach(l => l.classList.remove('on'));
      typed.textContent = '';
      body.classList.remove('fade');
      for (const l of lines) {
        await ready();
        l.classList.add('on');
        l.appendChild(caret);
        if (l.hasAttribute('data-listen')) {
          body.classList.add('listening');
          await sleep(1800);
          body.classList.remove('listening');
          continue;
        }
        if (l.contains(typed)) {
          for (let i = 1; i <= text.length; i++) { typed.textContent = text.slice(0, i); await sleep(32); }
        }
        await sleep(700);
      }
      await sleep(3800);
      body.classList.add('fade');
      await sleep(600);
    }
  })();
}

// ═══ PAGE TRANSITIONS ═══
// Cards and detail headers share a view-transition-name so one morphs into the other.
// Names of elements that are off screen are dropped for the transition, so nothing
// flies in from outside the viewport.
function initPageTransitions() {
  if (!window.CSSViewTransitionRule) return;
  const named = [...document.querySelectorAll('[style*="view-transition-name:vt-"]')];
  named.forEach(el => { el.dataset.vt = el.style.viewTransitionName; });
  const dropOffscreen = () => named.forEach(el => {
    const r = el.getBoundingClientRect();
    if (r.bottom < 0 || r.top > innerHeight) el.style.viewTransitionName = 'none';
  });
  const restore = () => named.forEach(el => { el.style.viewTransitionName = el.dataset.vt; });
  addEventListener('pageswap', e => { if (e.viewTransition) dropOffscreen(); });
  addEventListener('pagereveal', e => {
    if (!e.viewTransition) return;
    dropOffscreen();
    e.viewTransition.finished.finally(restore);
  });
  addEventListener('pageshow', restore);
}

// ═══ INIT ═══
buildContact();
buildLightbox();
document.querySelectorAll('.lang-btn').forEach(b => b.addEventListener('click', () => applyLang(b.dataset.lang)));
applyLang(lang);
initFx();
initNav();
initReveal();
initContact();
initZoom();
document.querySelectorAll('[data-carousel]').forEach(initCarousel);
initCopy();
initSpotlight();
initCounters();
initLimaTerm();
initPageTransitions();

window.site = { t, applyLang, get lang() { return lang; } };
})();
