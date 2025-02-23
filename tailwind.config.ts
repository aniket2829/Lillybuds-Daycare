import type { Config } from "tailwindcss";

const config: Config = {
    darkMode: ["class"],
    content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
  	extend: {
      keyframes: {
        scroll: {
          '0%': { transform: 'translateX(100%)' },
          '100%': { transform: 'translateX(-100%)' },
        },
      },
      animation: {
        'scroll-left': 'scroll 15s linear infinite',
      },
      fontSize: {
        'custom-p': ['16px', { lineHeight: '24px' }],
      },
      fontFamily: {
        inter: ['Inter', 'sans-serif'],
        comic: ['"Comic Sans MS"', 'sans-serif'],
        poppins: ['Poppins', 'sans-serif'],
      }, 
  		borderRadius: {
  			lg: 'var(--radius)',
  			md: 'calc(var(--radius) - 2px)',
  			sm: 'calc(var(--radius) - 4px)'
  		},
      width: {
        'customImageWidth': "600px",
      },
  		colors: {}
  	}
  },
  // eslint-disable-next-line @typescript-eslint/no-require-imports
  plugins: [require("tailwindcss-animate")],
};
export default config;
