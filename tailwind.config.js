/** @type {import('tailwindcss').Config} */
export default {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        screens: {
            sm: "480px",
            md: "768px",
            lg: "976px",
            xl: "1440px",
        },
        extend: {
            colors: {
                primary: "#FDB813",
                secondary: "#E74C3C",
                textPrimary: "#EFF6FF",
                textSecondary: "#0B3954",
            },
        },
    },
    plugins: [],
};
