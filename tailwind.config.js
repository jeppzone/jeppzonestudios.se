/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {
			animation: {
				'fade-in': 'fadeIn 0.5s ease-in-out',
				'slide-up': 'slideUp 0.5s ease-out',
				'bounce-slow': 'bounce 2s infinite',
				'pulse-slow': 'pulse 3s infinite',
				'spin-slow': 'spin 8s linear infinite',
				'float': 'float 6s ease-in-out infinite',
				'glow': 'glow 2s ease-in-out infinite alternate',
			},
			keyframes: {
				fadeIn: {
					'0%': { opacity: '0', transform: 'translateY(20px)' },
					'100%': { opacity: '1', transform: 'translateY(0)' }
				},
				slideUp: {
					'0%': { transform: 'translateY(100%)' },
					'100%': { transform: 'translateY(0)' }
				},
				float: {
					'0%, 100%': { transform: 'translateY(0px)' },
					'50%': { transform: 'translateY(-20px)' }
				},
				glow: {
					'0%': { boxShadow: '0 0 20px rgba(102, 126, 234, 0.5)' },
					'100%': { boxShadow: '0 0 40px rgba(102, 126, 234, 0.8)' }
				}
			},
			backdropBlur: {
				xs: '2px',
			},
			boxShadow: {
				'glow': '0 0 40px rgba(102, 126, 234, 0.3)',
				'glow-lg': '0 0 60px rgba(102, 126, 234, 0.4)',
				'inner-glow': 'inset 0 0 20px rgba(102, 126, 234, 0.2)',
			},
			gradientColorStops: {
				'gradient-1': '#667eea',
				'gradient-2': '#764ba2',
				'gradient-3': '#f093fb',
				'gradient-4': '#f5576c',
			}
		}
	},
	plugins: []
};
