import React from "react";
import { motion } from "framer-motion";
import { BlobJsonType } from "../types";
import Image from "next/image";
import { Box } from "@mui/material";

interface BlobCardProps {
  data: BlobJsonType;
}

export const BlobCard: React.FC<BlobCardProps> = ({ data }) => {
  return (
    <Box
      sx={{
        cursor: "pointer",
      }}
    >
      <motion.div
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.98 }}
        transition={{ type: "spring", stiffness: 300 }}
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Image
          src={`/blobs.png/${data.edition}.png`}
          alt={`Blob #${data.edition}`}
          width={150.75}
          height={150.75}
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            display: "block",
          }}
        />
      </motion.div>
    </Box>
  );
};
