"use client";

import Grid from "@mui/material/Grid2";
import { CustomContainerProps } from "@/src/types";
import { PaletteColor, useTheme } from "@mui/material/styles";

export const CustomGrid: React.FC<CustomContainerProps> = ({
  children,
  backgroundColor,
}) => {
  const theme = useTheme();

  return (
    <Grid
      container
      sx={{
        color: "white !important",
        alignItems: "start",
        backgroundColor: (
          theme.palette[
            backgroundColor as keyof typeof theme.palette
          ] as PaletteColor
        ).main,
      }}
    >
      {children}
    </Grid>
  );
};

export const CustomGridItem: React.FC<CustomContainerProps> = ({
  children,
}) => {
  const theme = useTheme();

  return (
    <Grid
      size={{ xs: 12, md: 6 }}
      sx={{
        paddingInline: {
          xs: theme.spacing(3),
          sm: theme.spacing(7),
          md: theme.spacing(10),
          lg: theme.spacing(4),
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
    </Grid>
  );
};
