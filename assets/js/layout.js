// Tata letak bersama: navbar, footer, modal berita, dan animasi reveal.
(function () {
  const S = window.SITE;
  const page = document.body.dataset.page || 'beranda';
  const waLink = 'https://wa.me/' + S.wa.replace(/\D/g, '');

  const NAV = [
    { id: 'beranda', label: 'Beranda', url: 'index.html' },
    { id: 'berita', label: 'Berita', url: 'berita.html' },
    { id: 'profil', label: 'Tentang', url: 'profil.html', children: [
      ['Tentang Kami', 'profil.html#tentang'],
      ['Visi & Misi', 'profil.html#visi-misi'],
      ['Program Kerja', 'profil.html#program'],
    ] },
  ];

  const logo = (cls) => `<img src="assets/img/logo.png" alt="Lambang Provinsi Papua Pegunungan" class="${cls} shrink-0 object-contain">`;
  const linkCls = (on) => `rounded-lg px-3 py-2 transition ${on ? 'bg-brand-50 text-brand-700' : 'text-hutan-600 hover:bg-hutan-50 hover:text-brand-700'}`;

  // ---------- Navbar ----------
  const desktopNav = NAV.map((n) => {
    const on = n.id === page;
    if (!n.children) return `<a href="${n.url}" class="${linkCls(on)}">${n.label}</a>`;
    return `
      <div class="nav-item relative">
        <a href="${n.url}" class="${linkCls(on)} inline-flex items-center gap-1.5">${n.label}<i class="fa-solid fa-chevron-down text-[9px] opacity-60"></i></a>
        <div class="nav-drop absolute left-0 top-full z-40 pt-2">
          <div class="w-52 rounded-lg border border-hutan-200 bg-white p-1.5 shadow-float">
            ${n.children.map(([l, u]) => `<a href="${u}" class="block rounded-md px-3 py-2 text-hutan-600 hover:bg-brand-50 hover:text-brand-700">${l}</a>`).join('')}
          </div>
        </div>
      </div>`;
  }).join('');

  const mobileNav = NAV.flatMap((n) => [
    `<a href="${n.url}" class="block rounded-lg px-3 py-2.5 ${n.id === page ? 'bg-brand-50 text-brand-700' : 'text-hutan-600'}">${n.label}</a>`,
    ...(n.children || []).map(([l, u]) => `<a href="${u}" class="block rounded-lg py-2 pl-7 pr-3 text-hutan-500">${l}</a>`),
  ]).join('');

  const header = `
  <header class="no-print">
    <!-- Pita atas: nama dinas di kiri, tombol kontak di kanan (mengikuti header demo-dbbeasiswa) -->
    <div class="bg-brand-800 text-white">
      <div class="mx-auto flex max-w-6xl items-center justify-between gap-3 px-4 py-1.5 sm:px-6">
        <p class="min-w-0 truncate text-[11px] font-bold uppercase tracking-wider text-white/90">
          <i class="fa-solid fa-landmark mr-1.5 text-white/60"></i>${S.nama} ${S.provinsi}
        </p>
        <a href="kontak.html" class="inline-flex shrink-0 items-center gap-1.5 rounded-full bg-white px-3 py-1 text-xs font-bold text-brand-700 hover:bg-brand-50"><i class="fa-solid fa-phone"></i>Kontak Kami</a>
      </div>
    </div>

    <!-- Bar utama: lambang, nama situs, menu -->
    <div class="border-b border-hutan-200 bg-white/95 backdrop-blur">
      <div class="mx-auto max-w-6xl px-4 sm:px-6">
        <div class="flex items-center justify-between gap-3 py-3">
          <a href="index.html" class="flex min-w-0 items-center gap-3">
            <!-- Bar setinggi logo 44px; logo yang lebih besar mulai dari tepi atas yang sama lalu menggantung melewati garis bawah. -->
            <span class="relative block h-11 w-20 shrink-0">
              ${logo('absolute left-0 top-0 h-24 w-20 drop-shadow-md')}
            </span>
            <span class="block truncate text-base font-extrabold text-hutan-950 sm:text-lg">${S.singkat}</span>
          </a>
          <nav class="hidden items-center gap-1 text-sm font-semibold md:flex" aria-label="Navigasi utama">
            ${desktopNav}
          </nav>
          <button id="menu-btn" type="button" class="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-hutan-300 text-hutan-600 md:hidden" aria-expanded="false" aria-controls="mobile-nav" aria-label="Buka menu">
            <i class="fa-solid fa-bars"></i>
          </button>
        </div>
        <nav id="mobile-nav" hidden class="border-t border-hutan-100 py-2 pl-20 text-sm font-semibold md:hidden" aria-label="Navigasi utama">
          ${mobileNav}
        </nav>
      </div>
    </div>
  </header>`;

  // ---------- Footer ----------
  const footer = `
  <footer class="bg-hutan-950 text-sm text-hutan-300 no-print">
    <div class="mx-auto grid max-w-6xl gap-10 px-4 py-14 sm:px-6 md:grid-cols-[1.5fr_1fr_1.3fr]">
      <div>
        <div class="flex items-center gap-3">
          ${logo('h-14 w-14')}
          <div class="leading-tight">
            <p class="font-extrabold text-white">${S.nama}</p>
            <p class="mt-0.5 text-xs text-hutan-300">${S.provinsi}</p>
          </div>
        </div>
        <p class="mt-5 max-w-sm leading-relaxed">Melayani pendidikan menengah, pendidikan khusus, dan pemajuan kebudayaan di 8 kabupaten Papua Pegunungan.</p>
        <div class="mt-5 flex gap-2">
          ${S.sosmed.map((s) => `<a href="${s.url}" aria-label="${s.nama}" class="flex h-9 w-9 items-center justify-center rounded-md border border-white/10 text-hutan-200 hover:border-white hover:text-white"><i class="fa-brands ${s.icon}"></i></a>`).join('')}
        </div>
      </div>
      <div>
        <p class="font-bold text-white">Navigasi</p>
        <ul class="mt-4 space-y-2.5">
          ${[...NAV, { label: 'Kontak Kami', url: 'kontak.html' }].map((n) => `<li><a href="${n.url}" class="hover:text-white">${n.label}</a></li>`).join('')}
        </ul>
      </div>
      <div>
        <p class="font-bold text-white">Kontak</p>
        <ul class="mt-4 space-y-3">
          <li class="flex gap-3"><i class="fa-solid fa-location-dot mt-1 w-4 text-white"></i><span>${S.alamat}</span></li>
          <li class="flex gap-3"><i class="fa-solid fa-phone mt-1 w-4 text-white"></i><a href="tel:${S.telepon}" class="hover:text-white">${S.telepon}</a></li>
          <li class="flex gap-3"><i class="fa-regular fa-envelope mt-1 w-4 text-white"></i><a href="mailto:${S.email}" class="break-all hover:text-white">${S.email}</a></li>
        </ul>
      </div>
    </div>
    <div class="border-t border-white/10">
      <div class="mx-auto flex max-w-6xl flex-col items-center justify-between gap-2 px-4 py-5 text-center text-xs sm:flex-row sm:px-6 sm:text-left">
        <p>&copy; ${new Date().getFullYear()} ${S.nama} ${S.provinsi}.</p>
        <p class="flex items-center gap-1.5">Dibuat oleh <a href="https://nokensoft.com" target="_blank" rel="noopener" class="inline-flex items-center gap-1.5 font-semibold text-white hover:text-hutan-200"><img src="assets/img/nokensoft.png" alt="" class="h-4 w-auto">Nokensoft</a></p>
      </div>
    </div>
  </footer>
  <a href="${waLink}" target="_blank" rel="noopener" aria-label="Chat WhatsApp" class="fixed bottom-5 right-5 z-30 flex h-12 w-12 items-center justify-center rounded-full bg-[#25d366] text-2xl text-white shadow-lg transition hover:scale-105 no-print"><i class="fa-brands fa-whatsapp"></i></a>`;

  // ---------- Topbar: penanda situs masih dalam pengembangan ----------
  const topbar = `
  <div class="bg-brand-400 px-4 py-2 text-center text-xs font-semibold text-hutan-950 no-print" role="status">
    <i class="fa-solid fa-person-digging mr-1.5"></i>
    Situs ini masih dalam tahap pengembangan. Sebagian informasi mungkin belum lengkap atau belum final.
  </div>`;

  const siteHeader = document.getElementById('site-header');
  if (siteHeader) {
    // Sticky dipasang di pembungkus: sticky pada <header> tidak berfungsi karena tingginya sama dengan induknya.
    siteHeader.classList.add('sticky', 'top-0', 'z-30');
    siteHeader.insertAdjacentHTML('beforebegin', topbar);
    siteHeader.insertAdjacentHTML('afterbegin', header);
  }
  document.getElementById('site-footer')?.insertAdjacentHTML('afterbegin', footer);

  // ---------- Menu mobile ----------
  const btn = document.getElementById('menu-btn');
  const mnav = document.getElementById('mobile-nav');
  const setMenu = (open) => {
    mnav.hidden = !open;
    btn.setAttribute('aria-expanded', String(open));
    btn.innerHTML = `<i class="fa-solid ${open ? 'fa-xmark' : 'fa-bars'}"></i>`;
  };
  btn?.addEventListener('click', () => setMenu(mnav.hidden));
  mnav?.querySelectorAll('a').forEach((a) => a.addEventListener('click', () => setMenu(false)));

  // ---------- Modal ----------
  window.openModal = (html) => {
    const wrap = document.createElement('div');
    wrap.className = 'fixed inset-0 z-50 flex items-end justify-center bg-hutan-950/70 backdrop-blur-sm sm:items-center sm:p-6';
    wrap.innerHTML = `<div role="dialog" aria-modal="true" class="relative max-h-[92vh] w-full max-w-2xl overflow-y-auto rounded-t-xl bg-white shadow-2xl sm:rounded-xl">
      <button type="button" data-close class="absolute right-3 top-3 z-10 flex h-10 w-10 items-center justify-center rounded-full bg-white/90 text-hutan-900 shadow" aria-label="Tutup"><i class="fa-solid fa-xmark"></i></button>
      ${html}</div>`;
    const close = () => { wrap.remove(); document.body.style.overflow = ''; document.removeEventListener('keydown', onKey); };
    const onKey = (e) => e.key === 'Escape' && close();
    wrap.addEventListener('click', (e) => { if (e.target === wrap || e.target.closest('[data-close]')) close(); });
    document.addEventListener('keydown', onKey);
    document.body.appendChild(wrap);
    document.body.style.overflow = 'hidden';
    wrap.querySelector('[data-close]').focus();
  };

  // ---------- Kartu & detail berita ----------
  window.beritaCard = (b) => `
    <article class="reveal group flex flex-col">
      <button type="button" data-berita="${b.id}" class="block aspect-[16/10] overflow-hidden rounded-lg bg-hutan-100">
        <img src="${b.img}" alt="" loading="lazy" class="h-full w-full object-cover transition duration-500 group-hover:scale-105">
      </button>
      <p class="mt-4 text-xs font-semibold uppercase tracking-wider text-brand-700">${b.kategori} <span class="text-hutan-400">· ${fmtTanggal(b.tanggal)}</span></p>
      <h3 class="mt-2 text-lg font-bold leading-snug text-hutan-950"><button type="button" data-berita="${b.id}" class="text-left hover:text-brand-700">${b.judul}</button></h3>
      <p class="mt-2 line-clamp-2 text-sm leading-relaxed text-hutan-500">${b.ringkas}</p>
    </article>`;

  document.addEventListener('click', (e) => {
    const t = e.target.closest('[data-berita]');
    if (!t) return;
    const b = (window.BERITA || []).find((x) => String(x.id) === t.dataset.berita);
    if (!b) return;
    openModal(`
      <img src="${b.img.replace('w=900&h=600', 'w=1200&h=600')}" alt="" class="aspect-[2/1] w-full object-cover">
      <div class="p-6 sm:p-8">
        <p class="text-xs font-semibold uppercase tracking-wider text-brand-700">${b.kategori} <span class="text-hutan-400">· ${fmtTanggal(b.tanggal, { weekday: 'long', day: 'numeric', month: 'long', year: 'numeric' })}</span></p>
        <h2 class="mt-3 text-2xl font-extrabold leading-tight text-hutan-950">${b.judul}</h2>
        <div class="prose-body mt-5 text-[15px] text-hutan-600">${b.isi.map((p) => `<p>${p}</p>`).join('')}</div>
        <p class="border-t border-hutan-100 pt-4 text-xs text-hutan-400">Ditulis oleh ${b.penulis}</p>
      </div>`);
  });

  // ---------- Reveal saat scroll ----------
  const io = 'IntersectionObserver' in window ? new IntersectionObserver((entries) => entries.forEach((en) => {
    if (en.isIntersecting) { en.target.classList.add('is-visible'); io.unobserve(en.target); }
  }), { threshold: 0.12 }) : null;
  window.observeReveal = () => document.querySelectorAll('.reveal:not(.is-visible)').forEach((el) => (io ? io.observe(el) : el.classList.add('is-visible')));
  observeReveal();
})();
