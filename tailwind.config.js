
module.exports = {

	content: ["./index.html", "./src/**/*.{html,ts,jsx}", "./src/*.{ts,tsx}", "./index.html"],
	safelist: [],

	theme: {
		colors: {
			transparent: 'transparent',
			current: 'currentColor',
			'white': "#fff",
			'white-10-o': "rgba(255, 255, 255, 0.1)",
			'neutral-100-05': '#09121C0D',
			'neutral-100-10': '#09121C1A',
			'neutral-100-40': '#09121C66',
			'neutral-100-50': '#09121C80',
			'neutral-10': '#FAFAFA',
			'neutral-20': '#F5F5F5',
			'neutral-30': '#EFEFEF',
			'neutral-60': '#61686D',
			'neutral-70': '#4B5259',
			'neutral-100': '#09121C',

			'primary-light': '#F8B944',
			'primary-pure-10': '#FFF6E6',
			'primary-pure': '#F69F00',
			'primary-pure-10-o': '#F69F001A',
			'primary-dark': '#D78B00',
			'primary-darkness': '#140D00',

			//alerts
			'alert-error-10': '#FDEAEA',
			'alert-error-10-o': '#E92C2C1A',
			'alert-error': '#E92C2C',

			//Warning
			'alert-warning-10': '#FBF7E6',
			'alert-warning-10-o': '#D2AF001A',
			'alert-warning-100': '#D2AF00',

			//Success
			'alert-success-10': '#E6F3EA',
			'alert-success-10-0': '#0080241A',
			'alert-success': '#008024', 
		},
		spacing: {
			'0': '0',
			'1': '1px',
			'2': '0.125rem',
			'4': '0.25rem',
			'8': '0.5rem',
			'10': '.625rem',
			'12': '0.75rem',
			'14': '0.875rem',
			'16': '1rem',
			'18': '1.125rem',
			'20': '1.25rem',
			'22': '1.375rem',
			'24': '1.5rem',
			'28': '1.75rem',
			'32': '2rem',
			'40': '2.5rem',
			'48': '3rem',
			'56': '3.5rem',
			'64': '4rem',
			'72': '4.5rem',
			'80': '5rem',
			'96': '6rem',
			'120': '7.5rem',
			'160': '10rem',

		},

		fontFamily: {
			sans: ['Public Sans', 'sans-serif'],
			'public-sans': ['Public Sans', 'sans-serif'],
			'barlow-condesed': ['Barlow Condensed', 'sans-serif']
		},

		lineHeight: {
			'100': '100%',
			'140': '140%',
			'150': '150%',
		},

		screens: {
			'min2xl': { 'min': '1441px' },
			// => @media (max-width: 1535px) { ... }

			'2xl': { 'max': '1441px' },
			// => @media (max-width: 1535px) { ... }

			'xl': { 'max': '1367px' },
			// => @media (max-width: 1279px) { ... }

			'lg': { 'max': '1281px' },
			// => @media (max-width: 1023px) { ... }

			'md2': { 'max': '1180px' },
			// => @media (max-width: 767px) { ... }

			'md': { 'max': '767px' },
			// => @media (max-width: 767px) { ... }

			'sm': { 'max': '639px' },
			// => @media (max-width: 639px) { ... }

			'xs': { 'max': '500px' },
		},



		extend: {
			transitionTimingFunction: {
				'cubic': 'cubic-bezier(0.175, 0.885, 0.32, 1.675)',

			},
			backgroundImage: {
				'background-card': 'linear-gradient(111.19deg, #1A2E77 0%, #454570 71.89%, #6D5A6A 99.28%)',
				'linear-lista-login': 'linear-gradient(180deg, rgba(255, 255, 255, 0.8), rgba(248, 185, 68, 0.7)',
				'overlay-home': 'linear-gradient(180deg, rgba(20, 13, 0, 0.8) 34.41%, rgba(20, 13, 0, 0) 100%)',
				'gradient-home': 'radial-gradient(26.98% 57.08% at 0% 0%, rgba(246, 159, 0, 0.1) 20%, rgba(246, 159, 0, 0) 100%)',
				'gradient-radial': 'radial-gradient(100% 2000.39% at 83.89% 0%, rgba(217, 217, 217, 0.08) 0%, rgba(217, 217, 217, 0) 15%)',
				'gradient-home-footer': 'radial-gradient(100% 100% at 50% 0%, rgba(246, 159, 0, 0.1) 0%, rgba(246, 159, 0, 0) 100%)'
			},
			blur: {
				xs: '2px',
			},
			gridTemplateColumns: {
				'teste': '350px minmax(300px, 1fr) 50px',
			},

			letterSpacing: {
				'tight': '-0.02em'
			},

			fontSize: {
				'2xl': ['1.5rem', {
					lineHeight: '150%',
				}],
				'xl': ['1.125rem', {
					lineHeight: '150%',
				}],
				'base': ['1rem', {
					lineHeight: '150%',
				}],
				'sm': ['0.875rem', {
					lineHeight: '150%',
				}],
				'xs': ['.75rem', {
					lineHeight: '150%',
					letterSpacing: '0.03em',
				}],
				'xs-space': ['.75rem', {
					lineHeight: '150%',
					letterSpacing: '0.1em',
				}],
			},

			boxShadow: {
				'xs': '0px 1px 2px #CED4DA',
				'sm': '0px 1px 1px rgba(0, 0, 0, 0.06)',
				'regular': '0px 24px 32px rgba(210, 215, 221, 0.25)',
				'md': '0px -1px 2px rgba(0, 0, 0, 0.06), 0px 1px 1px rgba(1, 7, 27, 0.08), 0px 2px 1px rgba(1, 7, 27, 0.06), 0px 1px 3px rgba(1, 7, 27, 0.1)',
				'lg': '0px 6px 10px rgba(1, 7, 27, 0.08), 0px 1px 18px rgba(1, 7, 27, 0.06), 0px 3px 5px rgba(1, 7, 27, 0.1)',
				'xl': '0px 24px 38px rgba(0, 0, 0, 0.04), 0px 9px 46px rgba(0, 0, 0, 0.06), 0px 11px 15px rgba(1, 7, 27, 0.1)',
				'3xl': '4px 10px 16px rgba(206, 212, 218, 0.6)'
			},
			
		},
	},

	plugins: [
		require('tailwind-scrollbar'),
	],
	variants: {
		scrollbar: ['rounded']
	}
}
