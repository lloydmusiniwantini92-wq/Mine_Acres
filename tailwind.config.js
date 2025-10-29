/** @type {import('tailwindcss').Config} */
export default {
    content: ["./index.html", "./src/**/*.{js,jsx}"],
    theme: {
        extend: {
            fontFamily: {
                inter: ["Inter", "sans-serif"],
                plex: ["IBM Plex Sans", "sans-serif"],
            },
            colors: {
                bgdark: "var(--bg-dark)",
                carddark: "var(--card-dark)",
                accent: "var(--accent)",
                accentsecondary: "var(--accent-secondary)",
            },
        },
    },
    plugins: [],
};
