import React from "react";
import text from "@/src/config/text";
import Typography from "@mui/material/Typography";
import { CustomGrid, CustomGridItem } from "./CustomGrid";
import { HomeSectionsProps } from "@/src/types";

const AboutSection: React.FC<HomeSectionsProps> = ({
  backgroundColor = "inherit",
}) => {
  return (
    <CustomGrid backgroundColor={backgroundColor}>
      <CustomGridItem>
        <Typography variant="h2">{text.home.aboutSectionTitle}</Typography>
      </CustomGridItem>
      <CustomGridItem>
        <Typography variant="body1">{text.home.aboutSectionBody}</Typography>
      </CustomGridItem>
    </CustomGrid>
  );
};

export default AboutSection;
