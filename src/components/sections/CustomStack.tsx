"use client";

import Box from "@mui/material/Box";
import React from "react";
import Stack from "@mui/material/Stack";
import { CustomContainerProps } from "@/src/types";
import { PaletteColor } from "@mui/material/styles/createPalette";
import { useTheme } from "@mui/material";

export const CustomStack: React.FC<CustomContainerProps> = ({
  children,
  backgroundColor,
}) => {
  const theme = useTheme();

  return (
    <Stack
      direction={{ xs: "column", md: "row" }}
      sx={{
        color: "white !important",
        height: "100%",
        alignItems: "start",
        justifyContent: "start",
        backgroundColor: (
          theme.palette[
            backgroundColor as keyof typeof theme.palette
          ] as PaletteColor
        ).main,
      }}
    >
      {children}
    </Stack>
  );
};

export const CustomStackItem: React.FC<CustomContainerProps> = ({
  children,
}) => {
  const theme = useTheme();
  return (
    <Box
      sx={{
        paddingInline: {
          xs: theme.spacing(3),
          sm: theme.spacing(7),
          md: theme.spacing(10),
          lg: theme.spacing(15),
        },
        paddingBlock: {
          xs: theme.spacing(5),
          sm: theme.spacing(9),
          md: theme.spacing(13),
          lg: theme.spacing(17),
        },
      }}
    >
      {children}
    </Box>
  );
};
