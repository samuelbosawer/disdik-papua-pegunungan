// Data konten sementara (ilustrasi) — nanti diganti dengan data dari CMS/API.
window.SITE = {
  nama: 'Dinas Pendidikan dan Kebudayaan',
  provinsi: 'Provinsi Papua Pegunungan',
  singkat: 'Disdikbud Papua Pegunungan',
  alamat: 'Jl. Trikora, Wamena, Kabupaten Jayawijaya, Papua Pegunungan 99511',
  telepon: '(0969) 000-000',
  fax: '(0969) 000-001',
  email: 'disdikbud@papuapegunungan.go.id',
  wa: '+62 800-0000-0000',
  dbBeasiswa: 'https://dbbeasiswa.nokensoft.com',
  lapor: 'https://www.lapor.go.id',
  sosmed: [
    { nama: 'Facebook', icon: 'fa-facebook-f', url: '#', akun: 'Disdikbud Papua Pegunungan', warna: 'bg-[#1877f2]' },
    { nama: 'Instagram', icon: 'fa-instagram', url: '#', akun: '@disdikbud.papuapegunungan', warna: 'bg-gradient-to-br from-[#f58529] via-[#dd2a7b] to-[#8134af]' },
    { nama: 'YouTube', icon: 'fa-youtube', url: '#', akun: 'Disdikbud Papua Pegunungan', warna: 'bg-[#ff0000]' },
    { nama: 'TikTok', icon: 'fa-tiktok', url: '#', akun: '@disdikbud.pp', warna: 'bg-slate-900' },
    { nama: 'X / Twitter', icon: 'fa-x-twitter', url: '#', akun: '@disdikbudpp', warna: 'bg-slate-800' },
  ],
  kabupaten: ['Jayawijaya', 'Lanny Jaya', 'Mamberamo Tengah', 'Nduga', 'Pegunungan Bintang', 'Tolikara', 'Yahukimo', 'Yalimo'],
};

window.BERITA = [
  {
    id: 1, kategori: 'Pendataan', tanggal: '2026-11-10', penulis: 'Humas Disdikbud', img: 'https://picsum.photos/seed/pp-dapodik/900/600',
    judul: 'Disdikbud Perkuat Pendataan Guru dan Murid di 8 Kabupaten',
    ringkas: 'Penguatan data pokok pendidikan menjadi dasar percepatan peningkatan kualitas SDM di seluruh wilayah Papua Pegunungan.',
    isi: [
      'Dinas Pendidikan dan Kebudayaan Provinsi Papua Pegunungan menggelar rapat koordinasi pendataan guru dan peserta didik bersama operator sekolah dari delapan kabupaten. Kegiatan ini menjadi langkah awal penguatan data pokok pendidikan (Dapodik) sebagai dasar perencanaan program.',
      'Plt. Kepala Dinas, Simon Sembor, menegaskan bahwa data yang akurat adalah fondasi kebijakan. "Kita tidak bisa membangun SDM yang unggul tanpa tahu persis berapa guru, berapa murid, dan di mana mereka berada," ujarnya.',
      'Pendampingan teknis akan dilanjutkan secara berkala ke tiap kabupaten, terutama di sekolah-sekolah yang berada di wilayah dengan akses terbatas.',
    ],
  },
  {
    id: 2, kategori: 'Beasiswa', tanggal: '2026-11-06', penulis: 'Bidang Beasiswa', img: 'https://picsum.photos/seed/pp-beasiswa/900/600',
    judul: 'Penyaluran Bantuan Studi Akhir bagi Mahasiswa Asal Papua Pegunungan',
    ringkas: 'Bantuan studi akhir bersumber dari Dana Otsus disalurkan kepada mahasiswa yang telah terverifikasi melalui Database Beasiswa.',
    isi: [
      'Pemerintah Provinsi Papua Pegunungan melalui Disdikbud kembali menyalurkan bantuan studi akhir bagi mahasiswa Orang Asli Papua yang sedang menyelesaikan tugas akhir di dalam maupun luar negeri.',
      'Seluruh proses pendaftaran, verifikasi berkas, hingga pelaporan studi dilakukan melalui aplikasi Database Beasiswa Papua Pegunungan agar penyaluran tepat sasaran dan dapat dipertanggungjawabkan.',
      'Mahasiswa diimbau untuk memperbarui data dan melengkapi laporan semester secara berkala melalui akun masing-masing.',
    ],
  },
  {
    id: 3, kategori: 'Infrastruktur', tanggal: '2026-10-28', penulis: 'Humas Disdikbud', img: 'https://picsum.photos/seed/pp-baliem/900/600',
    judul: 'Progres Pembangunan Baliem Global Training Center di Jayawijaya',
    ringkas: 'Sekolah berasrama yang dibangun dengan alokasi Dana Otsus ini disiapkan menjadi pusat pendidikan unggulan di wilayah pegunungan.',
    isi: [
      'Pembangunan Baliem Global Training Center (BGTC) di Kabupaten Jayawijaya terus berjalan. Fasilitas sekolah berasrama ini dirancang untuk menampung siswa berprestasi dari seluruh kabupaten di Papua Pegunungan.',
      'Tim dinas melakukan peninjauan lapangan untuk memastikan kualitas bangunan, ketersediaan asrama, ruang belajar, serta fasilitas penunjang sesuai rencana.',
      'BGTC diharapkan menjadi model pendidikan berasrama yang berkarakter dan berdaya saing global, tanpa meninggalkan nilai budaya lokal.',
    ],
  },
  {
    id: 4, kategori: 'Digitalisasi', tanggal: '2026-10-20', penulis: 'Bidang SMA', img: 'https://picsum.photos/seed/pp-digital/900/600',
    judul: 'Disdikbud dan BPMP Papua Dorong Pendidikan Digital yang Humanis',
    ringkas: 'Kerja sama penguatan pembelajaran berbasis digital sekaligus pendidikan karakter bagi guru SMA, SMK, dan SLB.',
    isi: [
      'Disdikbud Papua Pegunungan bersama BPMP Papua menyelenggarakan lokakarya pembelajaran digital bagi guru jenjang SMA, SMK, dan SLB.',
      'Selain keterampilan teknologi, lokakarya menekankan pendekatan pendidikan yang humanis dan berkarakter, menempatkan peserta didik sebagai pusat pembelajaran.',
      'Para guru peserta akan menjadi fasilitator bagi rekan sejawat di sekolah masing-masing.',
    ],
  },
  {
    id: 5, kategori: 'Kebudayaan', tanggal: '2026-10-12', penulis: 'Bidang Kebudayaan', img: 'https://picsum.photos/seed/pp-budaya/900/600',
    judul: 'Pelestarian Budaya Lembah Baliem Masuk Muatan Lokal Sekolah',
    ringkas: 'Nilai-nilai budaya pegunungan diintegrasikan dalam muatan lokal untuk memperkuat identitas peserta didik.',
    isi: [
      'Bidang Kebudayaan menyusun bahan ajar muatan lokal yang memuat bahasa daerah, cerita rakyat, seni tradisi, serta kearifan lokal masyarakat pegunungan.',
      'Penyusunan melibatkan tokoh adat, budayawan, dan guru agar materi tetap otentik dan relevan bagi peserta didik.',
    ],
  },
  {
    id: 6, kategori: 'GTK', tanggal: '2026-10-03', penulis: 'Bidang GTK', img: 'https://picsum.photos/seed/pp-guru/900/600',
    judul: 'Peningkatan Kompetensi Guru Daerah Terpencil',
    ringkas: 'Program pelatihan guru di wilayah 3T difokuskan pada literasi, numerasi, dan pembelajaran berdiferensiasi.',
    isi: [
      'Bidang Guru dan Tenaga Kependidikan melaksanakan pelatihan bagi guru di wilayah terdepan, terluar, dan tertinggal (3T).',
      'Pelatihan menitikberatkan pada penguatan literasi dan numerasi serta strategi mengajar di kelas dengan kemampuan siswa yang beragam.',
    ],
  },
];

