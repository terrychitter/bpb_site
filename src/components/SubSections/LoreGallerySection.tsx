import Grid from "@mui/material/Grid2";
import React from "react";
import LoreSection from "./LoreSection";
import GallerySection from "./GallerySection";
import Box from "@mui/material/Box";

interface LoreGallerySectionProps {
  backgroundColors: string[];
}

const LoreGallerySection: React.FC<LoreGallerySectionProps> = ({
  backgroundColors,
}) => {
  return (
    <>
      <Box id="loregallery">
        <Grid container>
          <Grid size={{ xs: 12, md: 6 }}>
            <LoreSection backgroundColor={backgroundColors[0]} />
          </Grid>
          <Grid size={{ xs: 12, md: 6 }}>
            <GallerySection backgroundColor={backgroundColors[1]} />
          </Grid>
        </Grid>
      </Box>
    </>
  );
};

export default LoreGallerySection;
