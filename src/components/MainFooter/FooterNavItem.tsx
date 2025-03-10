import React from "react";
import CustomNextLink from "../StylesComponents/CustomLink";

interface FooterNavItemProps {
  text: string;
  link: string;
}

const FooterNavItem: React.FC<FooterNavItemProps> = ({ text, link }) => {
  return <CustomNextLink href={link}>{text}</CustomNextLink>;
};

export default FooterNavItem;
