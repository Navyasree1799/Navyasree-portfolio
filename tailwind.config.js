/** @type {import('tailwindcss').Config} */
module.exports = {
    
    content: [
        "./pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./components/**/*.{js,ts,jsx,tsx}",
        "./app/**/*.{js,ts,jsx,tsx}",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    prefix: "",
    darkMode: "class",
    theme: {
        container: {
            center: true,
            padding: "15px",  // Or consider "4" if you want a standard Tailwind padding
        },
        screens: {
            sm: '640px',
            md: '768px',
            lg: '960px',
            xl: '1200px',
        },
        fontFamily: {
            primary: "var(--font-jetbrainsMono)",
			
        },
        extend: {
            colors: {
                primary: '#1c1c22',
				textStroke: {
					// Define custom stroke widths and colors
					DEFAULT: "1px transparent",
					lg: "2px #ff007f", // Pink outline
				},
                accent: {
                    DEFAULT: '#00ff99',
                    hover: '#00e187',
                },
            },
			
            keyframes: {
                "accordion-down": {
                    from: { height: "0" },
                    to: { height: "var(--radix-accordion-content-height)" },
                },
                "accordion-up": {
                    from: { height: "var(--radix-accordion-content-height)" },
                    to: { height: "0" },
                },
            },
			
            animation: {
                "accordion-down": "accordion-down 0.2s ease-out",
                "accordion-up": "accordion-up 0.2s ease-out",
            },
        },
    },
    plugins: [
		require("tailwindcss-animate"),
		function ({ addUtilities }) {
            addUtilities({
                ".text-outline": {
                    "-webkit-text-stroke": "1px currentColor", // Default color (text color)
                    color: "transparent",
                },
                ".text-outline-lg": {
                    "-webkit-text-stroke": "2px #ff007f", // Larger stroke with pink outline
                    color: "transparent",
                },
            });
        },
	],
	
};
