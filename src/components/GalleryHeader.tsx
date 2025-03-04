import { Box, useTheme } from "@mui/material";
import React from "react";
import LogoText from "./LogoText";
import HomeButton from "./HomeButton";

const GalleryHeader = () => {
  const theme = useTheme();
  return (
    <>
      <Box
        position={"fixed"}
        zIndex={1000}
        textAlign={{ xs: "center", sm: "left" }}
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
        }}
      >
        <HomeButton />
      </Box>
    </>
  );
};

export default GalleryHeader;
