import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import Link from "next/link";
import Image from "next/image";
import text from "@/src/config/text";
import links from "@/src/config/links";

const FooterSocialMediaSection = () => {
  return (
    <Box
      sx={{
        width: "100%",
      }}
    >
      <Typography
        variant="h2"
        fontSize="1.2rem"
        color="white"
        textAlign={{ xs: "center", md: "left" }}
      >
        {text.mainFooter.socialMediaHeadingText}
      </Typography>
      <Stack
        direction={"row"}
        spacing={1}
        justifyContent={{ xs: "center", md: "left" }}
        marginBlockStart={2}
      >
        <Link href={links.socialMediaLinkDiscord} passHref>
          <Image
            src={links.public.ui.socialMedia.discordPng}
            height={40}
            width={40}
            alt="discord"
          />
        </Link>
        <Link href={links.socialMediaLinkX} passHref>
          <Image
            src={links.public.ui.socialMedia.xPng}
            height={40}
            width={40}
            alt="x (twitter)"
          />
        </Link>
      </Stack>
    </Box>
  );
};

export default FooterSocialMediaSection;
