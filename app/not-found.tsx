import MainFooter from "@/src/components/MainFooter/MainFooter";
import CustomNextLink from "@/src/components/StylesComponents/CustomLink";
import text from "@/src/config/text";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import React from "react";
import Image from "next/image";
import links from "@/src/config/links";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: text.metaData.notFoundTitle,
  description: text.metaData.notFoundDescription,
};

const NotFoundPage = () => {
  return (
    <>
      <Container
        maxWidth="xl"
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          minHeight: "60vh",
        }}
      >
        <Stack
          spacing={2}
          sx={{
            textAlign: "center",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Image
            src={links.public.decor.notFound}
            alt="Not Found"
            width={250}
            height={250}
            style={{
              marginInlineStart: 20,
            }}
          />
          <Typography
            component="h1"
            variant="h2"
            sx={{
              fontSize: "2rem",
              fontWeight: "700",
            }}
          >
            {text.notFound.notFoundTitle1}
          </Typography>
          <Typography
            variant="h2"
            sx={{
              fontSize: "2rem",
            }}
          >
            {text.notFound.notFoundTitle2}
          </Typography>
          <Typography
            variant="body1"
            sx={{
              marginBlockStart: "3rem !important",
            }}
          >
            {text.notFound.notFoundBody}
          </Typography>
          <CustomNextLink href="/">
            <Button>{text.notFound.notFoundButtonText}</Button>
          </CustomNextLink>
        </Stack>
      </Container>
      <MainFooter />
    </>
  );
};

export default NotFoundPage;
