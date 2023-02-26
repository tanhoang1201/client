/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
	theme: {
		extend: {
			fontFamily: {
				primary: ['Fira Code', 'monospace'],
			},
		},
	},
	plugins: [require('prettier-plugin-tailwindcss'), require('@tailwindcss/line-clamp')],
};
