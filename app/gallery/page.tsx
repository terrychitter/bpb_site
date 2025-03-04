"use client";

import React from "react";
import LogoText from "../../src/components/LogoText";
import Image from "next/image";
import { Container, Box, useTheme, Stack, useMediaQuery } from "@mui/material";
import Grid from "@mui/material/Grid2";
import Link from "next/link";
import { BlobCard } from "../../src/components/BlobCard";
import { BlobJsonType } from "@/src/types";

const HomeButton = () => {
  const theme = useTheme();
  return (
    <>
      <Box
        paddingBlockStart={{ xs: "inherit", sm: theme.spacing(1) }}
        position={{ xs: "fixed", sm: "relative" }}
        right={{ xs: theme.spacing(2), sm: "inherit" }}
        bottom={{ xs: theme.spacing(2), sm: "inherit" }}
      >
        <Link href="/">
          <Image src="/ui/home.gif" width={40} height={40} alt="home" />
        </Link>
      </Box>
    </>
  );
};

const Header = () => {
  const theme = useTheme();
  const isXtraSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));
  return (
    <>
      <Container>
        <Stack
          direction={"row"}
          justifyContent={{ xs: "center", sm: "space-between" }}
        >
          <LogoText
            color={false}
            typographyProps={{
              fontSize: "1.4rem",
              paddingBlockStart: theme.spacing(1.5),
            }}
          />
          {!isXtraSmallScreen && <HomeButton />}
        </Stack>
        {isXtraSmallScreen && <HomeButton />}
      </Container>
    </>
  );
};

const Gallery = () => {
  const [blobData, setBlobData] = React.useState<BlobJsonType[]>([]);

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

  return (
    <>
      <Header />
      <Container
        maxWidth="xl"
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            width: "100%",
          }}
        >
          <Grid container justifyContent="center">
            {blobData.map((blob, index) => (
              <Grid key={index}>
                <BlobCard data={blob} />
              </Grid>
            ))}
          </Grid>
        </Box>
      </Container>
    </>
  );
};

export default Gallery;
