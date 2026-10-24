/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,ts}'],
  theme: {
    extend: {
      colors: {
        ink: {
          950: '#0a1322',
          900: '#0f1b2e',
          800: '#16243b',
          700: '#1f314e',
          600: '#2c4266'
        },
        // All derived from the logo blue (#4a7fc1)
        brand: {
          blue: '#4a7fc1',
          deep: '#3566a6',
          sky: '#8fb6ea',
          ice: '#dce8f7',
          cream: '#f1f5fb'
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        display: ['"Space Grotesk"', 'Inter', 'system-ui', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'ui-monospace', 'monospace']
      }
    }
  },
  plugins: []
};
