/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		'./src/pages/**/*.{js,ts,jsx,tsx}',
		'./src/components/**/*.{js,ts,jsx,tsx}',
	],
	theme: {
		extend: {
			colors: {
				primaryYellow: '#F7C334',
				primaryGray: '#2F2A2A',
			},
		},
	},
	plugins: [],
};
