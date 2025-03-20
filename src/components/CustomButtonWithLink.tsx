"use client";

import Button, { ButtonProps } from "@mui/material/Button";
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
  buttonProps?: ButtonProps;
}

const CustomIconButtonWithLink: React.FC<CustomIconButtonWithLinkProps> = ({
  src,
  link,
  text,
  white = false,
  invertImageColor = false,
  buttonProps = {},
}) => {
  const theme = useTheme();
  return (
    <CustomNextLink href={link} passHref>
      <Button
        {...buttonProps}
        endIcon={
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
          ...(buttonProps?.sx || {}),
        }}
      >
        {text}
      </Button>
    </CustomNextLink>
  );
};

export default CustomIconButtonWithLink;
