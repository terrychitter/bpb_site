import AboutSection from "@/src/components/Sections/AboutSection";
import Box from "@mui/material/Box";
import DiscordSection from "@/src/components/Sections/DiscordSection";
import HomeHeroSection from "@/src/components/HomeHeroSection";
import LoreGallerySection from "@/src/components/Sections/LoreGallerySection";
import React from "react";

const BACKGROUNDCOLORS = ["blue", "secondary", "primary", "green", "yellow"];

/**
 * Shuffles the provided string list of colours
 * @param colors {string[]} - The colours to be shuffled
 * @returns {string[]} - The shuffled colors
 */
const shuffleColors = (colors: string[]) => {
  return colors.sort(() => Math.random() - 0.5);
};

const HomePage = () => {
  // Shuffle Background colors
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
    </>
  );
};

export default HomePage;
