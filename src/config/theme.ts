// Extend MUI Palette and PaletteOptions
import { PaletteOptions } from "@mui/material/styles";
import localFont from "next/font/local";

// Extend MUI Palette and PaletteOptions
declare module "@mui/material/styles" {
  interface Palette {
    blue: Palette["primary"];
    green: Palette["primary"];
    yellow: Palette["primary"];
  }

  interface PaletteOptions {
    blue?: PaletteOptions["primary"];
    green?: PaletteOptions["primary"];
    yellow?: PaletteOptions["primary"];
  }
}

export const palette: PaletteOptions = {
  mode: "light",
  common: {
    black: "#2b2b2b", // Define black color in the palette
  },
  primary: {
    main: "#F76DC8",
  },
  secondary: {
    main: "#AC66F2",
  },
  success: {
    main: "#07F285",
  },
  blue: {
    main: "#05DBF2",
  },
  green: {
    main: "#07F285",
  },
  yellow: {
    main: "#F7F391",
  },
};

const daydreamFont = localFont({ src: "../../public/fonts/daydream.ttf" });
const dogicaFont = localFont({ src: "../../public/fonts/dogica.ttf" });
const robotoMonoFont = localFont({ src: "../../public/fonts/roboto_mono.ttf" });

export const fonts = {
  headingFont: daydreamFont,
  fontFamilyFont: dogicaFont,
  bodyFont: robotoMonoFont,
};
