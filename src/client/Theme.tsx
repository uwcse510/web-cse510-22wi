import { createTheme } from "@mui/material/styles";

// Useful for the future:
//
// https://stackoverflow.com/questions/57630926/material-ui-theme-overrides-leveraging-theme-palette-colors

const theme = createTheme({
    // A purple and green taken from the DUB branding
    palette: {
        primary: {
            // light: calculated
            main: '#4b2e83',
            // dark: calculated
            // contrastText: calculated
        },
        secondary: {
            // light: calculated
            main: '#4cdc31',
            // dark: calculated
            // contrastText: calculated
        },
    },
});

export default theme;