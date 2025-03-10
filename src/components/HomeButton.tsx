import Image from "next/image";
import React from "react";
import CustomNextLink from "./StylesComponents/CustomLink";

const HomeButton = () => {
  return (
    <CustomNextLink href="/">
      <Image src="/ui/home.gif" width={40} height={40} alt="home" />
    </CustomNextLink>
  );
};

export default HomeButton;
