"use client";
import {
  Box,
  Button,
  ButtonGroup,
  Container,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import React from "react";
import { motion } from "framer-motion";
import StartCollectingButton from "./components/ButtonStartCollecting";
import SocialMediaLinks from "./components/GroupSocialMedia";
import BlobCrowd from "./components/BlobCrowd/BlobCrowd";
import Link from "next/link";
import RandomTagline from "./components/RandomTagline";
import config from "@/src/config/config";

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
          {/* Heading */}
          <Box sx={{ marginBottom: theme.spacing(3) }}>
            <Typography
              variant="h1"
              sx={{
                fontWeight: "bold",
                wordWrap: "break-word",
                letterSpacing: "2px",
              }}
            >
              <span style={{ color: theme.palette.primary.main }}>B</span>
              ig&nbsp;
              <span style={{ color: theme.palette.success.main }}>P</span>
              lumpy&nbsp;
              <span style={{ color: theme.palette.secondary.main }}>B</span>
              lobs
            </Typography>
          </Box>

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
