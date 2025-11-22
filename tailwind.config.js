/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        screens: {
            'xs': '475px',
            'sm': '640px',
            'md': '768px',
            'lg': '1024px',
            'xl': '1280px',
            '2xl': '1536px',
        },
        extend: {
            colors: {
                'pastel-pink': '#FFB6C1',
                'pastel-lavender': '#E6E6FA',
                'pastel-blue': '#B6D7FF',
                'pastel-peach': '#FFCBA4',
                'pastel-cream': '#FFF8DC',
                'soft-pink': '#FFF0F5',
                'light-pink': '#FFE4E1',
                'girly-pink': '#F8BBD9',
                'cute-purple': '#E1BEE7',
                'sweet-blue': '#B3E5FC',
                'peach': {
                    100: '#FFF2E6',
                    200: '#FFCBA4',
                    300: '#FFB366',
                }
            },
            fontFamily: {
                'heading': ['Quicksand', 'sans-serif'],
                'comfort': ['Comfortaa', 'sans-serif'],
                'handwritten': ['Caveat', 'cursive'],
                'romantic': ['Dancing Script', 'Caveat', 'cursive'],
                'gift-card': ['Pacifico', 'cursive'],
                'cute-cursive': ['Pacifico', 'Caveat', 'cursive'],
                'calligraphy': ['Great Vibes', 'Allura', 'Dancing Script', 'cursive'],
            },
            animation: {
                'float': 'float 3s ease-in-out infinite',
                'sparkle': 'sparkle 2s ease-in-out infinite',
                'gentle-bounce': 'gentle-bounce 2s ease-in-out infinite',
            }
        },
    },
    plugins: [],
}