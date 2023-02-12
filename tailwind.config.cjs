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
                textColor: '#141416',
                yellow: {
                    650: '#EE8300',
                },
            },
            height: {
                header: '70px',
            },
            margin: {
                header: '70px',
            },
            fontSize: {
                '4.5xl': '40px',
            },
            content: {
                imgGift: 'url("$lib/assets/Image/66834_1IconGift.png")',
            },
            animation: {
                scale: 'scale 1.5s linear infinite',
                leftInto: 'leftInto .3s linear',
            },
            keyframes: {
                scale: {
                    '0%': { transform: 'scale(1)' },
                    '50%': { transform: 'scale(1.2)' },
                    '100%': { transform: 'scale(1)' },
                },
                leftInto: {
                    '0%': { transform: 'translateX(80%)' },
                    '100%': { transform: 'translateX(0)' },
                },
            },
        },
    },
    plugins: [],
};
