import Typography from "typography"

const typography = new Typography({
  baseFontSize: "18px",
  baseLineHeight: 1.666,
  headerFontFamily: [
    "Open Sans",
    "-apple-system",
    "BlinkMacSystemFont",
    "Segoe UI",
    "Roboto",
    "Helvetica",
    "sans-serif",
  ],
  bodyFontFamily: ["Open Sans", "serif"],
})

export default typography
export const rhythm = typography.rhythm