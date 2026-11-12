// Konfigurasi Tailwind (CDN) — palet mengikuti proyek DB Beasiswa:
// brand = hijau Papua (gunung pada lambang), edu = biru (perisai), gold = kuning (pita lambang).
tailwind.config = {
  theme: {
    extend: {
      fontFamily: { sans: ['Plus Jakarta Sans', 'ui-sans-serif', 'system-ui', 'sans-serif'] },
      colors: {
        brand: { 50: '#eefbf4', 100: '#d4f5e3', 200: '#a8e9c9', 300: '#6fd6a9', 400: '#38bd88', 500: '#15a06c', 600: '#0b8058', 700: '#0a6648', 800: '#0b513b', 900: '#093f2f', 950: '#05261c' },
        edu: { 50: '#eff5ff', 100: '#dbe8fe', 200: '#bfd6fd', 300: '#93bbfb', 400: '#6097f7', 500: '#3b76f2', 600: '#2558e0', 700: '#1e45b9', 800: '#1d3b93', 900: '#1c3474' },
        gold: { 50: '#fffde6', 100: '#fffac0', 200: '#fff385', 300: '#ffe93d', 400: '#fde010', 500: '#e8c700', 600: '#b99a00', 700: '#8a7200' },
      },
      boxShadow: {
        card: '0 1px 2px 0 rgb(15 23 42 / 0.04), 0 1px 3px 0 rgb(15 23 42 / 0.06)',
        float: '0 10px 30px -12px rgb(15 23 42 / 0.25)',
      },
    },
  },
};
