import { Chip } from "@mui/material";
import React from "react";

interface RarityChipProps {
  rarityValue: number;
}

const getRarity = (value: number) => {
  if (value <= 0.5) return { label: "Common", color: "#B0BEC5" };
  if (value <= 0.75) return { label: "Uncommon", color: "#66BB6A" };
  if (value <= 0.9) return { label: "Rare", color: "#42A5F5" };
  if (value <= 0.98) return { label: "Epic", color: "#AB47BC" };
  return { label: "Legendary", color: "rainbow" };
};

const RarityChip: React.FC<RarityChipProps> = ({ rarityValue }) => {
  const { label, color } = getRarity(rarityValue);

  return (
    <Chip
      label={label}
      size="small"
      sx={{
        backgroundColor: "transparent", // No background
        border: "none", // No border
        boxShadow: "none", // No shadow
        padding: 0, // Removes extra spacing
        minWidth: "auto", // Fit text size
        justifyContent: "flex-start", // Left-align text
        textAlign: "left",
        fontWeight: "bold",
        color: color === "rainbow" ? "transparent" : color, // Make text invisible for the gradient effect
        backgroundClip: color === "rainbow" ? "text" : "unset",
        WebkitBackgroundClip: color === "rainbow" ? "text" : "unset",
        backgroundSize: "200% 200%", // Larger background to enable smooth movement
        backgroundImage:
          color === "rainbow"
            ? "linear-gradient(270deg, #ff0000, #ff7300, #ffeb00, #47ff00, #00ffee, #2b65ff, #8000ff, #ff0080)"
            : "none",
        animation:
          color === "rainbow"
            ? "rainbowText 3s linear infinite"
            : `colorChange 4s ease-in-out infinite`, // Color animation for all rarities
        "@keyframes rainbowText": {
          "0%": { backgroundPosition: "0% 50%" },
          "50%": { backgroundPosition: "100% 50%" },
          "100%": { backgroundPosition: "0% 50%" },
        },
        "@keyframes colorChange": {
          // Color animations based on rarity
          "0%": {
            color:
              color === "#66BB6A"
                ? "#66BB6A"
                : color === "#42A5F5"
                ? "#42A5F5"
                : color === "#AB47BC"
                ? "#AB47BC"
                : color === "#FFB300"
                ? "#FFB300"
                : "#B0BEC5",
          },
          "25%": {
            color:
              color === "#66BB6A"
                ? "#81C784"
                : color === "#42A5F5"
                ? "#64B5F6"
                : color === "#AB47BC"
                ? "#D81B60"
                : color === "#FFB300"
                ? "#FFA000"
                : "#90A4AE",
          },
          "50%": {
            color:
              color === "#66BB6A"
                ? "#388E3C"
                : color === "#42A5F5"
                ? "#1E88E5"
                : color === "#AB47BC"
                ? "#8E24AA"
                : color === "#FFB300"
                ? "#FF8F00"
                : "#607D8B",
          },
          "75%": {
            color:
              color === "#66BB6A"
                ? "#1B5E20"
                : color === "#42A5F5"
                ? "#1976D2"
                : color === "#AB47BC"
                ? "#6A1B9A"
                : color === "#FFB300"
                ? "#F57C00"
                : "#455A64",
          },
          "100%": {
            color:
              color === "#66BB6A"
                ? "#66BB6A"
                : color === "#42A5F5"
                ? "#42A5F5"
                : color === "#AB47BC"
                ? "#AB47BC"
                : color === "#FFB300"
                ? "#FFB300"
                : "#B0BEC5",
          },
        },
        "& .MuiChip-label": {
          padding: 0, // Remove built-in Chip padding
          textAlign: "left", // Left-align text inside Chip
          display: "block", // Ensures proper alignment
        },
      }}
    />
  );
};

export default RarityChip;
