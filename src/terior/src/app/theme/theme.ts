import { createTheme } from '@mui/material/styles'
import { Colors } from './colors';

declare module '@mui/material/styles' {
    interface Components {
        
    }
}

export const theme = createTheme({
    palette: {
        mode: 'dark'
    },
    typography: {
        fontFamily: 'Roboto, sans-serif'
    },
    breakpoints:{
        values: {
            xs: 0,
            sm: 600,
            md: 960,
            lg: 1440,
            xl: 1920,
        },
    },
    components: {
        MuiContainer: {
            styleOverrides: {
                root: {
                    maxWidth: 'lg',
                },
            },
        },
    }

})