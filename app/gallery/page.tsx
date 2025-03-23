import GalleryHeader from "@/src/components/Gallery/GalleryHeader";
import HomeButton from "@/src/components/HomeButton";
import LogoText from "@/src/components/LogoText";
import { Box, Container, Stack, Typography } from "@mui/material";
import React from "react";

const Gallery = () => {
  return (
    <>
      <GalleryHeader />
      <Container>
        <Typography>Gallery</Typography>
      </Container>
    </>
  );
};

export default Gallery;
