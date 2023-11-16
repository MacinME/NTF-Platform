/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      screens: {
        md: "900px",
        xl: "1440px",
      },
      colors: {
        light: {
          element: {
            primary_button: "#040404",
            primary: "#252525",
            secondary: "#6A6A6A",
            tertiary: "#A4A4A4",
            disable: "#E3E3E3",
            green: "#0E9766",
          },
          surface: {
            background: "#FFFFFF",
            soft: "#F5F5F5",
            medium: "#E3E3E3",
            hard: "#929292",
            stroke: "#E3E3E3",
            secondary_button: "#F5F5F5",
            purple: "#F7F4FF",
            green: "#F4FFFB",
            blue: "#EFF2FF",
          },
        },
        dark: {
          element: {
            primary_button: "#1537EC",
            primary: "#E8E8E8",
            secondary: "#CECECE",
            tertiary: "#747474",
            disable: "#929292",
          },
          surface: {
            background: "#171717",
            soft: "#202020",
            medium: "#3C3C3C",
            hard: "#929292",
            stroke: "#454545",
            secondary_button: "#353535",
            purple: "#1537EC",
            green: "#032F1F",
            blue: "#09243C",
          },
        },
      },
    },
  },
  plugins: [],
};
