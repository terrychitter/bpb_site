// <a target="_blank" href="https://icons8.com/icon/phOKFKYpe00C/x">x logo</a> icon by <a target="_blank" href="https://icons8.com">Icons8</a>
//<a target="_blank" href="https://icons8.com/icon/65646/discord-bubble">discord logo</a> icon by <a target="_blank" href="https://icons8.com">Icons8</a>
import { Box, Stack, Theme, useTheme } from "@mui/material";
import Link from "next/link";
import React from "react";
import { motion } from "framer-motion"; // Import framer-motion
import links from "@/src/config/links";

interface SocialMediaLinksProps {
  animate?: boolean;
}

interface SocialMediaButtonsProps {
  theme: Theme;
}

interface IndvButtonProps {
  imageLink: string;
  siteLink: string;
  width?: string;
}

const IndvButton: React.FC<IndvButtonProps> = ({
  imageLink,
  siteLink,
  width = "40px",
}) => {
  return (
    <Link href={siteLink} passHref>
      <motion.img
        src={imageLink}
        width={width}
        alt="X logo"
        initial={{ x: 100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{
          type: "spring",
          stiffness: 100,
          damping: 10,
        }}
      />
    </Link>
  );
};

const SocialMediaButtons: React.FC<SocialMediaButtonsProps> = ({ theme }) => {
  return (
    <Box
      sx={{
        position: "fixed",
        top: theme.spacing(2),
        right: theme.spacing(2),
      }}
    >
      <Stack direction="row" gap={theme.spacing(1)}>
        <IndvButton
          imageLink="/x.svg"
          siteLink={links.socialMediaLinkX}
          width={"38px"}
        />
        <IndvButton
          imageLink="/discord.svg"
          siteLink={links.socialMediaLinkDiscord}
        />
      </Stack>
    </Box>
  );
};

const SocialMediaLinks: React.FC<SocialMediaLinksProps> = ({
  animate = false,
}) => {
  const theme = useTheme();

  if (animate) {
    return (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <SocialMediaButtons theme={theme} />
      </motion.div>
    );
  }

  return <SocialMediaButtons theme={theme} />;
};

export default SocialMediaLinks;
