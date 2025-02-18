import { Box } from "@mui/material";
import React, { useState, useEffect } from "react";
import Blob from "./Blob";

const BlobCrowd = () => {
  const [screenWidth, setScreenWidth] = useState<number | null>(null); // Initial state set to null

  useEffect(() => {
    // Ensure this runs only in the browser
    if (typeof window !== "undefined") {
      const handleResize = () => setScreenWidth(window.innerWidth);
      window.addEventListener("resize", handleResize);

      // Set initial screen width
      setScreenWidth(window.innerWidth);

      return () => window.removeEventListener("resize", handleResize);
    }
  }, []);

  // Avoid rendering if screenWidth is still null
  if (screenWidth === null) {
    return null;
  }

  const minDuration = 15; // Increased from 10s
  const maxDuration = (screenWidth / 100) * 6; // Increased scaling factor

  const numberOfBlobs = Math.ceil(screenWidth / 500) * 10;

  const blobs = Array.from({ length: numberOfBlobs }, () => ({
    startX: Math.random() * 100, // Random start position (0% to 100%)
    initialDirection:
      Math.random() > 0.5 ? ("left" as "left") : ("right" as "right"),
    duration:
      Math.pow(Math.random(), 2) * (maxDuration - minDuration) + minDuration, // Adjusted duration distribution
  }));

  return (
    <Box
      position="absolute"
      bottom="0"
      width="100%"
      height="200px"
      overflow="hidden"
      zIndex="0"
    >
      {blobs.map((blob, index) => (
        <Blob
          key={index}
          startX={blob.startX}
          initialDirection={blob.initialDirection}
          speed={blob.duration}
        />
      ))}
    </Box>
  );
};

export default BlobCrowd;
