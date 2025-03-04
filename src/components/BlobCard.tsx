import React from "react";
import { motion } from "framer-motion";
import { BlobJsonType } from "../types";

interface BlobCardProps {
  data: BlobJsonType;
}

export const BlobCard: React.FC<BlobCardProps> = ({ data }) => {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }} // Hover effect: scaling and shadow
      whileTap={{ scale: 0.98 }} // Slight scale down when clicked
      transition={{ type: "spring", stiffness: 300 }} // Smooth transition
    >
      <img
        src={`/blobs.png/${data.edition}.png`}
        alt={`Blob #${data.edition}`}
        style={{ aspectRatio: "1/1", height: "150px", objectFit: "cover" }}
      />
    </motion.div>
  );
};
