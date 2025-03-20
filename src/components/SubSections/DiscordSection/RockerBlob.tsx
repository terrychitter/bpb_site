import { useState, useEffect } from "react";
import { Box, useMediaQuery, useTheme } from "@mui/material";
import Image from "next/image";
import links from "@/src/config/links";

const RockerBlob = () => {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm")); // `true` for `sm` and below
  const [rockerBlobWidth, setRockerBlobWidth] = useState(200); // Default SSR size

  useEffect(() => {
    const calculateWidth = () =>
      isSmallScreen
        ? window.innerWidth * 1
        : Math.max(200, 0.5 * window.innerWidth);
    setRockerBlobWidth(calculateWidth());

    const updateWidth = () => setRockerBlobWidth(calculateWidth());
    window.addEventListener("resize", updateWidth);
    return () => window.removeEventListener("resize", updateWidth);
  }, [isSmallScreen]);

  return (
    <Box
      sx={{
        position: "absolute",
        left: isSmallScreen ? "50%" : `-${rockerBlobWidth * 0.1}px`,
        bottom: `-${rockerBlobWidth * 0.35}px`,
        transform: isSmallScreen ? "translateX(-55%)" : "none",
        zIndex: 1,
        opacity: 0.5,
      }}
    >
      <Image
        src={links.public.blobs.rockerBlob}
        width={rockerBlobWidth}
        height={rockerBlobWidth}
        alt="rocker blob"
      />
    </Box>
  );
};

export default RockerBlob;
