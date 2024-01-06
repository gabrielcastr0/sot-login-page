import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'paper-image': "url('/images/paper-background.jpg')",
        'galleon-image': "url('/images/galleon-background.jpg')",
      },
    },
  },
  plugins: [],
}
export default config
