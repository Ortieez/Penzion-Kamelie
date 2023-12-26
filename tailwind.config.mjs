/** @type {import('tailwindcss').Config} */

const defaultTheme = require('tailwindcss/defaultTheme')
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			'boxShadow': {
				"even": "0px 0px 49.599998474121094px -1px rgba(0, 0, 0, 0.20)"
			},
			fontFamily: {
				sans: ["Geologica", ...defaultTheme.fontFamily.sans],
			},
			colors: {
				"primary": "#DA7F93",
				"secondary": "#4A2545",
				"accent": "#9CB3AF",
				"background": "#F0F2EF",
				"text": "#262626"
			}
		},

	},
	plugins: [],
}
