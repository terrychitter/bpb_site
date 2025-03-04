"use client";

import { Box, Typography, useTheme } from "@mui/material";
import React from "react";

interface LogoTextProps {
  colored?: boolean;
  color?: string;
  boxProps?: React.ComponentProps<typeof Box>;
  typographyProps?: React.ComponentProps<typeof Typography>;
}

const LogoText: React.FC<LogoTextProps> = ({
  boxProps,
  typographyProps,
  colored = true,
  color = null,
}) => {
  const theme = useTheme();
  return (
    <Box {...boxProps} sx={{ marginBottom: theme.spacing(3) }}>
      <Typography
        variant="h1"
        sx={{
          color: color ? color : "inherit",
          fontWeight: "bold",
          wordWrap: "break-word",
          letterSpacing: "2px",
          ...typographyProps,
        }}
      >
        <span
          style={{
            color: colored ? theme.palette.primary.main : "inherit",
          }}
        >
          B
        </span>
        ig&nbsp;
        <span
          style={{ color: colored ? theme.palette.success.main : "inherit" }}
        >
          P
        </span>
        lumpy&nbsp;
        <span
          style={{ color: colored ? theme.palette.secondary.main : "inherit" }}
        >
          B
        </span>
        lobs
      </Typography>
    </Box>
  );
};

export default LogoText;
