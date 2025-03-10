import { Button } from "@mui/material";
import config from "@/src/config/config";
import Image from "next/image";
import CustomNextLink from "./StylesComponents/CustomLink";

const StartCollectingButton: React.FC = () => {
  return (
    <CustomNextLink href={config.links.openseaCollectionPage} passHref>
      <Button
        sx={{
          color: "#2081E2",
        }}
        endIcon={
          <Image src="/opensea.svg" alt="Opensea" width="20" height="20" />
        }
      >
        {config.text.home.openseaNavText}
      </Button>
    </CustomNextLink>
  );
};

export default StartCollectingButton;
