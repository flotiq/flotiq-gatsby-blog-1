module.exports = {
    content: [
        './src/**/*.{js,jsx,ts,tsx}',
    ],
    theme: {
        extend: {
            screens: {
                sm: '480px',
                md: '768px',
                lg: '976px',
                xl: '1440px',
            },
            colors: {
                primary: '#64FBC1',
                secondary: '#0083FC',
                'light-gray': '#F9F9F9',
                turquoise: '#64FBC1',
                'olive-green': '#C6FB55',
            },
            fontFamily: {
                sora: ['Sora', 'sans-serif'],
            },
        },
    },
    plugins: [],
};
