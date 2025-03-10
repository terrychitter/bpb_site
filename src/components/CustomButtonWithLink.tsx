"use client";

import Button from "@mui/material/Button";
import Image from "next/image";
import React from "react";
import { useTheme } from "@mui/material/styles";
import CustomNextLink from "./StylesComponents/CustomLink";

interface CustomIconButtonWithLinkProps {
  src: string;
  link: string;
  text: string;
  white?: boolean;
  invertImageColor?: boolean;
}

const CustomIconButtonWithLink: React.FC<CustomIconButtonWithLinkProps> = ({
  src,
  link,
  text,
  white = false,
  invertImageColor = false,
}) => {
  const theme = useTheme();
  return (
    <CustomNextLink href={link} passHref>
      <Button
        startIcon={
          <Image
            src={src}
            alt={text}
            width={25}
            height={25}
            style={{
              filter: invertImageColor ? "invert(1)" : "none",
            }}
          />
        }
        sx={{
          marginBlockStart: theme.spacing(10),
          color: white ? "white" : theme.palette.text.primary,
          fontWeight: "600",
        }}
      >
        {text}
      </Button>
    </CustomNextLink>
  );
};

export default CustomIconButtonWithLink;
