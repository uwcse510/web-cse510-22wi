import { createTheme } from "@mui/material/styles";

// Useful for the future, regarding composition of themes:
//
// https://stackoverflow.com/questions/57630926/material-ui-theme-overrides-leveraging-theme-palette-colors

export const AppTheme = createTheme({
    // A purple and green palette taken from the DUB branding
    palette: {
        primary: {
            main: '#4b2e83',
            // light: calculated
            // dark: calculated
            // contrastText: calculated
        },
        secondary: {
            main: '#4cdc31',
            // light: calculated
            // dark: calculated
            // contrastText: calculated
        },
    },
});

export default AppTheme;
