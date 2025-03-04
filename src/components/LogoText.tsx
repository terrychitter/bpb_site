"use client";

import { Box, Typography, useTheme } from "@mui/material";
import React from "react";

interface LogoTextProps {
  color?: boolean;
  boxProps?: React.ComponentProps<typeof Box>;
  typographyProps?: React.ComponentProps<typeof Typography>;
}

const LogoText: React.FC<LogoTextProps> = ({
  boxProps,
  typographyProps,
  color = true,
}) => {
  const theme = useTheme();
  return (
    <Box sx={{ marginBottom: theme.spacing(3), ...boxProps }}>
      <Typography
        variant="h1"
        sx={{
          fontWeight: "bold",
          wordWrap: "break-word",
          letterSpacing: "2px",
          ...typographyProps,
        }}
      >
        <span
          style={{
            color: color ? theme.palette.primary.main : "inherit",
          }}
        >
          B
        </span>
        ig&nbsp;
        <span style={{ color: color ? theme.palette.success.main : "inherit" }}>
          P
        </span>
        lumpy&nbsp;
        <span
          style={{ color: color ? theme.palette.secondary.main : "inherit" }}
        >
          B
        </span>
        lobs
      </Typography>
    </Box>
  );
};

export default LogoText;
