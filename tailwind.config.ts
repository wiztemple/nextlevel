import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        gray: {
          '1': '#7A7A7A',
          '8': '#EFF3F7',
          '9': '#f7f7f7',
        },
        dark: {
          '1': '#1B242F',
          '2': '#1c1c1c'
        },
        appblue: '#0076FF',
        appred: '#C54245',
        aquagreen: '#57BFC7'
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
          'section2': "url('/section2.png')",
          'section3': "url('/section3.png')",
          'section4': "url('https://nextlevel-erlebnisse.de/wp-content/uploads/2022/10/sandboxvr-header.jpg)",
          'sectionCard1': "url('/sbvr-bg.webp')",
          'sectionCardHover': "url('/sbvr-bg-grey.webp')",
          'sectionCard2': "url('/influencer.webp')",
          'sectionCard2Hover': "url('/influencer-hover.webp')",
          'mesh-gradient': "url('/mesh-gradient.webp')",
          'btn-gradient': 'linear-gradient(320deg, #A6519A 0%, #57BFC7 100%)'
      },
      boxShadow: {
        'cardxl': '1px -1px 10px 10px rgba(0, 0, 0, 0.28)',
        'cardXl2': '0px 0px 10px 0px rgba(0,0,0,0.5)',
        'shadowxl4': '0px 0px 22px 3px rgba(255,255,255,0.9)',
      }
    },
  },
  plugins: [],
}
export default config
