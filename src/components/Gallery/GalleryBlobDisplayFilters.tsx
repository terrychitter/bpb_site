import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import ButtonGroup from "@mui/material/ButtonGroup";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import React from "react";

interface CustomButtonProps {
  text: string;
}

const CustomButton: React.FC<CustomButtonProps> = ({ text }) => {
  return (
    <Button size="small" color="inherit">
      {text}
    </Button>
  );
};

const GalleryBlobDisplayFilters = () => {
  return (
    <Box
      sx={{
        width: "100%",
        display: "flex",
        justifyContent: "right",
        marginBlock: 2,
      }}
    >
      <Stack
        direction="column"
        sx={{
          textAlign: "right",
        }}
      >
        <Typography
          variant="h2"
          component={"label"}
          sx={{
            fontSize: "0.6rem",
            opacity: 0.6,
            marginBlockEnd: 0.5,
          }}
        >
          FILTERS
        </Typography>
        <ButtonGroup>
          <CustomButton text="s" />
          <CustomButton text="e" />
          <CustomButton text="ey" />
          <CustomButton text="b" />
        </ButtonGroup>
      </Stack>
    </Box>
  );
};

export default GalleryBlobDisplayFilters;
