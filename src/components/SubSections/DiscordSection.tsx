"use client";

import AnimatedFourPointStar from "../Animations/FourPointStarAnimation";
import CustomIconButtonWithLink from "../CustomButtonWithLink";
import links from "@/src/config/links";
import React, { useEffect, useState } from "react";
import Stack from "@mui/material/Stack";
import text from "@/src/config/text";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import RockerBlob from "./DiscordSection/RockerBlob";

const DiscordSection = () => {
  const [starCount, setStarCount] = useState(0);

  useEffect(() => {
    const updateStarCount = () => {
      setStarCount(Math.ceil(window.innerWidth / 500) * 2);
    };

    updateStarCount(); // Set initial count
    window.addEventListener("resize", updateStarCount);

    return () => window.removeEventListener("resize", updateStarCount);
  }, []);

  return (
    <Stack
      spacing={2}
      color="white"
      sx={{
        padding: 5,
        marginBlock: 5,
        position: "relative",
        display: "flex",
        width: "100vw",
        height: "460px",
        backgroundColor: "#7289da",
        alignItems: "center",
        overflow: "hidden",
      }}
    >
      {Array.from({ length: starCount }).map((_, index) => (
        <AnimatedFourPointStar
          key={index}
          index={index}
          totalStars={starCount}
        />
      ))}
      <Typography
        variant="h2"
        sx={{
          textAlign: "center",
          zIndex: 2,
        }}
      >
        {text.home.discordSectionTitle}
      </Typography>
      <Typography
        variant="body1"
        sx={{
          zIndex: 2,
        }}
      >
        {text.home.discordSectionBody}
      </Typography>
      <Box
        sx={{
          zIndex: 3,
        }}
      >
        <CustomIconButtonWithLink
          link={links.socialMediaLinkDiscord}
          src={links.public.ui.icons.arrow}
          text={text.home.discordSectionButtonText}
          white
          invertImageColor
          buttonProps={{
            sx: {
              marginBlockStart: 2,
            },
          }}
        />
      </Box>
      <RockerBlob />
    </Stack>
  );
};

export default DiscordSection;
