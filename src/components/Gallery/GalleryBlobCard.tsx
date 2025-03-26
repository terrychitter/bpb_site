import Card from "@mui/material/Card";
import React from "react";
import { Box, Typography } from "@mui/material";
import { motion } from "framer-motion";
import { useBlobContext } from "@/src/contexts/BlobContext";

const GalleryBlobCard: React.FC = () => {
  const { blob } = useBlobContext();

  return (
    <motion.div
      whileHover={{
        y: [-5, 5, -5],
        transition: {
          y: { duration: 0.4, repeat: Infinity, repeatType: "reverse" },
        },
      }}
      initial={{ y: 0 }}
      animate={{ y: 0 }}
      exit={{ y: 0 }}
    >
      <Card
        sx={{
          cursor: "pointer",
          aspectRatio: "1/1",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          width: "fit-content",
          position: "relative",
        }}
      >
        <Box sx={{ position: "absolute", top: 2, left: 2 }}>
          <Typography
            variant="h2"
            component="p"
            color="white"
            sx={{ fontSize: "1rem" }}
          >
            {blob.edition}
          </Typography>
        </Box>
        <img
          src={`/blobs.png/${blob.edition}.png`}
          alt={`edition ${blob.edition}`}
          style={{ width: "100%" }}
        />
      </Card>
    </motion.div>
  );
};

export default GalleryBlobCard;
