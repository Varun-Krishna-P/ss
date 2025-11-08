import { createTheme } from "@mui/material";
import { pink, teal } from "@mui/material/colors";

declare module '@mui/material/styles' {
  interface PaletteColor {
    900?: string;
  }
}



const theme = createTheme({
    palette: {
        primary: {
            main: teal[500],
            900: teal[900],
            600: teal[600],
            700: teal[700],
            800: teal[800],
        },
        secondary: pink,
    },
});

export default theme;