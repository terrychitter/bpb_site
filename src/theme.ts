'use client';
import { Components, createTheme, PaletteOptions } from '@mui/material/styles';
import { TypographyOptions } from '@mui/material/styles/createTypography';
import config from './config/config';

const bpbFonts: TypographyOptions = {
    fontFamily: `${config.theme.fonts.dogicaFont.style.fontFamily}, Arial, sans-serif`,
    h1: {
        fontFamily: `${config.theme.fonts.daydreamFont.style.fontFamily}, Arial, sans-serif`,
        fontSize: "3rem"
    },
    h2: {
        fontFamily: `${config.theme.fonts.dogicaFont.style.fontFamily}, Arial, sans-serif`,
        fontSize: "2rem"
    }
  }

const bpbComponents: Components = {
    MuiButton: {
        defaultProps: {
            disableRipple: true,
            variant: 'text'
        },
        styleOverrides: {
            root : {
                borderWidth: 0,
                padding: '5px',
            }
        }
    }
}

const bpbTheme = createTheme({
  palette: config.theme.palette,
  components: bpbComponents,
  typography: bpbFonts,
  shape: {borderRadius: 0}
});

export default bpbTheme;
