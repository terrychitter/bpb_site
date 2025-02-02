import { Button, Container, Stack, Typography } from "@mui/material";
import Link from "next/link";
import React from "react";

const HomePage = () => {
  return (
    <>
      <Container>
        <Typography variant="h1">BigPlumpyBlobs</Typography>
        <Typography variant="h2">⚠️Currently under construction⚠️</Typography>
        <Typography variant="body1">
          This website it currently under construction. The Blobs are still
          arriving
        </Typography>
        <Stack direction="row" gap={"20px"}>
          <Button variant="outlined">Click Here!</Button>
          <Button color="secondary">No, Click Here!</Button>
          <Button color="error">There's an Error!</Button>
          <Button color="success">Success!</Button>
        </Stack>
      </Container>
    </>
  );
};

export default HomePage;
