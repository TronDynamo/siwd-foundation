import type { Config } from 'tailwindcss';

/*  Brand palette.
 *  brand-* was sampled from the SIWD logo (blue tree / red stars):
 *  mean blue #2B6893, darkest quintile #0F4C78, star red #B8353B.
 *  blue-700 (#1e40af) and teal-600 (#0d9488) are the requested Foundation
 *  colors and are Tailwind defaults, so they need no redefinition.
 */
const config: Config = {
  darkMode: ['class'],
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    container: { center: true, padding: '1rem', screens: { '2xl': '1400px' } },
    extend: {
      colors: {
        brand: {
          50: '#F2F7FB',
          100: '#DCE9F2',
          200: '#BBD3E5',
          300: '#94BDD5',
          400: '#4E8AB4',
          500: '#2B6893',
          600: '#17608F',
          700: '#0F4C78',
          800: '#0B3A5C',
          900: '#0B2F4A',
        },
        accent: {
          100: '#F7E7E8',
          300: '#E0989C',
          400: '#C9595F',
          500: '#B8353B',
          600: '#9C2A30',
          700: '#7E2126',
        },
        sand: '#F5EFE8',
        hairline: '#E8E5E1',
      },
      fontFamily: {
        display: ['var(--font-manrope)', 'system-ui', 'sans-serif'],
        sans: ['var(--font-inter)', 'system-ui', 'sans-serif'],
      },
      maxWidth: { content: '1200px', section: '1440px' },
      boxShadow: {
        soft: '0 4px 24px rgba(0,0,0,0.06)',
        lift: '0 12px 40px rgba(11,47,74,0.12)',
      },
      borderRadius: { lg: '0.75rem', xl: '1rem', '2xl': '1.25rem' },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        'pumpkin-glow': {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.82' },
        },
        flicker: {
          '0%, 100%': { opacity: '1' },
          '35%': { opacity: '0.8' },
          '55%': { opacity: '0.95' },
          '75%': { opacity: '0.85' },
        },
        'bat-fly': {
          from: { transform: 'translateX(-100px)' },
          to: { transform: 'translateX(110vw)' },
        },
        'wing-flap': {
          '0%, 100%': { transform: 'scaleY(1)' },
          '50%': { transform: 'scaleY(0.5)' },
        },
        'egg-spin': {
          from: { transform: 'rotate(0deg)' },
          to: { transform: 'rotate(360deg)' },
        },
        'fade-up': {
          from: { opacity: '0', transform: 'translateY(12px)' },
          to: { opacity: '1', transform: 'translateY(0)' },
        },
      },
      animation: {
        float: 'float 3s ease-in-out infinite',
        'pumpkin-glow': 'pumpkin-glow 2s ease-in-out infinite',
        flicker: 'flicker 1.6s ease-in-out infinite',
        'bat-fly': 'bat-fly 20s linear infinite',
        'wing-flap': 'wing-flap 0.2s ease-in-out infinite',
        'fade-up': 'fade-up 0.5s cubic-bezier(0.22,1,0.36,1) both',
        'egg-spin': 'egg-spin 0.7s cubic-bezier(0.4,0,0.2,1) 1',
      },
    },
  },
  plugins: [require('tailwindcss-animate')],
};

export default config;
