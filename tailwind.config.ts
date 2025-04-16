
import type { Config } from "tailwindcss";

export default {
	darkMode: ["class"],
	content: [
		"./pages/**/*.{ts,tsx}",
		"./components/**/*.{ts,tsx}",
		"./app/**/*.{ts,tsx}",
		"./src/**/*.{ts,tsx}",
	],
	prefix: "",
	theme: {
		container: {
			center: true,
			padding: '2rem',
			screens: {
				'2xl': '1400px'
			}
		},
		extend: {
			colors: {
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',
				primary: {
					DEFAULT: 'hsl(var(--primary))',
					foreground: 'hsl(var(--primary-foreground))'
				},
				secondary: {
					DEFAULT: 'hsl(var(--secondary))',
					foreground: 'hsl(var(--secondary-foreground))'
				},
				destructive: {
					DEFAULT: 'hsl(var(--destructive))',
					foreground: 'hsl(var(--destructive-foreground))'
				},
				muted: {
					DEFAULT: 'hsl(var(--muted))',
					foreground: 'hsl(var(--muted-foreground))'
				},
				accent: {
					DEFAULT: 'hsl(var(--accent))',
					foreground: 'hsl(var(--accent-foreground))'
				},
				popover: {
					DEFAULT: 'hsl(var(--popover))',
					foreground: 'hsl(var(--popover-foreground))'
				},
				card: {
					DEFAULT: 'hsl(var(--card))',
					foreground: 'hsl(var(--card-foreground))'
				},
				hads: {
					purple: '#3a1b6d',
					pink: '#e91e63',
					teal: '#00bcd4',
					dark: '#0f0a2a',
					light: '#f5f5f7',
					navbg: '#3a1b6d'  // Adding the exact navbar background color
				}
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			},
			keyframes: {
				'accordion-down': {
					from: { height: '0' },
					to: { height: 'var(--radix-accordion-content-height)' }
				},
				'accordion-up': {
					from: { height: 'var(--radix-accordion-content-height)' },
					to: { height: '0' }
				},
				'fade-in': {
					'0%': { opacity: '0' },
					'100%': { opacity: '1' }
				},
				'fade-up': {
					'0%': { opacity: '0', transform: 'translateY(20px)' },
					'100%': { opacity: '1', transform: 'translateY(0)' }
				},
				'slide-in-right': {
					'0%': { transform: 'translateX(100%)', opacity: '0' },
					'100%': { transform: 'translateX(0)', opacity: '1' }
				},
				'pulse-slow': {
					'0%, 100%': { opacity: '1' },
					'50%': { opacity: '0.8' }
				},
				'float': {
					'0%, 100%': { transform: 'translateY(0)' },
					'50%': { transform: 'translateY(-10px)' }
				},
				'cloud-move': {
					'0%': { transform: 'translateX(-5%)' },
					'100%': { transform: 'translateX(105%)' }
				},
				'bounce-subtle': {
					'0%, 100%': { transform: 'translateY(0)' },
					'50%': { transform: 'translateY(-3px)' }
				},
				'shimmer': {
					'0%': { backgroundPosition: '-200% 0' },
					'100%': { backgroundPosition: '200% 0' }
				},
				'server-pulse': {
					'0%, 100%': { boxShadow: '0 0 0 0 rgba(0, 188, 212, 0.4)' },
					'50%': { boxShadow: '0 0 0 10px rgba(0, 188, 212, 0)' }
				},
        'rotate-slow': {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' }
        },
        'scale-pulse': {
          '0%, 100%': { transform: 'scale(1)' },
          '50%': { transform: 'scale(1.05)' }
        },
        'wave': {
          '0%': { transform: 'translateX(-100%)' },
          '100%': { transform: 'translateX(100%)' }
        },
        'bounce-x': {
          '0%, 100%': { transform: 'translateX(0)' },
          '50%': { transform: 'translateX(10px)' }
        },
        'typing': {
          'from': { width: '0' },
          'to': { width: '100%' }
        },
        'blink': {
          '0%, 100%': { borderColor: 'transparent' },
          '50%': { borderColor: 'white' }
        },
        'gradient-shift': {
          '0%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
          '100%': { backgroundPosition: '0% 50%' }
        },
        'bubble-float': {
          '0%': { transform: 'translateY(0) scale(1)', opacity: '0.5' },
          '50%': { transform: 'translateY(-20px) scale(1.1)', opacity: '0.8' },
          '100%': { transform: 'translateY(-40px) scale(1)', opacity: '0' }
        },
        'data-pulse': {
          '0%': { opacity: '1', transform: 'scale(1)' },
          '50%': { opacity: '0.5', transform: 'scale(0.8)' },
          '100%': { opacity: '1', transform: 'scale(1)' }
        },
        'server-glow': {
          '0%': { boxShadow: '0 0 5px 0px rgba(0, 188, 212, 0.7)' },
          '50%': { boxShadow: '0 0 20px 5px rgba(0, 188, 212, 0.9)' },
          '100%': { boxShadow: '0 0 5px 0px rgba(0, 188, 212, 0.7)' }
        },
        'server-rack-lights': {
          '0%, 100%': { opacity: '0.1' },
          '50%': { opacity: '1' }
        },
        'network-trace': {
          '0%': { strokeDashoffset: '1000' },
          '100%': { strokeDashoffset: '0' }
        },
        'cloud-scale': {
          '0%, 100%': { transform: 'scale(1)' },
          '50%': { transform: 'scale(1.2)' }
        },
        '3d-rotate': {
          '0%': { transform: 'perspective(1000px) rotateY(0deg)' },
          '100%': { transform: 'perspective(1000px) rotateY(360deg)' }
        },
        'orbit': {
          '0%': { transform: 'rotate(0deg) translateX(50px) rotate(0deg)' },
          '100%': { transform: 'rotate(360deg) translateX(50px) rotate(-360deg)' }
        }
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out',
				'fade-in': 'fade-in 0.5s ease-out',
				'fade-up': 'fade-up 0.7s ease-out',
				'slide-in-right': 'slide-in-right 0.5s ease-out',
				'pulse-slow': 'pulse-slow 4s ease-in-out infinite',
				'float': 'float 6s ease-in-out infinite',
				'cloud-move': 'cloud-move 20s linear infinite',
				'bounce-subtle': 'bounce-subtle 2s ease-in-out infinite',
				'shimmer': 'shimmer 8s infinite linear',
				'server-pulse': 'server-pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'rotate-slow': 'rotate-slow 10s linear infinite',
        'scale-pulse': 'scale-pulse 3s ease-in-out infinite',
        'wave': 'wave 2s linear infinite',
        'bounce-x': 'bounce-x 2s ease-in-out infinite',
        'typing': 'typing 3.5s steps(40, end)',
        'blink': 'blink 1s step-end infinite',
        'gradient-shift': 'gradient-shift 15s ease infinite',
        'bubble-float': 'bubble-float 4s ease-in-out infinite',
        'data-pulse': 'data-pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'server-glow': 'server-glow 4s ease-in-out infinite',
        'server-rack-lights': 'server-rack-lights 1.5s ease-in-out infinite',
        'network-trace': 'network-trace 4s linear infinite',
        'cloud-scale': 'cloud-scale 8s ease-in-out infinite',
        '3d-rotate': '3d-rotate 15s linear infinite',
        'orbit': 'orbit 8s linear infinite'
			},
			fontFamily: {
				sans: ['Inter', 'Source Sans Pro', 'system-ui', 'sans-serif'],
				display: ['Poppins', 'Montserrat', 'SF Pro Display', 'system-ui', 'sans-serif'],
				mono: ['JetBrains Mono', 'monospace'],
				code: ['Fira Code', 'monospace'],
				heading: ['Raleway', 'Montserrat', 'sans-serif'],
				body: ['Inter', 'Source Sans Pro', 'sans-serif']
			},
			backdropFilter: {
				'none': 'none',
				'blur': 'blur(20px)'
			}
		}
	},
	plugins: [require("tailwindcss-animate")],
	
} satisfies Config;


