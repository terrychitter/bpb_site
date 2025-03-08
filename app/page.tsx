"use client";
import {
  Box,
  Button,
  ButtonGroup,
  Container,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import React from "react";
import { motion } from "framer-motion";
import StartCollectingButton from "../src/components/ButtonStartCollecting";
import SocialMediaLinks from "../src/components/GroupSocialMedia";
import BlobCrowd from "../src/components/BlobCrowd/BlobCrowd";
import Link from "next/link";
import RandomTagline from "../src/components/RandomTagline";
import config from "@/src/config/config";
import LogoText from "../src/components/LogoText";

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

const HomePage = () => {
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
        marginBlockStart: isMediumScreenOrLarger
          ? theme.spacing(-10)
          : theme.spacing(-15),
      }}
    >
      <Container maxWidth="xl" sx={{ textAlign: "center" }}>
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
            <Link href="/gallery">
              <Button color="success">{config.text.home.galleryNavText}</Button>
            </Link>
            <StartCollectingButton />
          </ButtonGroup>
        </motion.div>
      </Container>
      <SocialMediaLinks animate={false} />
      <BlobCrowd />
    </Box>
  );
};

export default HomePage;
