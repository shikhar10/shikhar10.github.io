/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        neon: '#ccff00',
        ink: '#000000',
      },
      fontFamily: {
        display: ['"Inter Tight"', 'Inter', 'system-ui', '"Segoe UI"', 'sans-serif'],
        body: ['Inter', 'system-ui', '-apple-system', '"Segoe UI"', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'ui-monospace', 'Consolas', 'monospace'],
      },
      boxShadow: {
        neon: '0 0 12px 2px rgba(204,255,0,0.55)',
      },
      keyframes: {
        scrollcue: {
          '0%': { transform: 'translateY(-100%)' },
          '100%': { transform: 'translateY(200%)' },
        },
      },
      animation: {
        scrollcue: 'scrollcue 1.8s cubic-bezier(.6,0,.4,1) infinite',
      },
    },
  },
  plugins: [],
}
