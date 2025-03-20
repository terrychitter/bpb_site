import AboutSection from "@/src/components/SubSections/AboutSection";
import Box from "@mui/material/Box";
import DiscordSection from "@/src/components/SubSections/DiscordSection";
import HomeHeroSection from "@/src/components/HomeHeroSection";
import LoreGallerySection from "@/src/components/SubSections/LoreGallerySection";
import React from "react";
import MainFooter from "@/src/components/MainFooter/MainFooter";
import text from "@/src/config/text";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: text.metaData.homeTitle,
  description: text.metaData.homeDescription,
};

const BACKGROUNDCOLORS = ["blue", "secondary", "primary", "green", "yellow"];

const shuffleColors = (colors: string[]) => {
  return colors.sort(() => Math.random() - 0.5);
};

const HomePage = () => {
  const shuffledColors = shuffleColors(BACKGROUNDCOLORS);

  return (
    <>
      <HomeHeroSection />
      <Box id="about">
        <AboutSection backgroundColor={shuffledColors[0]} />
      </Box>
      <LoreGallerySection
        backgroundColors={[shuffledColors[1], shuffledColors[2]]}
      />
      <DiscordSection />
      <MainFooter />
    </>
  );
};

export default HomePage;
