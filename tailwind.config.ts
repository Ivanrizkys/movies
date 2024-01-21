import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "default": "url(/background.webp)",
      },
      colors: {
        "primary-50": "#EBE9FE",
        "primary-100": "#DEDBFD",
        "primary-200": "#BEB7FB",
        "primary-300": "#9C92F8",
        "primary-400": "#7B6EF6",
        "primary-500": "#5A4AF4",
        "primary-600": "#483BC3",
        "primary-700": "#362C92",
        "primary-800": "#251E62",
        "primary-900": "#120F31",
        "secondary-50": "#E4F4FF",
        "secondary-100": "#D2ECFE",
        "secondary-200": "#A5DBFE",
        "secondary-300": "#78C8FD",
        "secondary-400": "#4BB7FD",
        "secondary-500": "#1EA5FC",
        "secondary-600": "#1884CA",
        "secondary-700": "#126297",
        "secondary-800": "#0C4265",
        "secondary-900": "#062032",
        "grey-50": "#EBEEF5",
        "grey-100": "#C3C8D4",
        "grey-200": "#A8AEBF",
        "grey-300": "#8E95A9",
        "grey-400": "#767E94",
        "grey-500": "#61697F",
        "grey-600": "#475069",
        "grey-700": "#323B54",
        "grey-800": "#20283E",
        "grey-900": "#121829",
        "warning-50": "#FFF5E9",
        "warning-100": "#FFEFDB",
        "warning-200": "#FFDEB6",
        "warning-300": "#FFCE92",
        "warning-400": "#FFBD6D",
        "warning-500": "#FFAD49",
        "warning-600": "#CC8A3A",
        "warning-700": "#99682C",
        "warning-800": "#66451D",
        "warning-900": "#33230F",
        "card": "#4D505B"
      },
      borderWidth: {
        "1": "1px",
      },
      keyframes: {
        "bounce-right": {
          "0%, 100%": {
            transform: "translateX(25%)",
            "animation-timing-function": "cubic-bezier(0.8, 0, 1, 1)",
          },
          "50%": {
            transform: "translateY(0)",
            "animation-timing-function": "cubic-bezier(0, 0, 0.2, 1)",
          },
        },
      },
      animation: {
        "bounce-right": "bounce-right 1s infinite",
      },
    },
  },
  plugins: [],
};
export default config;
