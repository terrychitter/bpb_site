"use client";

import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import React from "react";
import LogoText from "./LogoText";
import RandomTagline from "./RandomTagline";
import ButtonGroup from "@mui/material/ButtonGroup";
import Button from "@mui/material/Button";
import { motion } from "framer-motion";
import useTheme from "@mui/material/styles/useTheme";
import useMediaQuery from "@mui/material/useMediaQuery";
import StartCollectingButton from "./ButtonStartCollecting";
import BlobCrowd from "./BlobCrowd/BlobCrowd";
import config from "../config/config";
import CustomNextLink from "./StylesComponents/CustomLink";

interface DotsProps {
  color: string;
}

const Dots: React.FC<DotsProps> = ({ color }) => (
  <motion.div
    animate={{
      opacity: [1, 0, 1],
    }}
    transition={{
      duration: 1,
      repeat: Infinity,
      repeatType: "loop",
      ease: "easeInOut",
      times: [0, 0.5, 1],
    }}
  >
    <Box
      sx={{
        width: "10px",
        height: "10px",
        backgroundColor: color,
      }}
    />
  </motion.div>
);

const HomeHeroSection = () => {
  const theme = useTheme();
  const isMediumScreenOrLarger = useMediaQuery(theme.breakpoints.up("md"));
  return (
    <Box
      sx={{
        height: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: theme.spacing(4),
        overflowY: "hidden",
      }}
    >
      <Container
        maxWidth="xl"
        sx={{
          textAlign: "center",
          marginBlockStart: isMediumScreenOrLarger
            ? theme.spacing(-10)
            : theme.spacing(-15),
        }}
      >
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            type: "spring",
            stiffness: 200,
            damping: 10,
          }}
        >
          {/* Dots */}
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              gap: theme.spacing(1),
              marginBottom: theme.spacing(3),
            }}
          >
            <Dots color={theme.palette.primary.main} />
            <Dots color={theme.palette.success.main} />
            <Dots color={theme.palette.secondary.main} />
          </Box>
          <LogoText />
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              gap: theme.spacing(1),
              marginBottom: theme.spacing(3),
            }}
          >
            <Dots color={theme.palette.primary.main} />
            <Dots color={theme.palette.success.main} />
            <Dots color={theme.palette.secondary.main} />
          </Box>
          <Box
            position="absolute"
            left="50%"
            sx={{ transform: "translateX(-50%)" }}
          >
            <RandomTagline />
          </Box>
          <ButtonGroup
            variant="outlined"
            orientation="vertical"
            sx={{
              marginBlockStart: theme.spacing(20),
            }}
          >
            <CustomNextLink href="/gallery">
              <Button color="success">{config.text.home.galleryNavText}</Button>
            </CustomNextLink>
            <StartCollectingButton />
          </ButtonGroup>
        </motion.div>
      </Container>
      <BlobCrowd />
    </Box>
  );
};

export default HomeHeroSection;
