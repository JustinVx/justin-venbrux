import Typography from "typography"

const typography = new Typography({
  baseFontSize: "18px",
  baseLineHeight: 1.666,
  headerFontFamily: [
    "-apple-system",
    "BlinkMacSystemFont",
    "Segoe UI",
    "Roboto",
    "Open Sans",
    "Helvetica",
    "sans-serif",
  ],
  bodyFontFamily: ["-apple-system","Open Sans", "serif"],
})

export default typography
export const rhythm = typography.rhythm