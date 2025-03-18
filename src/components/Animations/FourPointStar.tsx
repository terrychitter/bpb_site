import React from "react";
import Image from "next/image";
import links from "@/src/config/links";

interface FourPointStarProps {
  animate?: boolean;
  size?: number;
}

const FourPointStar: React.FC<FourPointStarProps> = ({
  animate = true,
  size = 50,
}) => {
  return (
    <Image
      src={
        animate
          ? `${links.public.decor.fourPointStarAnim}`
          : `${links.public.decor.fourPointStarStatic}`
      }
      width={size}
      height={size}
      alt="star"
      unoptimized
    />
  );
};

export default FourPointStar;
