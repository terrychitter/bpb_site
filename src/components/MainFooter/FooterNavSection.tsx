import Box from "@mui/material/Box";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import FooterNavItem from "./FooterNavItem";

const FooterNavSection = () => {
  return (
    <Box
      sx={{
        width: "100%",
      }}
    >
      <List
        sx={{
          textAlign: "center",
          display: { xs: "flex", md: "grid" },
          flexDirection: { xs: "row", md: "unset" },
          gap: 1,
          gridTemplateColumns: { md: "repeat(2, 1fr)" },
          justifyContent: { xs: "center", md: "unset" },
          alignItems: { xs: "start", md: "unset" },
          "& > *": {
            textAlign: "center",
          },
        }}
      >
        <ListItem>
          <FooterNavItem link="/" text="Home" />
        </ListItem>
        <ListItem>
          <FooterNavItem link="/#about" text="About" />
        </ListItem>
        <ListItem>
          <FooterNavItem link="/#loregallery" text="Lore" />
        </ListItem>
        <ListItem>
          <FooterNavItem link="/#loregallery" text="Gallery" />
        </ListItem>
      </List>
    </Box>
  );
};

export default FooterNavSection;
