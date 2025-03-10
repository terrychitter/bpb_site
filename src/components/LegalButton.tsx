import React from "react";
import { useTheme } from "@mui/material";
import Button from "@mui/material/Button";
import CustomNextLink from "./StylesComponents/CustomLink";

interface LegalButtonProps {
  link: string;
  text: string;
}

const LegalButton: React.FC<LegalButtonProps> = ({ link, text }) => {
  const theme = useTheme();
  return (
    <CustomNextLink href={link} passHref>
      <Button
        size="small"
        sx={{
          fontSize: { xs: "0.5rem", md: "0.75rem" },
          color: theme.palette.common.white,
        }}
      >
        {text}
      </Button>
    </CustomNextLink>
  );
};

export default LegalButton;
