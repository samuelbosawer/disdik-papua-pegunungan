// Data konten sementara (ilustrasi) — nanti diganti dengan data dari CMS/API.
window.SITE = {
  nama: 'Dinas Pendidikan dan Kebudayaan',
  provinsi: 'Provinsi Papua Pegunungan',
  singkat: 'Disdikbud Papua Pegunungan',
  alamat: 'Jl. Trikora, Wamena, Kabupaten Jayawijaya, Papua Pegunungan 99511',
  telepon: '(0969) 000-000',
  email: 'disdikbud@papuapegunungan.go.id',
  wa: '+62 800-0000-0000',
  sosmed: [
    { nama: 'Facebook', icon: 'fa-facebook-f', url: '#', akun: 'Disdikbud Papua Pegunungan' },
    { nama: 'Instagram', icon: 'fa-instagram', url: '#', akun: '@disdikbud.papuapegunungan' },
    { nama: 'YouTube', icon: 'fa-youtube', url: '#', akun: 'Disdikbud Papua Pegunungan' },
  ],
  kabupaten: ['Jayawijaya', 'Lanny Jaya', 'Mamberamo Tengah', 'Nduga', 'Pegunungan Bintang', 'Tolikara', 'Yahukimo', 'Yalimo'],
};

// Foto berita: ilustrasi dari Unsplash, semuanya berlokasi di Wamena / Kabupaten Jayawijaya
// (Unsplash License, bebas dipakai tanpa wajib atribusi). Ganti dengan foto kegiatan asli dinas bila sudah tersedia.
//  1 Asso Myron        https://unsplash.com/photos/C3DTpqCdT6g  (Asotipo, Jayawijaya - kampung dari udara)
//  2 Asso Myron        https://unsplash.com/photos/sxynOg9GT9o  (Wamena - perempuan muda dengan noken)
//  3 Asso Myron        https://unsplash.com/photos/aP9vdmDJj9U  (Wamena - warga di depan honai)
//  4 Fadhil Abhimantra https://unsplash.com/photos/3WrgrZhO2DM  (Wamena - warga membawa bendera Merah Putih)
//  5 Jiwa              https://unsplash.com/photos/pmWc6DsQzdc  (Wamena - busana adat)
//  6 Asso Myron        https://unsplash.com/photos/YrgFUWat1H0  (Wamena - warga di pagar kayu)
window.BERITA = [
  {
    id: 1, kategori: 'Pendataan', tanggal: '2026-11-10', penulis: 'Humas Disdikbud', img: 'https://images.unsplash.com/photo-1671884424294-ec50954cf7bb?auto=format&fit=crop&w=900&h=600&q=75',
    judul: 'Disdikbud Perkuat Pendataan Guru dan Murid di 8 Kabupaten',
    ringkas: 'Penguatan data pokok pendidikan menjadi dasar percepatan peningkatan kualitas SDM di seluruh wilayah Papua Pegunungan.',
    isi: [
      'Dinas Pendidikan dan Kebudayaan Provinsi Papua Pegunungan menggelar rapat koordinasi pendataan guru dan peserta didik bersama operator sekolah dari delapan kabupaten. Kegiatan ini menjadi langkah awal penguatan data pokok pendidikan (Dapodik) sebagai dasar perencanaan program.',
      'Plt. Kepala Dinas, Simon Sembor, menegaskan bahwa data yang akurat adalah fondasi kebijakan. "Kita tidak bisa membangun SDM yang unggul tanpa tahu persis berapa guru, berapa murid, dan di mana mereka berada," ujarnya.',
      'Pendampingan teknis akan dilanjutkan secara berkala ke tiap kabupaten, terutama di sekolah-sekolah yang berada di wilayah dengan akses terbatas.',
    ],
  },
  {
    id: 2, kategori: 'Beasiswa', tanggal: '2026-11-06', penulis: 'Bidang Beasiswa', img: 'https://images.unsplash.com/photo-1626619060754-bd673a90f322?auto=format&fit=crop&w=900&h=600&q=75',
    judul: 'Penyaluran Bantuan Studi Akhir bagi Mahasiswa Asal Papua Pegunungan',
    ringkas: 'Bantuan studi akhir bersumber dari Dana Otsus disalurkan kepada mahasiswa yang telah lolos verifikasi.',
    isi: [
      'Pemerintah Provinsi Papua Pegunungan melalui Disdikbud kembali menyalurkan bantuan studi akhir bagi mahasiswa Orang Asli Papua yang sedang menyelesaikan tugas akhir di dalam maupun luar negeri.',
      'Seluruh proses pendaftaran, verifikasi berkas, hingga pelaporan studi dilakukan secara tertib agar penyaluran tepat sasaran dan dapat dipertanggungjawabkan.',
      'Mahasiswa diimbau untuk memperbarui data dan melengkapi laporan semester secara berkala kepada dinas.',
    ],
  },
  {
    id: 3, kategori: 'Infrastruktur', tanggal: '2026-10-28', penulis: 'Humas Disdikbud', img: 'https://images.unsplash.com/photo-1638584165073-df0851b7c254?auto=format&fit=crop&w=900&h=600&q=75',
    judul: 'Progres Pembangunan Baliem Global Training Center di Jayawijaya',
    ringkas: 'Sekolah berasrama yang dibangun dengan alokasi Dana Otsus ini disiapkan menjadi pusat pendidikan unggulan di wilayah pegunungan.',
    isi: [
      'Pembangunan Baliem Global Training Center (BGTC) di Kabupaten Jayawijaya terus berjalan. Fasilitas sekolah berasrama ini dirancang untuk menampung siswa berprestasi dari seluruh kabupaten di Papua Pegunungan.',
      'Tim dinas melakukan peninjauan lapangan untuk memastikan kualitas bangunan, ketersediaan asrama, ruang belajar, serta fasilitas penunjang sesuai rencana.',
      'BGTC diharapkan menjadi model pendidikan berasrama yang berkarakter dan berdaya saing global, tanpa meninggalkan nilai budaya lokal.',
    ],
  },
  {
    id: 4, kategori: 'Digitalisasi', tanggal: '2026-10-20', penulis: 'Bidang SMA', img: 'https://images.unsplash.com/photo-1735301739934-e2cf15fe9df5?auto=format&fit=crop&w=900&h=600&q=75',
    judul: 'Disdikbud dan BPMP Papua Dorong Pendidikan Digital yang Humanis',
    ringkas: 'Kerja sama penguatan pembelajaran berbasis digital sekaligus pendidikan karakter bagi guru SMA, SMK, dan SLB.',
    isi: [
      'Disdikbud Papua Pegunungan bersama BPMP Papua menyelenggarakan lokakarya pembelajaran digital bagi guru jenjang SMA, SMK, dan SLB.',
      'Selain keterampilan teknologi, lokakarya menekankan pendekatan pendidikan yang humanis dan berkarakter, menempatkan peserta didik sebagai pusat pembelajaran.',
      'Para guru peserta akan menjadi fasilitator bagi rekan sejawat di sekolah masing-masing.',
    ],
  },
  {
    id: 5, kategori: 'Kebudayaan', tanggal: '2026-10-12', penulis: 'Bidang Kebudayaan', img: 'https://images.unsplash.com/photo-1683713601159-0b22f5116f88?auto=format&fit=crop&w=900&h=600&q=75',
    judul: 'Pelestarian Budaya Lembah Baliem Masuk Muatan Lokal Sekolah',
    ringkas: 'Nilai-nilai budaya pegunungan diintegrasikan dalam muatan lokal untuk memperkuat identitas peserta didik.',
    isi: [
      'Bidang Kebudayaan menyusun bahan ajar muatan lokal yang memuat bahasa daerah, cerita rakyat, seni tradisi, serta kearifan lokal masyarakat pegunungan.',
      'Penyusunan melibatkan tokoh adat, budayawan, dan guru agar materi tetap otentik dan relevan bagi peserta didik.',
    ],
  },
  {
    id: 6, kategori: 'GTK', tanggal: '2026-10-03', penulis: 'Bidang GTK', img: 'https://images.unsplash.com/photo-1684318250061-aa6408deed55?auto=format&fit=crop&w=900&h=600&q=75',
    judul: 'Peningkatan Kompetensi Guru Daerah Terpencil',
    ringkas: 'Program pelatihan guru di wilayah 3T difokuskan pada literasi, numerasi, dan pembelajaran berdiferensiasi.',
    isi: [
      'Bidang Guru dan Tenaga Kependidikan melaksanakan pelatihan bagi guru di wilayah terdepan, terluar, dan tertinggal (3T).',
      'Pelatihan menitikberatkan pada penguatan literasi dan numerasi serta strategi mengajar di kelas dengan kemampuan siswa yang beragam.',
    ],
  },
];

// Utilitas kecil yang dipakai banyak halaman
window.fmtTanggal = (iso, opt) => new Date(iso + 'T00:00:00').toLocaleDateString('id-ID', opt || { day: 'numeric', month: 'long', year: 'numeric' });
window.escapeHtml = (s) => String(s).replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
