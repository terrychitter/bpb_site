"use client";

import React, { useState } from "react";
import LogoText from "../LogoText";
import CustomNextLink from "../StylesComponents/CustomLink";
import Container from "@mui/material/Container";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import Box from "@mui/material/Box";
import Image from "next/image";
import links from "@/src/config/links";

interface MenuItem {
  link: string;
  text: string;
}

const menuItems: MenuItem[] = [
  { link: "/", text: "HOME" },
  { link: "/gallery", text: "GALLERY" },
  { link: "/about", text: "ABOUT" },
  { link: "/lore", text: "LORE" },
];

const MenuList: React.FC<{ onClick?: () => void; sx?: any }> = ({
  onClick,
  sx,
}) => (
  <List component="nav" sx={sx}>
    {menuItems.map(({ link, text }) => (
      <ListItem key={link} sx={{ width: "auto" }} onClick={onClick}>
        <CustomNextLink href={link}>
          <Typography variant="h2" component="p" sx={{ fontSize: "1rem" }}>
            {text}
          </Typography>
        </CustomNextLink>
      </ListItem>
    ))}
  </List>
);

const GalleryHeader = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = (open: boolean) => () => {
    setIsMenuOpen(open);
  };

  return (
    <Container
      maxWidth="xl"
      sx={{
        paddingBlock: {
          xs: 1,
          sm: 2,
          md: 3,
        },
      }}
    >
      <Stack
        direction="row"
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        {/* Logo */}
        <LogoText
          boxProps={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            marginBlockEnd: "0 !important",
          }}
          typographyProps={{
            textAlign: {
              xs: "center",
              md: "left",
            },
            fontSize: {
              xs: "1rem",
              sm: "1.5rem",
              md: "2rem",
            },
          }}
        />

        {/* Desktop Menu */}
        <MenuList
          sx={{
            display: { xs: "none", md: "flex" },
            flexDirection: "row",
            gap: 2,
          }}
        />

        {/* Mobile Menu Button */}
        <IconButton onClick={toggleMenu(true)} sx={{ display: { md: "none" } }}>
          <Image
            src={links.public.ui.icons.menuHamburger}
            alt="menu"
            width={20}
            height={20}
          />
        </IconButton>

        {/* Mobile Drawer */}
        <Drawer anchor="right" open={isMenuOpen} onClose={toggleMenu(false)}>
          <Box
            sx={{
              width: 250,
              display: "flex",
              flexDirection: "column",
              padding: 2,
            }}
          >
            <IconButton
              onClick={toggleMenu(false)}
              sx={{ alignSelf: "flex-end" }}
            >
              <Image
                src={links.public.ui.icons.menuClose}
                alt="close"
                width={20}
                height={20}
              />
            </IconButton>
            <MenuList onClick={toggleMenu(false)} />
          </Box>
        </Drawer>
      </Stack>
    </Container>
  );
};

export default GalleryHeader;
