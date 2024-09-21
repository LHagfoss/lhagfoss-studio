/** @type {import('tailwindcss').Config} */
module.exports = {
    darkMode: ["class"],
    content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
  	extend: {
		backgroundColor: {
			primary: "#1e1e1e",
			secondary: "#ebebeb",
			thirdy: "#474747",
			fourth: "#111"
		},
		lineHeight: {
			11: "0.7",
			12: "0.8"
		},
  		colors: {
  			background: 'var(--background)',
  			foreground: 'var(--foreground)',
			primary: "#1e1e1e",
			secondary: "#ebebeb",
			thirdy: "#474747",
			fourth: "#111"
  		},
  		fontFamily: {
  			bestFont: 'bestFont',
			  clashDisM: "clashDisplay-medium", 
			  bricoGrotSB: "bricolageGrotesque-semibold",
			  bricoGrotR: "bricolageGrotesque-regular",
			  bricoGrotEB: "bricolageGrotesque-bold",
  		},
		transitionProperty: {
			background: "background",
		},
		borderColor: {
			primary: "#1e1e1e",
			secondary: "#ebebeb",
			thirdy: "#474747",
			fourth: "#111"
		},
  		borderRadius: {
  			lg: 'var(--radius)',
  			md: 'calc(var(--radius) - 2px)',
  			sm: 'calc(var(--radius) - 4px)'
  		}
  	}
  },
  plugins: [require("tailwindcss-animate")],
}