import type { Config } from "tailwindcss";

export default {
	darkMode: ["class"],
	content: [
		"./pages/**/*.{ts,tsx}",
		"./components/**/*.{ts,tsx}",
		"./app/**/*.{ts,tsx}",
		"./src/**/*.{ts,tsx}",
	],
	prefix: "",
	theme: {
		container: {
			center: true,
			padding: '2rem',
			screens: {
				'2xl': '1400px'
			}
		},
		extend: {
			colors: {
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',
				primary: {
					DEFAULT: 'hsl(var(--primary))',
					foreground: 'hsl(var(--primary-foreground))'
				},
				secondary: {
					DEFAULT: 'hsl(var(--secondary))',
					foreground: 'hsl(var(--secondary-foreground))'
				},
				destructive: {
					DEFAULT: 'hsl(var(--destructive))',
					foreground: 'hsl(var(--destructive-foreground))'
				},
				muted: {
					DEFAULT: 'hsl(var(--muted))',
					foreground: 'hsl(var(--muted-foreground))'
				},
				accent: {
					DEFAULT: 'hsl(var(--accent))',
					foreground: 'hsl(var(--accent-foreground))'
				},
				popover: {
					DEFAULT: 'hsl(var(--popover))',
					foreground: 'hsl(var(--popover-foreground))'
				},
				card: {
					DEFAULT: 'hsl(var(--card))',
					foreground: 'hsl(var(--card-foreground))'
				},
				hads: {
					purple: '#3a1b6d',
					pink: '#e91e63',
					teal: '#00bcd4',
					dark: '#0f0a2a',
					light: '#f5f5f7',
					navbg: '#3a1b6d'  // Adding the exact navbar background color
				}
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			},
			keyframes: {
				'accordion-down': {
					from: { height: '0' },
					to: { height: 'var(--radix-accordion-content-height)' }
				},
				'accordion-up': {
					from: { height: 'var(--radix-accordion-content-height)' },
					to: { height: '0' }
				},
				'fade-in': {
					'0%': { opacity: '0' },
					'100%': { opacity: '1' }
				},
				'fade-up': {
					'0%': { opacity: '0', transform: 'translateY(20px)' },
					'100%': { opacity: '1', transform: 'translateY(0)' }
				},
				'slide-in-right': {
					'0%': { transform: 'translateX(100%)', opacity: '0' },
					'100%': { transform: 'translateX(0)', opacity: '1' }
				},
				'pulse-slow': {
					'0%, 100%': { opacity: '1' },
					'50%': { opacity: '0.8' }
				},
				'float': {
					'0%, 100%': { transform: 'translateY(0)' },
					'50%': { transform: 'translateY(-10px)' }
				},
				'cloud-move': {
					'0%': { transform: 'translateX(-5%)' },
					'100%': { transform: 'translateX(105%)' }
				},
				'bounce-subtle': {
					'0%, 100%': { transform: 'translateY(0)' },
					'50%': { transform: 'translateY(-3px)' }
				},
				'shimmer': {
					'0%': { backgroundPosition: '-200% 0' },
					'100%': { backgroundPosition: '200% 0' }
				},
				'server-pulse': {
					'0%, 100%': { boxShadow: '0 0 0 0 rgba(0, 188, 212, 0.4)' },
					'50%': { boxShadow: '0 0 0 10px rgba(0, 188, 212, 0)' }
				},
        'rotate-slow': {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' }
        },
        'scale-pulse': {
          '0%, 100%': { transform: 'scale(1)' },
          '50%': { transform: 'scale(1.05)' }
        },
        'wave': {
          '0%': { transform: 'translateX(-100%)' },
          '100%': { transform: 'translateX(100%)' }
        },
        'bounce-x': {
          '0%, 100%': { transform: 'translateX(0)' },
          '50%': { transform: 'translateX(10px)' }
        },
        'typing': {
          'from': { width: '0' },
          'to': { width: '100%' }
        },
        'blink': {
          '0%, 100%': { borderColor: 'transparent' },
          '50%': { borderColor: 'white' }
        },
        'gradient-shift': {
          '0%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
          '100%': { backgroundPosition: '0% 50%' }
        },
        'bubble-float': {
          '0%': { transform: 'translateY(0) scale(1)', opacity: '0.5' },
          '50%': { transform: 'translateY(-20px) scale(1.1)', opacity: '0.8' },
          '100%': { transform: 'translateY(-40px) scale(1)', opacity: '0' }
        },
        'data-pulse': {
          '0%': { opacity: '1', transform: 'scale(1)' },
          '50%': { opacity: '0.5', transform: 'scale(0.8)' },
          '100%': { opacity: '1', transform: 'scale(1)' }
        },
        'server-glow': {
          '0%': { boxShadow: '0 0 5px 0px rgba(0, 188, 212, 0.7)' },
          '50%': { boxShadow: '0 0 20px 5px rgba(0, 188, 212, 0.9)' },
          '100%': { boxShadow: '0 0 5px 0px rgba(0, 188, 212, 0.7)' }
        },
        'server-rack-lights': {
          '0%, 100%': { opacity: '0.1' },
          '50%': { opacity: '1' }
        },
        'network-trace': {
          '0%': { strokeDashoffset: '1000' },
          '100%': { strokeDashoffset: '0' }
        },
        'cloud-scale': {
          '0%, 100%': { transform: 'scale(1)' },
          '50%': { transform: 'scale(1.2)' }
        },
        '3d-rotate': {
          '0%': { transform: 'perspective(1000px) rotateY(0deg)' },
          '100%': { transform: 'perspective(1000px) rotateY(360deg)' }
        },
        'orbit': {
          '0%': { transform: 'rotate(0deg) translateX(50px) rotate(0deg)' },
          '100%': { transform: 'rotate(360deg) translateX(50px) rotate(-360deg)' }
        }
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out',
				'fade-in': 'fade-in 0.5s ease-out',
				'fade-up': 'fade-up 0.7s ease-out',
				'slide-in-right': 'slide-in-right 0.5s ease-out',
				'pulse-slow': 'pulse-slow 4s ease-in-out infinite',
				'float': 'float 6s ease-in-out infinite',
				'cloud-move': 'cloud-move 20s linear infinite',
				'bounce-subtle': 'bounce-subtle 2s ease-in-out infinite',
				'shimmer': 'shimmer 8s infinite linear',
				'server-pulse': 'server-pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'rotate-slow': 'rotate-slow 10s linear infinite',
        'scale-pulse': 'scale-pulse 3s ease-in-out infinite',
        'wave': 'wave 2s linear infinite',
        'bounce-x': 'bounce-x 2s ease-in-out infinite',
        'typing': 'typing 3.5s steps(40, end)',
        'blink': 'blink 1s step-end infinite',
        'gradient-shift': 'gradient-shift 15s ease infinite',
        'bubble-float': 'bubble-float 4s ease-in-out infinite',
        'data-pulse': 'data-pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'server-glow': 'server-glow 4s ease-in-out infinite',
        'server-rack-lights': 'server-rack-lights 1.5s ease-in-out infinite',
        'network-trace': 'network-trace 4s linear infinite',
        'cloud-scale': 'cloud-scale 8s ease-in-out infinite',
        '3d-rotate': '3d-rotate 15s linear infinite',
        'orbit': 'orbit 8s linear infinite'
			},
			fontFamily: {
				sans: ['Inter', 'Source Sans Pro', 'system-ui', 'sans-serif'],
				display: ['Poppins', 'Montserrat', 'SF Pro Display', 'system-ui', 'sans-serif'],
				mono: ['JetBrains Mono', 'monospace'],
				code: ['Fira Code', 'monospace'],
				heading: ['Raleway', 'Montserrat', 'sans-serif'],
				body: ['Inter', 'Source Sans Pro', 'sans-serif']
			},
			backdropFilter: {
				'none': 'none',
				'blur': 'blur(20px)'
			}
		}
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;
