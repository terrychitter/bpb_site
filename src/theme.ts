"use client";
import { Components, createTheme } from "@mui/material/styles";
import { TypographyOptions } from "@mui/material/styles/createTypography";
import { fonts } from "./config/theme";
import { palette } from "../src/config/theme"; // Make sure the import is correct

const commonBlack = palette?.common?.black || "#000000";

const bpbFonts: TypographyOptions = {
  fontFamily: `${fonts.fontFamilyFont.style.fontFamily}, Arial, sans-serif`,
  h1: {
    fontFamily: `${fonts.headingFont.style.fontFamily}, Arial, sans-serif`,
    fontSize: "3rem",
    color: commonBlack, // Ensure palette is defined correctly
  },
  h2: {
    fontFamily: `${fonts.fontFamilyFont.style.fontFamily}, Arial, sans-serif`,
    fontSize: "2rem",
    color: commonBlack, // Ensure palette is defined correctly
  },
  body1: {
    fontFamily: `${fonts.bodyFont.style.fontFamily}, Arial, sans-serif`,
    color: commonBlack, // Ensure palette is defined correctly
  },
  body2: {
    fontFamily: `${fonts.bodyFont.style.fontFamily}, Arial, sans-serif`,
    color: commonBlack, // Ensure palette is defined correctly
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
  MuiTextField: {
    defaultProps: {
      variant: "outlined",
    },
  },
  MuiOutlinedInput: {
    styleOverrides: {
      input: {
        padding: 0,
        "&::-webkit-outer-spin-button, &::-webkit-inner-spin-button": {
          WebkitAppearance: "none",
          margin: 0,
        },
        "&[type=number]": {
          MozAppearance: "textfield", // Firefox removes arrows
        },
      },
      root: {
        borderWidth: 0,
        padding: "4px",
        boxShadow: `-1.5px 0 0 0 ${commonBlack}, 
                    1.5px 0 0 0 ${commonBlack}, 
                    0 -1.5px 0 0 ${commonBlack}, 
                    0 1.5px 0 0 ${commonBlack}`,
        border: `1.5px solid ${commonBlack}`,
        overflow: "visible",
      },
    },
  },

  MuiPaper: {
    styleOverrides: {
      root: {
        boxShadow: `-3px 0 0 0 ${commonBlack}, 
                    3px 0 0 0 ${commonBlack}, 
                    0 -3px 0 0 ${commonBlack}, 
                    0 3px 0 0 ${commonBlack}`, // Ensure palette is defined correctly
        overflow: "visible",
      },
    },
  },
  MuiChip: {
    styleOverrides: {
      root: {
        borderRadius: "0px",
        boxShadow: `-3px 0 0 0 ${commonBlack}, 
                    3px 0 0 0 ${commonBlack}, 
                    0 -3px 0 0 ${commonBlack}, 
                    0 3px 0 0 ${commonBlack}`, // Ensure palette is defined correctly
        overflow: "visible",
      },
    },
  },
  MuiButtonGroup: {
    styleOverrides: {
      grouped: {
        borderRadius: "0px",
        boxShadow: `-1.5px 0 0 0 ${commonBlack}, 
                    1.5px 0 0 0 ${commonBlack}, 
                    0 -1.5px 0 0 ${commonBlack}, 
                    0 1.5px 0 0 ${commonBlack}`, // Ensure palette is defined correctly
        border: `1.5px solid ${commonBlack}`, // Ensure palette is defined correctly
        overflow: "visible",

        // Apply 1.5px for the inner borders between buttons to total 3px
        "& .MuiButton-root": {
          borderRight: `1.5px solid ${commonBlack}`, // Ensure palette is defined correctly
          borderLeft: "none",
        },
        "& .MuiButton-root:last-child": {
          borderRight: "none", // Remove the border on the last button
        },
      },
    },
  },
};

const bpbTheme = createTheme({
  palette: palette, // Ensure palette is defined correctly
  components: bpbComponents,
  typography: bpbFonts, // Apply typography settings
  shape: { borderRadius: 0 },
});

export default bpbTheme;
