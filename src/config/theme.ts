import {PaletteOptions} from '@mui/material/styles';
import localFont from 'next/font/local';

export const palette: PaletteOptions = {
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

const daydreamFont = localFont({src: '../../public/fonts/daydream.ttf'});
const dogicaFont = localFont({src: '../../public/fonts/dogica.ttf'});

export const fonts = {
    daydreamFont: daydreamFont,
    dogicaFont: dogicaFont
} 