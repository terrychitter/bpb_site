import React from "react";
import { Box, Container } from "@mui/material";
import Grid from "@mui/material/Grid2";
import { BlobCard } from "./BlobCard";
import { BlobJsonType } from "../types";

const BlobGallery = () => {
  const [blobData, setBlobData] = React.useState<BlobJsonType[]>([]);
  const containerRef = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    const fetchBlobData = async () => {
      const data: BlobJsonType[] = [];
      for (let i = 1; i <= 40; i++) {
        const response = await fetch(`/blobs.json/${i}.json`);
        const json = await response.json();
        data.push(json);
      }
      setBlobData(data);
    };

    fetchBlobData();
  }, []);

  // Infinite Scroll - Repeat Items
  React.useEffect(() => {
    const handleScroll = () => {
      if (containerRef.current) {
        const { scrollTop, scrollHeight, clientHeight } = containerRef.current;
        if (scrollTop + clientHeight >= scrollHeight - 10) {
          // Append same data to create a repeating effect
          setBlobData((prevData) => [...prevData, ...prevData]);
        }
      }
    };

    const container = containerRef.current;
    if (container) {
      container.addEventListener("scroll", handleScroll);
    }
    return () => {
      if (container) {
        container.removeEventListener("scroll", handleScroll);
      }
    };
  }, []);

  return (
    <Container
      maxWidth="xl"
      ref={containerRef}
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        overflowY: "auto", // Keep this to allow scrolling
        height: "100vh", // Keep this to match your design
      }}
    >
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          width: "100vw",
          height: "100vh",
        }}
      >
        <Grid container>
          {blobData.map((blob, index) => (
            <Grid key={index} size={{ xs: 3, md: 2 }}>
              <BlobCard data={blob} />
            </Grid>
          ))}
        </Grid>
      </Box>
    </Container>
  );
};

export default BlobGallery;
