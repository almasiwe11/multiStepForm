/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "sidebar-mobile": "url('/bg-sidebar-mobile.svg')",
        "sidebar-desktop": "url('/bg-sidebar-desktop.svg')",
      },
      colors: {
        denim: "#022959",
        border: "#D6D9E6",
        page: "#F2F2F2",
        bg: "#EFF5FF",
        grayish: "#D6D9E6",
        purple: "#483EFF",
      },
    },
    screens: {
      sm: "480px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1440px",
    },
  },
  plugins: [],
}
