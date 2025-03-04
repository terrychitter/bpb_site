import { Stack, Typography } from "@mui/material";
import Image from "next/image";
import React from "react";

interface CryptoPriceProps {
  blockChain: string;
  value: number;
}

const blockChainLogoMapping: { [key: string]: string } = {
  polygon: "polygon",
};

const CryptoPrice: React.FC<CryptoPriceProps> = ({ blockChain, value }) => {
  return (
    <Stack
      spacing={1}
      direction={"row"}
      justifyContent={"right"}
      alignItems={"center"}
    >
      <Typography variant="body1" fontSize={"1.2rem"}>
        {value.toString()}
      </Typography>
      <Image
        src={`/currency_logos/${blockChainLogoMapping[blockChain]}.svg`}
        width={35}
        height={35}
        alt={blockChain}
      />
    </Stack>
  );
};

export default CryptoPrice;
