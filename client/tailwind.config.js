/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
	theme: {
		colors: {
			primary: {
				100: '#1A2238',
				200: '#2B395E',
				300: '#3D5083',
				400: '#4E66A9',
				500: '#607DCE',
			},
			secondary: { 100: '#F4F7FF', 200: '#ffffff', 300: '#FCFDFE' },
		},
		extend: {},
	},
	plugins: [],
};
