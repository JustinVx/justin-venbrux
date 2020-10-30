import Typography from "typography"
import doelgerTheme from "typography-theme-doelger"
doelgerTheme.headerFontFamily = ['Poppins', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif']
doelgerTheme.bodyFontFamily= ['Open Sans', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif']

const typography = new Typography(doelgerTheme)

export default typography
export const rhythm = typography.rhythm