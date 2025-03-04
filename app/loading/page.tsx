import { Container, Stack, Typography } from "@mui/material";
import React from "react";
import Blob from "../../src/components/BlobCrowd/Blob";

const LoadingPage = () => {
  return (
    <Container
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        height: "100vh",
      }}
    >
      <Stack direction="column" position={"relative"}>
        <Blob
          startX={15}
          initialDirection="right"
          speed={15}
          bottom={25}
          width={100}
          isMoving={false}
        />
        <Typography component="h1" variant="body1" align="center">
          Loading...
        </Typography>
      </Stack>
    </Container>
  );
};

export default LoadingPage;
