import React from "react";
import { useTheme } from "@mui/material";
import LegalButton from "../LegalButton";
import Stack from "@mui/material/Stack";
import Divider from "@mui/material/Divider";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import text from "@/src/config/text";

const LegalSection = () => {
  const theme = useTheme();
  return (
    <Box
      sx={{
        marginBlockStart: theme.spacing(4),
        opacity: 0.5,
        color: "white !important",
      }}
    >
      <Stack
        textAlign={{ xs: "center", md: "right" }}
        direction={"row"}
        gap={2}
        justifyContent={{ xs: "center", md: "end" }}
      >
        <LegalButton
          link="/privacy-policy"
          text={text.mainFooter.legalButtonPrivacyPolicyText}
        />
        <LegalButton
          link="/terms-of-use"
          text={text.mainFooter.legalButtonTermsOfUseText}
        />
        <LegalButton
          link="/ip-rights"
          text={text.mainFooter.legalButtonIPRightsText}
        />
      </Stack>
      <Divider
        sx={{
          marginBlock: theme.spacing(0.5),
          backgroundColor: theme.palette.common.white,
        }}
      />
      <Stack>
        <Typography variant="body1" color="white">
          {text.mainFooter.copyrightText}
        </Typography>
      </Stack>
    </Box>
  );
};

export default LegalSection;
