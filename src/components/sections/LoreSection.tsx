import { HomeSectionsProps } from "@/src/types";
import React from "react";
import { CustomStack, CustomStackItem } from "./CustomStack";
import Typography from "@mui/material/Typography";
import CustomIconButtonWithLink from "../CustomButtonWithLink";
import text from "@/src/config/text";

const LoreSection: React.FC<HomeSectionsProps> = ({ backgroundColor }) => {
  return (
    <CustomStack backgroundColor={backgroundColor}>
      <CustomStackItem>
        <Typography variant="h2">{text.home.loreSectionTitle}</Typography>
        <Typography variant="body1">{text.home.loreSectionBody}</Typography>
        <CustomIconButtonWithLink
          white
          invertImageColor
          link="/lore"
          src="/ui/link.gif"
          text={text.home.loreSectionButtonText}
        />
      </CustomStackItem>
    </CustomStack>
  );
};

export default LoreSection;
