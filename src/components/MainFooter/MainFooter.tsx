"use client";

import Box from "@mui/material/Box";
import React from "react";
import { useTheme } from "@mui/material/styles";
import Container from "@mui/material/Container";
import Stack from "@mui/material/Stack";
import LegalSection from "../Sections/LegalSection";
import FooterSocialMediaSection from "./FooterSocialMediaSection";
import FooterNavSection from "./FooterNavSection";

const MainFooter = () => {
  const theme = useTheme();
  return (
    <Box
      sx={{
        marginBlockStart: theme.spacing(20),
        color: theme.palette.common.white,
        backgroundColor: theme.palette.common.black,
        paddingBlockStart: theme.spacing(5),
        paddingBlockEnd: theme.spacing(2),
      }}
    >
      <Container>
        <Stack
          direction={{ xs: "column", md: "row-reverse" }}
          justifyContent={"space-around"}
          spacing={2}
        >
          <FooterSocialMediaSection />
          <FooterNavSection />
        </Stack>
        <LegalSection />
      </Container>
    </Box>
  );
};

export default MainFooter;
