'use client';
import { Components, createTheme, PaletteOptions } from '@mui/material/styles';
import { TypographyOptions } from '@mui/material/styles/createTypography';

const pixelBoxShadow = `
                        -3px 0 0 0 currentColor,
                        3px 0 0 0 currentColor,
                        0 -3px 0 0 currentColor,
                        0 3px 0 0 currentColor
`;

const bpbPallete: PaletteOptions = {
    mode: 'light',
    primary: {
        main: '#F76DC8'
    },
    secondary: {
        main: '#AC66F2'
    },
    success: {
        main: '#07F285'
    }
}

const bpbFonts: TypographyOptions = {
    fontFamily: 'Dogica, Arial, sans-serif',
    h1: {
        fontFamily: 'Daydream, Arial, sans-serif'
    },
    h2: {
        fontFamily: 'Dogica, Arial, sans-serif'
    }
  }

const bpbComponents: Components = {
    MuiButton: {
        defaultProps: {
            disableRipple: true,
            variant: 'outlined'
        },
        styleOverrides: {
            root : {
                borderWidth: 0,
                padding: '5px',
                boxShadow: pixelBoxShadow
            }
        }
    }
}

const bpbTheme = createTheme({
  palette: bpbPallete,
  components: bpbComponents,
  typography: bpbFonts,
  shape: {borderRadius: 0}
});

export default bpbTheme;
