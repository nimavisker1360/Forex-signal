import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      maxWidth: {
        "screen-xl": "75rem",
        "screen-2xl": "83.75rem",
      },
      boxShadow: {
        "cause-shadow": "0px 4px 17px 0px #00000008",
      },
      transitionDuration: {
        "150": "150ms",
      },
      spacing: {
        "6.25": "6.25rem",
        "70%": "70%",
        "40%": "40%",
        "30%": "30%",
        "80%": "80%",
        8.5: "8.5rem",
        50: "50rem",
        51: "54.375rem",
        25: "35.625rem",
        29: "28rem",
        120: "120rem",
        45: "45rem",
        94: "22.5rem",
        85: "21rem",
        3.75: "3.75rem",
      },
      inset: {
        "5%": "5%",
        "35%": "35%",
      },
      zIndex: {
        "1": "1",
        "2": "2",
        "999": "999",
      },
      colors: {
        primary: "#99E39E",
        secondary: "#1DC8CD",
        midnight_text: "#263238",
        muted: "#d8dbdb",
        error: "#CF3127",
        warning: "#F7931A",
        light_grey: "#505050",
        grey: "#F5F7FA",
        dark_grey: "#1E2229",
        border: "#E1E1E1",
        success: "#3cd278",
        section: "#737373",
        darkmode: "#000510",
        darklight: "#0c372a",
        dark_border: "#959595",
        tealGreen: "#477E70",
        charcoalGray: "#666C78",
        deepSlate: "#282C36",
        slateGray: "#2F3543",
      },
      dark: {
        "100": "#000000",
        "200": "#0F1117",
        "300": "#151821",
        "400": "#212734",
        "500": "#101012",
      },
      light: {
        "400": "#858EAD",
        "500": "#7B8EC8",
        "700": "#DCE3F1",
        "800": "#F4F6F8",
        "850": "#FDFDFD",
        "900": "#FFFFFF",
      },

      fontSize: {
        86: [
          "5.375rem",
          {
            lineHeight: "1.2",
          },
        ],
        76: [
          "4.75rem",
          {
            lineHeight: "1.2",
          },
        ],
        70: [
          "4.375rem",
          {
            lineHeight: "1.2",
          },
        ],
        54: [
          "3.375rem",
          {
            lineHeight: "1.2",
          },
        ],
        44: [
          "2.75rem",
          {
            lineHeight: "1.3",
          },
        ],
        40: [
          "2.5rem",
          {
            lineHeight: "3rem",
          },
        ],
        36: [
          "2.25rem",
          {
            lineHeight: "2.625rem",
          },
        ],
        30: [
          "1.875rem",
          {
            lineHeight: "2.25rem",
          },
        ],
        28: [
          "1.75rem",
          {
            lineHeight: "2.25rem",
          },
        ],
        24: [
          "1.5rem",
          {
            lineHeight: "2rem",
          },
        ],
        22: [
          "1.375rem",
          {
            lineHeight: "2rem",
          },
        ],
        21: [
          "1.3125rem",
          {
            lineHeight: "1.875rem",
          },
        ],
        18: [
          "1.125rem",
          {
            lineHeight: "1.5rem",
          },
        ],
        17: [
          "1.0625rem",
          {
            lineHeight: "1.4875rem",
          },
        ],
        16: [
          "1rem",
          {
            lineHeight: "1.6875rem",
          },
        ],
        14: [
          "0.875rem",
          {
            lineHeight: "1.225rem",
          },
        ],
      },
      backgroundImage: {
        start: "url('/images/work/bg-start.png')",
        perk: "url('/images/perks/perk-bg.png')",
      },
      blur: {
        220: "220px",
        400: "400px",
      },
    },
    boxShadow: {
      "light-100":
        "0px 12px 20px 0px rgba(184, 184, 184, 0.03), 0px 6px 12px 0px rgba(184, 184, 184, 0.02), 0px 2px 4px 0px rgba(184, 184, 184, 0.03)",
      "light-200": "10px 10px 20px 0px rgba(218, 213, 213, 0.10)",
      "light-300": "-10px 10px 20px 0px rgba(218, 213, 213, 0.10)",
      "dark-100": "0px 2px 10px 0px rgba(46, 52, 56, 0.10)",
      "dark-200": "2px 0px 20px 0px rgba(39, 36, 36, 0.04)",
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: [
      {
        dark: {
          primary: "#793ef9",
          "primary-focus": "#570df8",
          "primary-content": "#ffffff",
          secondary: "#f000b8",
          "secondary-focus": "#bd0091",
          "secondary-content": "#ffffff",
          accent: "#87d039",
          "accent-focus": "#2aa79b",
          "accent-content": "#ffffff",
          neutral: "#2a2e37",
          "neutral-focus": "#16181d",
          "neutral-content": "#ffffff",
          "base-100": "rgb(13 18 23)",
          "base-200": "#2a2e37",
          "base-300": "#16181d",
          "base-content": "#ebecf0",
          info: "#66c6ff",
          success: "#87d039",
          warning: "#e2d562",
          error: "#ff6f6f",
        },
      },
      "light",
      "corporate",
    ],
  },
};
export default config;
