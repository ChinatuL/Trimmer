import type { Config } from "tailwindcss";

const config: Config = {
    content: [
        "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            backgroundImage: {
                "auth-bg": "url('/images/bg-auth.png')",
            },
            colors: {
                purple: "#9D37ED",
            },
        },
    },
    plugins: [],
};
export default config;
