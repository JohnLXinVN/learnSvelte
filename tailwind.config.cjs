/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./src/**/*.{html,js,svelte,ts}'],
    theme: {
        extend: {
            scale: {
                '-20': '-0.5',
            },
            colors: {
                primary: '#00AFC7',
                base: '#141416',
                yellow: {
                    650: '#EE8300',
                },
            },
            fontSize: {
                '4.5xl': '40px',
            },
            content: {
                imgGift: 'url("./src/lib/assets/Image/66834_1IconGift.png")',
            },
            animation: {
                scale: 'scale 1.5s linear infinite',
            },
            keyframes: {
                scale: {
                    '0%': { transform: 'scale(1)' },
                    '50%': { transform: 'scale(1.2)' },
                    '100%': { transform: 'scale(1)' },
                },
            },
        },
    },
    plugins: [],
};
