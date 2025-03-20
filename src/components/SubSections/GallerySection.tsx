import CustomIconButtonWithLink from "../CustomButtonWithLink";
import React from "react";
import text from "@/src/config/text";
import Typography from "@mui/material/Typography";
import { CustomStack, CustomStackItem } from "./CustomStack";
import { HomeSectionsProps } from "@/src/types";
import links from "@/src/config/links";

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
          src={links.public.ui.icons.arrow}
          text={text.home.gallerySectionButtonText}
        />
      </CustomStackItem>
    </CustomStack>
  );
};

export default GallerySection;
