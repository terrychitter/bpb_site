import CustomIconButtonWithLink from "../CustomButtonWithLink";
import React from "react";
import text from "@/src/config/text";
import Typography from "@mui/material/Typography";
import { CustomStack, CustomStackItem } from "./CustomStack";
import { HomeSectionsProps } from "@/src/types";

const GallerySection: React.FC<HomeSectionsProps> = ({ backgroundColor }) => {
  return (
    <CustomStack backgroundColor={backgroundColor}>
      <CustomStackItem>
        <Typography variant="h2">{text.home.gallerySectionTitle}</Typography>
        <Typography variant="body1">{text.home.gallerySectionBody}</Typography>
        <CustomIconButtonWithLink
          white
          invertImageColor
          link="/gallery"
          src="/ui/link.gif"
          text={text.home.gallerySectionButtonText}
        />
      </CustomStackItem>
    </CustomStack>
  );
};

export default GallerySection;
