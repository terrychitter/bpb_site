import { Container, Stack, Typography } from "@mui/material";
import React from "react";
import Blob from "../BlobCrowd/Blob";

const DefaultLoadingPage = () => {
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
          startX={20}
          initialDirection="right"
          speed={15}
          bottom={25}
          width={100}
          isMoving={false}
        />
        <Typography
          component="h1"
          variant="h2"
          align="center"
          sx={{
            fontSize: "1.5rem",
          }}
        >
          Loading...
        </Typography>
      </Stack>
    </Container>
  );
};

export default DefaultLoadingPage;
