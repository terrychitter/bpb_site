import Image from "next/image";
import React from "react";
import CustomNextLink from "./StylesComponents/CustomLink";
import links from "../config/links";

const HomeButton = () => {
  return (
    <CustomNextLink href="/">
      <Image
        src={links.public.ui.icons.home}
        width={40}
        height={40}
        alt="home"
      />
    </CustomNextLink>
  );
};

export default HomeButton;
