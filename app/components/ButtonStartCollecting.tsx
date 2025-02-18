import { Button } from "@mui/material";
import Link from "next/link";
import config from "@/src/config/config";

const StartCollectingButton: React.FC = () => {
  return (
    <Link href={config.links.openseaCollectionPage} passHref>
      <Button
        sx={{
          color: "#2081E2",
        }}
        endIcon={
          <img
            src="/opensea.svg"
            alt="Opensea"
            style={{ width: 20, height: 20 }}
          />
        }
      >
        {config.text.home.openseaNavText}
      </Button>
    </Link>
  );
};

export default StartCollectingButton;
