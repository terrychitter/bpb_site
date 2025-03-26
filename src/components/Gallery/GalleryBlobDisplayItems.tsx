import Box from "@mui/material/Box";
import GalleryBlobCard from "./GalleryBlobCard";
import Grid from "@mui/material/Grid2";
import React from "react";
import Typography from "@mui/material/Typography";
import { BlobJsonType } from "@/src/types";
import { BlobProvider } from "@/src/contexts/BlobContext";

const GalleryBlobDisplayItems: React.FC<{ currentItems: BlobJsonType[] }> = ({
  currentItems,
}) => {
  if (currentItems.length === 0) {
    return (
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100%",
          width: "100%",
        }}
      >
        <Typography
          variant="h2"
          component="p"
          sx={{
            fontSize: "1rem",
          }}
        >
          Loading...
        </Typography>
      </Box>
    );
  }

  return (
    <Grid container spacing={2}>
      {currentItems.map((blob) => (
        <Grid
          key={blob.edition}
          size={{
            xs: 6,
            sm: 4,
            md: 3,
            lg: 2,
            xl: 2,
          }}
        >
          {/* Wrapping each GalleryBlobCard in a BlobProvider */}
          <BlobProvider blobData={blob}>
            <GalleryBlobCard />
          </BlobProvider>
        </Grid>
      ))}
    </Grid>
  );
};

export default GalleryBlobDisplayItems;
