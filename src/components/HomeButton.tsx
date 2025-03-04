import { useTheme } from "@mui/material";
import Link from "next/link";
import Image from "next/image";
import React from "react";

const HomeButton = () => {
  const theme = useTheme();
  return (
    <Link href="/">
      <Image src="/ui/home.gif" width={40} height={40} alt="home" />
    </Link>
  );
};

export default HomeButton;
