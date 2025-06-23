import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // chimech-mcp Brand Colors
        'chime-gold': {
          50: '#fffdf2',
          100: '#fffae6',
          200: '#fff3cc',
          300: '#ffe9a3',
          400: '#ffd770',
          500: '#ffc53d', // Primary gold
          600: '#e6b235',
          700: '#cc9e2d',
          800: '#b38a25',
          900: '#99761d',
        },
        'chime-bronze': {
          50: '#faf8f5',
          100: '#f5f1eb',
          200: '#ebe3d7',
          300: '#e0d5c3',
          400: '#d6c7af',
          500: '#cc9966', // Primary bronze
          600: '#b8895c',
          700: '#a57952',
          800: '#916948',
          900: '#7d593e',
        },
        'chime-dark': {
          50: '#f7f7f8',
          100: '#eeeef0',
          200: '#d6d6da',
          300: '#bebec4',
          400: '#a6a6ae',
          500: '#2c2c2e', // Primary dark
          600: '#252527',
          700: '#1e1e20',
          800: '#171719',
          900: '#101012',
        },
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        card: {
          DEFAULT: 'hsl(var(--card))',
          foreground: 'hsl(var(--card-foreground))',
        },
        popover: {
          DEFAULT: 'hsl(var(--popover))',
          foreground: 'hsl(var(--popover-foreground))',
        },
        primary: {
          DEFAULT: 'hsl(var(--primary))',
          foreground: 'hsl(var(--primary-foreground))',
        },
        secondary: {
          DEFAULT: 'hsl(var(--secondary))',
          foreground: 'hsl(var(--secondary-foreground))',
        },
        muted: {
          DEFAULT: 'hsl(var(--muted))',
          foreground: 'hsl(var(--muted-foreground))',
        },
        accent: {
          DEFAULT: 'hsl(var(--accent))',
          foreground: 'hsl(var(--accent-foreground))',
        },
        destructive: {
          DEFAULT: 'hsl(var(--destructive))',
          foreground: 'hsl(var(--destructive-foreground))',
        },
        border: 'hsl(var(--border))',
        input: 'hsl(var(--input))',
        ring: 'hsl(var(--ring))',
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
      animation: {
        'chime-ring': 'chimeRing 2s ease-in-out infinite',
        'pulse-glow': 'pulseGlow 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      keyframes: {
        chimeRing: {
          '0%, 100%': { transform: 'rotate(0deg)' },
          '25%': { transform: 'rotate(1deg)' },
          '75%': { transform: 'rotate(-1deg)' },
        },
        pulseGlow: {
          '0%, 100%': {
            opacity: '1',
            boxShadow: '0 0 0 0 rgba(255, 197, 61, 0.7)',
          },
          '50%': {
            opacity: '0.8',
            boxShadow: '0 0 0 10px rgba(255, 197, 61, 0)',
          },
        },
      },
    },
  },
  plugins: [],
}

export default config