// Tata letak bersama: topbar, navbar, footer, dan perilaku umum (tab, toast, modal, reveal, formulir).
(function () {
  const S = window.SITE;
  const page = document.body.dataset.page || 'beranda';

  const NAV = [
    { id: 'beranda', label: 'Beranda', url: 'index.html' },
    { id: 'profil', label: 'Profil', url: 'profil.html', children: [
      ['Sejarah Singkat', 'profil.html#sejarah', 'fa-clock-rotate-left'],
      ['Visi dan Misi', 'profil.html#visi-misi', 'fa-bullseye'],
      ['Tugas Pokok dan Fungsi', 'profil.html#tupoksi', 'fa-list-check'],
      ['Struktur Organisasi', 'profil.html#struktur', 'fa-sitemap'],
      ['Profil Pimpinan', 'profil.html#pimpinan', 'fa-user-tie'],
    ] },
    { id: 'layanan', label: 'Layanan Publik', url: 'layanan.html', children: [
      ['Daftar Layanan', 'layanan.html#daftar-layanan', 'fa-clipboard-list'],
      ['Maklumat Pelayanan', 'layanan.html#maklumat', 'fa-handshake'],
      ['Unduhan Formulir', 'layanan.html#unduhan', 'fa-file-arrow-down'],
      ['Layanan Online', 'layanan.html#online', 'fa-globe'],
    ] },
    { id: 'berita', label: 'Media Center', url: 'berita.html', children: [
      ['Berita Dinas', 'berita.html#berita', 'fa-newspaper'],
      ['Pengumuman & Pengadaan', 'berita.html#pengumuman', 'fa-bullhorn'],
      ['Agenda Kegiatan', 'berita.html#agenda', 'fa-calendar-days'],
      ['Galeri Foto & Video', 'berita.html#galeri', 'fa-images'],
    ] },
    { id: 'ppid', label: 'PPID', url: 'ppid.html', children: [
      ['Profil PPID', 'ppid.html#profil-ppid', 'fa-id-badge'],
      ['Informasi Berkala', 'ppid.html#berkala', 'fa-calendar-check'],
      ['Informasi Serta-Merta', 'ppid.html#serta-merta', 'fa-triangle-exclamation'],
      ['Informasi Setiap Saat', 'ppid.html#setiap-saat', 'fa-box-archive'],
      ['Permohonan Informasi', 'ppid.html#permohonan', 'fa-file-signature'],
    ] },
    { id: 'transparansi', label: 'Transparansi', url: 'transparansi.html', children: [
      ['LAKIP / SAKIP', 'transparansi.html#lakip', 'fa-chart-line'],
      ['RENSTRA & RENJA', 'transparansi.html#renstra', 'fa-route'],
      ['DPA / Anggaran', 'transparansi.html#dpa', 'fa-sack-dollar'],
      ['Laporan Keuangan', 'transparansi.html#keuangan', 'fa-file-invoice-dollar'],
    ] },
    { id: 'kontak', label: 'Kontak', url: 'kontak.html' },
  ];

  const logo = (cls) => `<img src="assets/img/logo.png" alt="Lambang Provinsi Papua Pegunungan" class="${cls} shrink-0 object-contain">`;

  // ---------- Topbar ----------
  const topbar = `
  <div class="bg-brand-950 text-[12px] text-white/80 no-print">
    <div class="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-x-4 gap-y-1 px-4 py-2 sm:px-6 lg:px-8">
      <p class="flex min-w-0 items-center gap-2">
        <span class="inline-flex shrink-0 items-center gap-1.5 rounded-full bg-gold-400 px-2 py-0.5 text-[10px] font-extrabold uppercase tracking-wider text-slate-900"><i class="fa-solid fa-person-digging"></i>Dalam Pengembangan</span>
        <span class="truncate">Situs resmi sedang dibangun · Powered by
          <a href="https://nokensoft.com" target="_blank" rel="noopener" class="inline-flex items-center gap-1 font-bold text-white hover:text-gold-300"><img src="assets/img/nokensoft.png" alt="" class="h-3.5 w-auto">Nokensoft</a>
          <a href="https://nokensoft.com" target="_blank" rel="noopener" class="hidden text-white/60 hover:text-white sm:inline">nokensoft.com</a>
        </span>
      </p>
      <div class="hidden items-center gap-4 md:flex">
        <a href="mailto:${S.email}" class="hover:text-white"><i class="fa-regular fa-envelope mr-1.5"></i>${S.email}</a>
        <a href="tel:${S.telepon}" class="hover:text-white"><i class="fa-solid fa-phone mr-1.5"></i>${S.telepon}</a>
        <span class="flex items-center gap-2.5 border-l border-white/20 pl-4">
          ${S.sosmed.map((s) => `<a href="${s.url}" aria-label="${s.nama}" class="hover:text-gold-300"><i class="fa-brands ${s.icon}"></i></a>`).join('')}
        </span>
      </div>
    </div>
  </div>`;

  // ---------- Navbar ----------
  const desktopNav = NAV.map((n) => {
    const active = n.id === page;
    const base = `inline-flex items-center gap-1.5 rounded-lg px-3 py-2 ${active ? 'bg-brand-50 text-brand-700' : 'text-slate-600 hover:bg-slate-50 hover:text-slate-900'}`;
    if (!n.children) return `<a href="${n.url}" class="${base}">${n.label}</a>`;
    return `
      <div class="nav-item relative">
        <a href="${n.url}" class="${base}">${n.label}<i class="fa-solid fa-chevron-down text-[9px] opacity-60"></i></a>
        <div class="nav-drop absolute left-0 top-full z-40 pt-2">
          <div class="w-64 rounded-xl border border-slate-200 bg-white p-2 shadow-float">
            ${n.children.map(([l, u, i]) => `<a href="${u}" class="flex items-center gap-3 rounded-lg px-3 py-2 text-slate-600 hover:bg-brand-50 hover:text-brand-700"><i class="fa-solid ${i} w-4 text-center text-brand-500"></i>${l}</a>`).join('')}
          </div>
        </div>
      </div>`;
  }).join('');

  const mobileNav = NAV.map((n) => {
    const active = n.id === page;
    if (!n.children) return `<a href="${n.url}" class="block rounded-lg px-3 py-2.5 ${active ? 'bg-brand-50 text-brand-700' : 'text-slate-700 hover:bg-slate-50'}">${n.label}</a>`;
    return `
      <details ${active ? 'open' : ''} class="rounded-lg">
        <summary class="flex items-center justify-between rounded-lg px-3 py-2.5 ${active ? 'bg-brand-50 text-brand-700' : 'text-slate-700 hover:bg-slate-50'}">${n.label}<i class="acc-icon fa-solid fa-chevron-down text-xs"></i></summary>
        <div class="mb-1 ml-3 border-l-2 border-brand-100 pl-2">
          <a href="${n.url}" class="block rounded-lg px-3 py-2 text-slate-600 hover:bg-slate-50">Ringkasan ${n.label}</a>
          ${n.children.map(([l, u]) => `<a href="${u}" class="block rounded-lg px-3 py-2 text-slate-600 hover:bg-slate-50">${l}</a>`).join('')}
        </div>
      </details>`;
  }).join('');

  const header = `
  ${topbar}
  <header id="navbar" class="sticky top-0 z-30 border-b border-slate-200 bg-white/90 backdrop-blur no-print">
    <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <div class="flex items-center justify-between gap-3 py-3">
        <a href="index.html" class="flex min-w-0 items-center gap-3">
          ${logo('h-12 w-12')}
          <span class="min-w-0 leading-tight">
            <span class="block text-[11px] font-bold uppercase tracking-wider text-brand-600">${S.provinsi}</span>
            <span class="block truncate text-sm font-extrabold text-slate-900 sm:text-base">${S.nama}</span>
          </span>
        </a>
        <nav class="hidden items-center gap-0.5 text-sm font-semibold xl:flex" aria-label="Navigasi utama">
          ${desktopNav}
          <a href="${S.dbBeasiswa}" target="_blank" rel="noopener" class="ml-2 inline-flex items-center gap-2 rounded-lg bg-brand-600 px-4 py-2 font-bold text-white shadow-sm hover:bg-brand-700 focus:outline-none focus:ring-2 focus:ring-brand-200">
            <i class="fa-solid fa-graduation-cap"></i>DB Beasiswa
          </a>
        </nav>
        <div class="flex items-center gap-2 xl:hidden">
          <a href="${S.dbBeasiswa}" target="_blank" rel="noopener" class="hidden items-center gap-2 rounded-lg bg-brand-600 px-3 py-2 text-xs font-bold text-white sm:inline-flex"><i class="fa-solid fa-graduation-cap"></i>DB Beasiswa</a>
          <button id="menu-btn" type="button" class="flex h-10 w-10 items-center justify-center rounded-lg border border-slate-300 text-slate-600" aria-expanded="false" aria-controls="mobile-nav" aria-label="Buka menu">
            <i class="fa-solid fa-bars"></i>
          </button>
        </div>
      </div>
      <nav id="mobile-nav" hidden class="max-h-[75vh] overflow-y-auto border-t border-slate-100 py-2 text-sm font-semibold scroll-slim xl:hidden" aria-label="Navigasi utama">
        ${mobileNav}
        <a href="${S.dbBeasiswa}" target="_blank" rel="noopener" class="mt-2 flex items-center justify-center gap-2 rounded-lg bg-brand-600 px-4 py-2.5 font-bold text-white"><i class="fa-solid fa-graduation-cap"></i>Masuk Database Beasiswa</a>
      </nav>
    </div>
    <div class="gold-bar"></div>
  </header>`;

  // ---------- Footer ----------
  const footer = `
  <footer class="relative mt-16 overflow-hidden bg-brand-950 text-white/75 no-print">
    <div class="pattern-noken absolute inset-0 opacity-60"></div>
    <div class="gold-bar relative"></div>
    <div class="relative mx-auto grid max-w-7xl gap-10 px-4 py-12 sm:px-6 md:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr_1.2fr] lg:px-8">
      <div>
        <div class="flex items-center gap-3">
          ${logo('h-16 w-16')}
          <div class="leading-tight">
            <p class="text-[11px] font-bold uppercase tracking-wider text-gold-300">${S.provinsi}</p>
            <p class="text-lg font-extrabold text-white">${S.nama}</p>
          </div>
        </div>
        <p class="mt-4 text-sm leading-relaxed">Melayani pendidikan menengah, pendidikan khusus, dan pemajuan kebudayaan di 8 kabupaten Papua Pegunungan. <em class="text-gold-300 not-italic font-semibold">Bangkit Bersama Membangun.</em></p>
        <div class="mt-5 flex gap-2">
          ${S.sosmed.map((s) => `<a href="${s.url}" aria-label="${s.nama}" class="flex h-9 w-9 items-center justify-center rounded-lg bg-white/10 text-white hover:bg-gold-400 hover:text-slate-900"><i class="fa-brands ${s.icon}"></i></a>`).join('')}
        </div>
      </div>
      <div>
        <h3 class="text-sm font-extrabold uppercase tracking-wider text-white">Tautan</h3>
        <ul class="mt-4 space-y-2 text-sm">
          ${NAV.map((n) => `<li><a href="${n.url}" class="hover:text-gold-300">${n.label}</a></li>`).join('')}
        </ul>
      </div>
      <div>
        <h3 class="text-sm font-extrabold uppercase tracking-wider text-white">Layanan Digital</h3>
        <ul class="mt-4 space-y-2 text-sm">
          <li><a href="${S.dbBeasiswa}" target="_blank" rel="noopener" class="hover:text-gold-300">Database Beasiswa <i class="fa-solid fa-arrow-up-right-from-square text-[10px]"></i></a></li>
          <li><a href="ppid.html#permohonan" class="hover:text-gold-300">Permohonan Informasi</a></li>
          <li><a href="kontak.html#pengaduan" class="hover:text-gold-300">Pengaduan Masyarakat</a></li>
          <li><a href="${S.lapor}" target="_blank" rel="noopener" class="hover:text-gold-300">SP4N-LAPOR! <i class="fa-solid fa-arrow-up-right-from-square text-[10px]"></i></a></li>
          <li><a href="layanan.html#unduhan" class="hover:text-gold-300">Unduhan Formulir</a></li>
        </ul>
      </div>
      <div>
        <h3 class="text-sm font-extrabold uppercase tracking-wider text-white">Hubungi Kami</h3>
        <ul class="mt-4 space-y-3 text-sm">
          <li class="flex gap-3"><i class="fa-solid fa-location-dot mt-1 text-gold-300"></i><span>${S.alamat}</span></li>
          <li class="flex gap-3"><i class="fa-solid fa-phone mt-1 text-gold-300"></i><a href="tel:${S.telepon}" class="hover:text-white">${S.telepon}</a></li>
          <li class="flex gap-3"><i class="fa-regular fa-envelope mt-1 text-gold-300"></i><a href="mailto:${S.email}" class="break-all hover:text-white">${S.email}</a></li>
          <li class="flex gap-3"><i class="fa-regular fa-clock mt-1 text-gold-300"></i><span>Senin–Kamis 08.00–16.00 WIT<br>Jumat 08.00–16.30 WIT</span></li>
        </ul>
      </div>
    </div>
    <div class="relative border-t border-white/10">
      <div class="mx-auto flex max-w-7xl flex-col items-center justify-between gap-2 px-4 py-4 text-center text-xs sm:flex-row sm:px-6 sm:text-left lg:px-8">
        <p>&copy; ${new Date().getFullYear()} ${S.nama} ${S.provinsi}. Hak cipta dilindungi.</p>
        <p class="flex items-center gap-1.5">Powered by <a href="https://nokensoft.com" target="_blank" rel="noopener" class="inline-flex items-center gap-1.5 font-semibold text-white hover:text-gold-300"><img src="assets/img/nokensoft.png" alt="" class="h-4 w-auto">Nokensoft.com</a></p>
      </div>
    </div>
  </footer>
  <button id="to-top" type="button" aria-label="Kembali ke atas" class="fixed bottom-5 right-5 z-30 hidden h-11 w-11 items-center justify-center rounded-full bg-brand-600 text-white shadow-float hover:bg-brand-700 no-print"><i class="fa-solid fa-arrow-up"></i></button>
  <div id="toast-wrap" class="pointer-events-none fixed inset-x-0 bottom-5 z-50 flex flex-col items-center gap-2 px-4"></div>`;

  document.getElementById('site-header')?.insertAdjacentHTML('afterbegin', header);
  document.getElementById('site-footer')?.insertAdjacentHTML('afterbegin', footer);

  // ---------- Menu mobile ----------
  const btn = document.getElementById('menu-btn');
  const mnav = document.getElementById('mobile-nav');
  btn?.addEventListener('click', () => {
    const open = mnav.hidden;
    mnav.hidden = !open;
    btn.setAttribute('aria-expanded', String(open));
    btn.innerHTML = `<i class="fa-solid ${open ? 'fa-xmark' : 'fa-bars'}"></i>`;
  });
  mnav?.querySelectorAll('a').forEach((a) => a.addEventListener('click', () => { mnav.hidden = true; btn.setAttribute('aria-expanded', 'false'); btn.innerHTML = '<i class="fa-solid fa-bars"></i>'; }));

  // ---------- Tombol ke atas ----------
  const toTop = document.getElementById('to-top');
  window.addEventListener('scroll', () => { toTop.classList.toggle('hidden', scrollY < 600); toTop.classList.toggle('flex', scrollY >= 600); }, { passive: true });
  toTop.addEventListener('click', () => scrollTo({ top: 0 }));

  // ---------- Toast ----------
  window.toast = (msg, type = 'success') => {
    const color = { success: 'bg-brand-700', info: 'bg-edu-700', warn: 'bg-amber-600' }[type] || 'bg-slate-800';
    const icon = { success: 'fa-circle-check', info: 'fa-circle-info', warn: 'fa-triangle-exclamation' }[type] || 'fa-circle-info';
    const el = document.createElement('div');
    el.className = `pointer-events-auto flex max-w-md items-start gap-3 rounded-xl ${color} px-4 py-3 text-sm font-semibold text-white shadow-float transition-all duration-300`;
    el.setAttribute('role', 'status');
    el.innerHTML = `<i class="fa-solid ${icon} mt-0.5"></i><span>${msg}</span>`;
    document.getElementById('toast-wrap').appendChild(el);
    setTimeout(() => { el.style.opacity = '0'; el.style.transform = 'translateY(8px)'; }, 4200);
    setTimeout(() => el.remove(), 4600);
  };

  // Tautan berkas yang belum tersedia
  document.addEventListener('click', (e) => {
    const a = e.target.closest('[data-soon]');
    if (!a) return;
    e.preventDefault();
    toast(a.dataset.soon || 'Dokumen akan segera tersedia setelah diunggah oleh admin.', 'info');
  });

  // ---------- Modal sederhana ----------
  window.openModal = (html) => {
    const wrap = document.createElement('div');
    wrap.className = 'fixed inset-0 z-50 flex items-end justify-center bg-slate-900/60 p-0 backdrop-blur-sm sm:items-center sm:p-6';
    wrap.innerHTML = `<div role="dialog" aria-modal="true" class="relative max-h-[92vh] w-full max-w-3xl overflow-y-auto rounded-t-2xl bg-white shadow-float scroll-slim sm:rounded-2xl">
      <button type="button" data-close class="absolute right-3 top-3 z-10 flex h-10 w-10 items-center justify-center rounded-full bg-white/90 text-slate-600 shadow hover:bg-white" aria-label="Tutup"><i class="fa-solid fa-xmark"></i></button>
      ${html}</div>`;
    const close = () => { wrap.remove(); document.body.style.overflow = ''; document.removeEventListener('keydown', onKey); };
    const onKey = (e) => e.key === 'Escape' && close();
    wrap.addEventListener('click', (e) => { if (e.target === wrap || e.target.closest('[data-close]')) close(); });
    document.addEventListener('keydown', onKey);
    document.body.appendChild(wrap);
    document.body.style.overflow = 'hidden';
    wrap.querySelector('[data-close]').focus();
  };

  // ---------- Kartu & detail berita (dipakai beranda dan media center) ----------
  window.beritaCard = (b) => `
    <article class="reveal group flex flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-card transition hover:-translate-y-1 hover:shadow-float">
      <button type="button" data-berita="${b.id}" class="relative block aspect-[16/10] overflow-hidden bg-slate-100 text-left">
        <img src="${b.img}" alt="" loading="lazy" class="h-full w-full object-cover transition duration-500 group-hover:scale-105">
        <span class="absolute left-3 top-3 rounded-full bg-white/95 px-2.5 py-1 text-[11px] font-bold text-brand-700">${b.kategori}</span>
      </button>
      <div class="flex flex-1 flex-col p-5">
        <p class="text-xs font-semibold text-slate-500"><i class="fa-regular fa-calendar mr-1"></i>${fmtTanggal(b.tanggal)}</p>
        <h3 class="mt-2 text-base font-extrabold leading-snug text-slate-900"><button type="button" data-berita="${b.id}" class="text-left hover:text-brand-700">${b.judul}</button></h3>
        <p class="mt-2 line-clamp-3 flex-1 text-sm text-slate-600">${b.ringkas}</p>
        <button type="button" data-berita="${b.id}" class="mt-4 self-start text-sm font-bold text-edu-600 hover:underline">Baca selengkapnya <i class="fa-solid fa-arrow-right text-xs"></i></button>
      </div>
    </article>`;

  document.addEventListener('click', (e) => {
    const t = e.target.closest('[data-berita]');
    if (!t) return;
    const b = (window.BERITA || []).find((x) => String(x.id) === t.dataset.berita);
    if (!b) return;
    openModal(`
      <img src="${b.img.replace('/900/600', '/1200/600')}" alt="" class="aspect-[2/1] w-full object-cover">
      <div class="p-6 sm:p-8">
        <div class="flex flex-wrap items-center gap-2 text-xs font-semibold text-slate-500">
          <span class="rounded-full bg-brand-50 px-2.5 py-1 font-bold text-brand-700">${b.kategori}</span>
          <span><i class="fa-regular fa-calendar mr-1"></i>${fmtTanggal(b.tanggal, { weekday: 'long', day: 'numeric', month: 'long', year: 'numeric' })}</span>
          <span><i class="fa-regular fa-user mr-1"></i>${b.penulis}</span>
        </div>
        <h2 class="mt-3 text-2xl font-extrabold leading-tight text-slate-900">${b.judul}</h2>
        <div class="prose-body mt-5 text-[15px] text-slate-700">${b.isi.map((p) => `<p>${p}</p>`).join('')}</div>
        <div class="mt-6 flex flex-wrap items-center gap-2 border-t border-slate-100 pt-5 text-sm">
          <span class="font-bold text-slate-500">Bagikan:</span>
          <a class="flex h-9 w-9 items-center justify-center rounded-lg bg-[#25d366] text-white" target="_blank" rel="noopener" href="https://wa.me/?text=${encodeURIComponent(b.judul)}" aria-label="WhatsApp"><i class="fa-brands fa-whatsapp"></i></a>
          <a class="flex h-9 w-9 items-center justify-center rounded-lg bg-[#1877f2] text-white" target="_blank" rel="noopener" href="https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(location.href)}" aria-label="Facebook"><i class="fa-brands fa-facebook-f"></i></a>
          <button type="button" data-copy class="flex h-9 w-9 items-center justify-center rounded-lg bg-slate-100 text-slate-600" aria-label="Salin tautan"><i class="fa-solid fa-link"></i></button>
        </div>
      </div>`);
    document.querySelector('[data-copy]')?.addEventListener('click', () => { navigator.clipboard?.writeText(location.href); toast('Tautan disalin.'); });
  });

  // ---------- Tab (data-tabs) dengan dukungan hash URL ----------
  window.initTabs = (root) => {
    const btns = [...root.querySelectorAll('[role="tab"]')];
    const show = (id, scroll) => {
      btns.forEach((b) => {
        const on = b.dataset.tab === id;
        b.setAttribute('aria-selected', String(on));
        document.getElementById('panel-' + b.dataset.tab).hidden = !on;
      });
      if (scroll) root.scrollIntoView({ behavior: 'smooth' });
      observeReveal();
    };
    btns.forEach((b) => b.addEventListener('click', () => { show(b.dataset.tab); history.replaceState(null, '', '#' + b.dataset.tab); }));
    const fromHash = () => { const h = location.hash.slice(1); if (btns.some((b) => b.dataset.tab === h)) show(h, true); };
    window.addEventListener('hashchange', fromHash);
    const h = location.hash.slice(1);
    show(btns.some((b) => b.dataset.tab === h) ? h : btns[0].dataset.tab, btns.some((b) => b.dataset.tab === h));
  };
  document.querySelectorAll('[data-tabs]').forEach(initTabs);

  // ---------- Reveal saat scroll ----------
  const io = 'IntersectionObserver' in window ? new IntersectionObserver((entries) => entries.forEach((en) => {
    if (en.isIntersecting) { en.target.classList.add('is-visible'); io.unobserve(en.target); }
  }), { threshold: 0.12 }) : null;
  window.observeReveal = () => document.querySelectorAll('.reveal:not(.is-visible)').forEach((el) => (io ? io.observe(el) : el.classList.add('is-visible')));
  observeReveal();

  // ---------- Penghitung angka ----------
  const cio = 'IntersectionObserver' in window ? new IntersectionObserver((entries) => entries.forEach((en) => {
    if (!en.isIntersecting) return;
    const el = en.target; const end = +el.dataset.count; const t0 = performance.now();
    const step = (t) => { const p = Math.min((t - t0) / 1400, 1); el.textContent = Math.round(end * (1 - Math.pow(1 - p, 3))).toLocaleString('id-ID'); if (p < 1) requestAnimationFrame(step); };
    requestAnimationFrame(step); cio.unobserve(el);
  }), { threshold: 0.5 }) : null;
  document.querySelectorAll('[data-count]').forEach((el) => (cio ? cio.observe(el) : (el.textContent = (+el.dataset.count).toLocaleString('id-ID'))));

  // ---------- Formulir demo (belum terhubung server) ----------
  document.querySelectorAll('form[data-demo-form]').forEach((form) => {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      if (!form.checkValidity()) { form.reportValidity(); return; }
      const kode = (form.dataset.prefix || 'REQ') + '-' + new Date().toISOString().slice(2, 10).replace(/-/g, '') + '-' + Math.floor(1000 + Math.random() * 9000);
      const out = form.querySelector('[data-result]');
      if (out) {
        out.hidden = false;
        out.innerHTML = `<div class="flex gap-3 rounded-xl border border-brand-200 bg-brand-50 p-4 text-sm text-brand-800"><i class="fa-solid fa-circle-check mt-0.5 text-lg"></i><div><p class="font-extrabold">${form.dataset.success || 'Terkirim.'}</p><p class="mt-1">Nomor registrasi Anda: <strong class="font-mono">${kode}</strong>. Simpan nomor ini untuk menelusuri status.</p><p class="mt-1 text-xs text-brand-700/80">Catatan: formulir masih versi demo dan belum terhubung ke server.</p></div></div>`;
      }
      toast('Berhasil dikirim. No. registrasi ' + kode);
      form.reset();
    });
  });
})();
