/** @format */

// /** @type {import('tailwindcss').Config} */
// module.exports = {
//   content: ["./src/**/*.{js,jsx,ts,tsx}"],
//   theme: {
//     extend: {
//       maxWidth: {
//         maxContent: "1260px",
//         maxContentTab: "650px"
//       },
//     },
//     colors: {
//       white: "#fff",
//       grey: "#838894",
//       greyLight: "#b0b3bb",
//       greyDark: "#5a5e69",
//       black: "#000",
//       transparent: "#ffffff00",
//       NavbarColor: "#152B53",
//       NavbarColorLight: "#506E9C",
//       violet: {
//         600 : "#7B3AED"
//       },
//       indigo : {
//         600 : "#4F45E5"
//       },
//       teal : {
//         200 : "#97F5E3",
//         500 : "#17BAA8"
//       },
//       cyan : {
//         5: "#EDF1F2",
//         500 : "#06B6D4",

//       }
//     }
//   },
//   plugins: [],
// }

export default {
	content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
	theme: {
		extend: {
			maxWidth: {
				maxContent: '1260px',
				maxContentTab: '650px',
			},
		},
	},
	plugins: [],
};
