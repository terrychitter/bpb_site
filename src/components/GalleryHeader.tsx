import Box from "@mui/material/Box";
import HomeButton from "./HomeButton";
import LogoText from "./LogoText";
import React from "react";
import { useTheme } from "@mui/material/styles";

const GalleryHeader = () => {
  const theme = useTheme();
  return (
    <>
      <Box
        sx={{
          position: "fixed",
          left: { xs: "50%", md: theme.spacing(2) },
          transform: { xs: "translateX(-50%)", md: "none" },
          zIndex: 999,
        }}
      >
        <LogoText
          colored={false}
          color={theme.palette.common.white}
          typographyProps={{
            fontSize: "1.4rem",
            paddingBlockStart: theme.spacing(1.5),
          }}
        />
      </Box>
      <Box
        sx={{
          position: "fixed",
          justifyContent: "center",
          alignItems: "center",
          right: theme.spacing(1),
          bottom: theme.spacing(1),
          zIndex: 999,
        }}
      >
        <HomeButton />
      </Box>
    </>
  );
};

export default GalleryHeader;
