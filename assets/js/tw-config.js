// Konfigurasi Tailwind (CDN) — palet mengikuti demo-dbbeasiswa:
// brand = hijau Papua (warna utama), edu = biru (aksen), hutan = latar gelap & teks netral.
tailwind.config = {
  theme: {
    extend: {
      fontFamily: { sans: ['Plus Jakarta Sans', 'ui-sans-serif', 'system-ui', 'sans-serif'] },
      colors: {
        brand: { 50: '#eefbf4', 100: '#d4f5e3', 200: '#a8e9c9', 300: '#6fd6a9', 400: '#38bd88', 500: '#15a06c', 600: '#0b8058', 700: '#0a6648', 800: '#0b513b', 900: '#093f2f' },
        edu: { 50: '#eff5ff', 100: '#dbe8fe', 200: '#bfd6fd', 300: '#93bbfb', 400: '#6097f7', 500: '#3b76f2', 600: '#2558e0', 700: '#1e45b9', 800: '#1d3b93', 900: '#1c3474' },
        hutan: { 50: '#f8fafc', 100: '#f1f5f9', 200: '#e2e8f0', 300: '#cbd5e1', 400: '#94a3b8', 500: '#64748b', 600: '#475569', 700: '#0a6648', 800: '#0b513b', 900: '#093f2f', 950: '#062b20' },
      },
      boxShadow: {
        card: '0 1px 2px 0 rgb(15 23 42 / 0.04), 0 1px 3px 0 rgb(15 23 42 / 0.06)',
        float: '0 10px 30px -12px rgb(15 23 42 / 0.25)',
      },
    },
  },
};
