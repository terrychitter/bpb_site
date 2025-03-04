"use client";
import { Components, createTheme } from "@mui/material/styles";
import { TypographyOptions } from "@mui/material/styles/createTypography";
import { fonts, palette } from "./config/theme";

const bpbFonts: TypographyOptions = {
  fontFamily: `${fonts.dogicaFont.style.fontFamily}, Arial, sans-serif`,
  h1: {
    fontFamily: `${fonts.daydreamFont.style.fontFamily}, Arial, sans-serif`,
    fontSize: "3rem",
  },
  h2: {
    fontFamily: `${fonts.dogicaFont.style.fontFamily}, Arial, sans-serif`,
    fontSize: "2rem",
  },
};

const bpbComponents: Components = {
  MuiButton: {
    defaultProps: {
      disableRipple: true,
      variant: "text",
    },
    styleOverrides: {
      root: {
        borderWidth: 0,
        padding: "5px",
      },
    },
  },
  MuiPaper: {
    styleOverrides: {
      root: {
        boxShadow: `-3px 0 0 0 #343231, 
          3px 0 0 0 #343231, 
          0 -3px 0 0 #343231, 
          0 3px 0 0 #343231`,
        overflow: "visible",
      },
    },
  },
  MuiChip: {
    styleOverrides: {
      root: {
        borderRadius: "0px",
        boxShadow: `-3px 0 0 0 #343231, 
                3px 0 0 0 #343231, 
                0 -3px 0 0 #343231, 
                0 3px 0 0 #343231`,
        overflow: "visible",
      },
    },
  },
};

const bpbTheme = createTheme({
  palette: palette,
  components: bpbComponents,
  typography: bpbFonts,
  shape: { borderRadius: 0 },
});

export default bpbTheme;
