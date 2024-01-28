import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        gray: {
          "1": "#7A7A7A",
          "2": "#595959",
          "8": "#EFF3F7",
          "9": "#f7f7f7",
        },
        dark: {
          "1": "#1B242F",
          "2": "#1c1c1c",
          "3": "#191919",
          "4": "#1B1B1B",
        },
        appblue: "#0076FF",
        appred: "#C54245",
        aquagreen: "#57BFC7",
        appviolet: "#A6519A",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        section2: "url('/section2.png')",
        "section2-mobile": "url('/sbvr-bg-mobile.webp')",
        section3: "url('/section3.png')",
        "section3-mobile": "url('/sbvr-bg-blue-mobile.webp')",
        section4:
          "url('https://nextlevel-erlebnisse.de/wp-content/uploads/2022/10/sandboxvr-header.jpg)",
        sectionCard1: "url('/sbvr-bg.webp')",
        sectionCardHover: "url('/sbvr-bg-grey.webp')",
        sectionCard2: "url('/influencer.webp')",
        sectionCard2Hover: "url('/influencer-hover.webp')",
        "mesh-gradient": "url('/mesh-gradient.webp')",
        "btn-gradient": "linear-gradient(320deg, #A6519A 0%, #57BFC7 100%)",
        "angle-svg": "url('/SVGAnimatedAngle.svg')",
        "bg-pattern":
          "url('data:image/svg+xml,%3Csvg xmlns='http://www.w3.org…Cpolyline points='0,18 12,6 24,18 '/%3E%3C/svg%3E')",
      },
      boxShadow: {
        cardxl: "1px -1px 10px 10px rgba(0, 0, 0, 0.28)",
        cardXl2: "0px 0px 10px 0px rgba(0,0,0,0.5)",
        shadowxl4: "0px 0px 22px 3px rgba(255,255,255,0.9)",
        shadowForm: "0px 0px 10px 2px rgba(0, 0, 0, 0.16)",
        voucherShadow: "2px 2px 5px 0px rgba(0,0,0,0.5)",
        coopCard: "6px 7px 10px 0px rgba(0, 0, 0, 0.38)",
      },
      animation: {
        'text-slide-5': 'text-slide-5 12.5s cubic-bezier(0.83, 0, 0.17, 1) infinite',
      },
      keyframes: {
        "text-slide-5": {
          "0%, 16%": {
            transform: "translateY(0%)",
          },
          "20%, 36%": {
            transform: "translateY(-16.66%)",
          },
          "40%, 56%": {
            transform: "translateY(-33.33%)",
          },
          "60%, 76%": {
            transform: "translateY(-50%)",
          },
          "80%, 96%": {
            transform: "translateY(-66.66%)",
          },
          "100%": {
            transform: "translateY(-83.33%)",
          },
        },
      },
    },
  },
  plugins: [],
};
export default config;
