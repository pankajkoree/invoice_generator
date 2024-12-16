import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}', // Include your app directory
    './components/**/*.{js,ts,jsx,tsx}', // Include any components
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}

export default config
