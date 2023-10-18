import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {

    extend: {
      colors: {
        primary: 'var(--primary-color)',
        secondary: 'var(--secondary-color)',
        'sub-30': 'var(--sub-30)',
        sub: 'var(--sub)'
      },
      backgroundImage: {
        'on-code': 'var(--on-code)',
        'on-code-70': 'var(--on-code-70)',

      },
    },
  },
  plugins: [],
}
export default config
