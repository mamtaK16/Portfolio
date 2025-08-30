/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: '#ffffff',
        secondary: '#8B5CF6', // bright purple
        tertiary: '#6D28D9', // darker purple
        textPrimary: '#1F2937',
        textSecondary: '#4B5563',
        accent: '#EDE9FE', // light purple background
      },
      gridTemplateColumns: {
        '52': 'repeat(52, minmax(0, 1fr))',
      },
      animation: {
        'slide-in': 'slideIn 0.5s ease-out',
        'fade-in': 'fadeIn 0.5s ease-out',
        'bounce-slow': 'bounce 3s infinite',
        'float-slow': 'float 8s ease-in-out infinite',
        'float-medium': 'float 6s ease-in-out infinite',
        'float-fast': 'float 4s ease-in-out infinite',
      },
      keyframes: {
        slideIn: {
          '0%': { transform: 'translateX(-100%)', opacity: '0' },
          '100%': { transform: 'translateX(0)', opacity: '1' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0) rotate(0)' },
          '50%': { transform: 'translateY(-20px) rotate(5deg)' },
        },
      },
      dropShadow: {
        'glow': [
          '0 0 10px rgba(139, 92, 246, 0.3)',
          '0 0 20px rgba(139, 92, 246, 0.2)',
        ],
      },
    },
  },
  plugins: [require('@tailwindcss/forms')],
} 