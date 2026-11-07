/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        theme: {
          bg: 'var(--color-bg-primary)',
          'bg-secondary': 'var(--color-bg-secondary)',
          card: 'var(--color-bg-card)',
          text: 'var(--color-text-primary)',
          'text-secondary': 'var(--color-text-secondary)',
          accent: 'var(--color-accent)',
          'accent-hover': 'var(--color-accent-hover)',
          border: 'var(--color-border)',
          'muted-accent': 'var(--color-muted-accent)',
        }
      },
      fontFamily: {
        display: ['"Cormorant Garamond"', 'serif'],
        serif: ['"Playfair Display"', 'serif'],
        sans: ['Inter', 'sans-serif'],
        label: ['"Space Grotesk"', 'sans-serif'],
      },
      boxShadow: {
        'subtle': '0 4px 20px -2px rgba(0, 0, 0, 0.05)',
        'editorial': '0 20px 40px -15px rgba(0, 0, 0, 0.15)',
        'luxury': '0 30px 60px -12px rgba(0, 0, 0, 0.25)',
      },
      letterSpacing: {
        'widest-luxury': '0.25em',
        'loose-luxury': '0.15em',
      }
    },
  },
  plugins: [],
}