window.PENGUMUMAN = [
  { tanggal: '2026-11-11', judul: 'Perpanjangan Batas Unggah Laporan Semester Penerima Beasiswa', tag: 'Beasiswa', penting: true },
  { tanggal: '2026-11-08', judul: 'Seleksi Calon Siswa Baliem Global Training Center Tahun Ajaran 2027/2028', tag: 'Seleksi', penting: true },
  { tanggal: '2026-11-01', judul: 'Jadwal Verifikasi Data Dapodik Semester Ganjil', tag: 'Pendataan' },
  { tanggal: '2026-10-25', judul: 'Pengumuman Hasil Seleksi Administrasi Program ADIK 2026', tag: 'Beasiswa' },
  { tanggal: '2026-10-18', judul: 'Rencana Umum Pengadaan (RUP) Disdikbud Tahun Anggaran 2027', tag: 'Pengadaan' },
  { tanggal: '2026-10-10', judul: 'Rekrutmen Tenaga Pendamping Pendataan (Non-ASN)', tag: 'Lowongan' },
];

window.AGENDA = [
  { tanggal: '2026-11-17', jam: '09.00 WIT', judul: 'Rapat Koordinasi Kepala SMA/SMK se-Papua Pegunungan', lokasi: 'Aula Disdikbud, Wamena' },
  { tanggal: '2026-11-20', jam: '08.30 WIT', judul: 'Bimtek Operator Dapodik Gelombang II', lokasi: 'Kab. Yahukimo' },
  { tanggal: '2026-11-25', jam: '08.00 WIT', judul: 'Peringatan Hari Guru Nasional', lokasi: 'Lapangan Pendidikan, Wamena' },
  { tanggal: '2026-11-28', jam: '10.00 WIT', judul: 'Verifikasi Faktual Calon Penerima Beasiswa', lokasi: 'Kab. Pegunungan Bintang' },
  { tanggal: '2026-12-03', jam: '09.00 WIT', judul: 'Festival Budaya Pelajar Pegunungan', lokasi: 'Kab. Jayawijaya' },
  { tanggal: '2026-12-10', jam: '09.00 WIT', judul: 'Evaluasi Program Kerja Tahun 2026', lokasi: 'Aula Disdikbud, Wamena' },
];

// Utilitas kecil yang dipakai banyak halaman
window.fmtTanggal = (iso, opt) => new Date(iso + 'T00:00:00').toLocaleDateString('id-ID', opt || { day: 'numeric', month: 'long', year: 'numeric' });
window.escapeHtml = (s) => String(s).replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
