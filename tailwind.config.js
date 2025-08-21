import { heroui } from "@heroui/theme";

/** @type {import('tailwindcss').Config} */
const config = {
  content: [
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@heroui/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-sans)"],
        mono: ["var(--font-mono)"],
        raleway: ["var(--font-raleway)"],
      },
      colors: {
        primary: "#c49b66",
      },
    },
    container: {
      center: true,
      screens: {
        // 'xs': '500px',
        sm: '600px',
        md: '728px',
        lg: '984px',
        xl: '1240px',
        '2xl': '1496px',
      }
    }
  },
  darkMode: "class",
  plugins: [
    heroui({
      "themes": {
        "light": {
          "colors": {
            "default": {
              "50": "#fafafa",
              "100": "#f2f2f3",
              "200": "#ebebec",
              "300": "#e3e3e6",
              "400": "#dcdcdf",
              "500": "#d4d4d8",
              "600": "#afafb2",
              "700": "#8a8a8c",
              "800": "#656567",
              "900": "#404041",
              "foreground": "#000",
              "DEFAULT": "#d4d4d8"
            },
            "primary": {
              "50": "#f8f3ec",
              "100": "#ede1d1",
              "200": "#e3d0b6",
              "300": "#d9be9c",
              "400": "#cead81",
              "500": "#c49b66",
              "600": "#a28054",
              "700": "#7f6542",
              "800": "#5d4a30",
              "900": "#3b2f1f",
              "foreground": "#000",
              "DEFAULT": "#c49b66"
            },
            "secondary": {
              "50": "#e4e8f8",
              "100": "#bfc8ee",
              "200": "#99a7e4",
              "300": "#7387db",
              "400": "#4e66d1",
              "500": "#2846c7",
              "600": "#213aa4",
              "700": "#1a2e81",
              "800": "#13215f",
              "900": "#0c153c",
              "foreground": "#fff",
              "DEFAULT": "#2846c7"
            },
            "success": {
              "50": "#e2f8ec",
              "100": "#b9efd1",
              "200": "#91e5b5",
              "300": "#68dc9a",
              "400": "#40d27f",
              "500": "#17c964",
              "600": "#13a653",
              "700": "#0f8341",
              "800": "#0b5f30",
              "900": "#073c1e",
              "foreground": "#000",
              "DEFAULT": "#17c964"
            },
            "warning": {
              "50": "#fef4e4",
              "100": "#fce4bd",
              "200": "#fad497",
              "300": "#f9c571",
              "400": "#f7b54a",
              "500": "#f5a524",
              "600": "#ca881e",
              "700": "#9f6b17",
              "800": "#744e11",
              "900": "#4a320b",
              "foreground": "#000",
              "DEFAULT": "#f5a524"
            },
            "danger": {
              "50": "#fee1eb",
              "100": "#fbb8cf",
              "200": "#f98eb3",
              "300": "#f76598",
              "400": "#f53b7c",
              "500": "#f31260",
              "600": "#c80f4f",
              "700": "#9e0c3e",
              "800": "#73092e",
              "900": "#49051d",
              "foreground": "#000",
              "DEFAULT": "#f31260"
            },
            "background": "#ffffff",
            "foreground": "#000000",
            "content1": {
              "DEFAULT": "#ffffff",
              "foreground": "#000"
            },
            "content2": {
              "DEFAULT": "#f4f4f5",
              "foreground": "#000"
            },
            "content3": {
              "DEFAULT": "#e4e4e7",
              "foreground": "#000"
            },
            "content4": {
              "DEFAULT": "#d4d4d8",
              "foreground": "#000"
            },
            "focus": "#006FEE",
            "overlay": "#000000"
          }
        },
        "dark": {
          "colors": {
            "default": {
              "50": "#0d0d0e",
              "100": "#19191c",
              "200": "#26262a",
              "300": "#323238",
              "400": "#3f3f46",
              "500": "#65656b",
              "600": "#8c8c90",
              "700": "#b2b2b5",
              "800": "#d9d9da",
              "900": "#ffffff",
              "foreground": "#fff",
              "DEFAULT": "#3f3f46"
            },
            "primary": {
              "50": "#3b2f1f",
              "100": "#5d4a30",
              "200": "#7f6542",
              "300": "#a28054",
              "400": "#c49b66",
              "500": "#cead81",
              "600": "#d9be9c",
              "700": "#e3d0b6",
              "800": "#ede1d1",
              "900": "#f8f3ec",
              "foreground": "#000",
              "DEFAULT": "#c49b66"
            },
            "secondary": {
              "50": "#0c153c",
              "100": "#13215f",
              "200": "#1a2e81",
              "300": "#213aa4",
              "400": "#2846c7",
              "500": "#4e66d1",
              "600": "#7387db",
              "700": "#99a7e4",
              "800": "#bfc8ee",
              "900": "#e4e8f8",
              "foreground": "#fff",
              "DEFAULT": "#2846c7"
            },
            "success": {
              "50": "#073c1e",
              "100": "#0b5f30",
              "200": "#0f8341",
              "300": "#13a653",
              "400": "#17c964",
              "500": "#40d27f",
              "600": "#68dc9a",
              "700": "#91e5b5",
              "800": "#b9efd1",
              "900": "#e2f8ec",
              "foreground": "#000",
              "DEFAULT": "#17c964"
            },
            "warning": {
              "50": "#4a320b",
              "100": "#744e11",
              "200": "#9f6b17",
              "300": "#ca881e",
              "400": "#f5a524",
              "500": "#f7b54a",
              "600": "#f9c571",
              "700": "#fad497",
              "800": "#fce4bd",
              "900": "#fef4e4",
              "foreground": "#000",
              "DEFAULT": "#f5a524"
            },
            "danger": {
              "50": "#49051d",
              "100": "#73092e",
              "200": "#9e0c3e",
              "300": "#c80f4f",
              "400": "#f31260",
              "500": "#f53b7c",
              "600": "#f76598",
              "700": "#f98eb3",
              "800": "#fbb8cf",
              "900": "#fee1eb",
              "foreground": "#000",
              "DEFAULT": "#f31260"
            },
            "background": "#000000",
            "foreground": "#ffffff",
            "content1": {
              "DEFAULT": "#18181b",
              "foreground": "#fff"
            },
            "content2": {
              "DEFAULT": "#27272a",
              "foreground": "#fff"
            },
            "content3": {
              "DEFAULT": "#3f3f46",
              "foreground": "#fff"
            },
            "content4": {
              "DEFAULT": "#52525b",
              "foreground": "#fff"
            },
            "focus": "#006FEE",
            "overlay": "#ffffff"
          }
        }
      },
      "layout": {
        "disabledOpacity": "0.5"
      }
    })
  ],
}

module.exports = config;