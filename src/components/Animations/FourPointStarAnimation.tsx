"use client";

import FourPointStar from "./FourPointStar";
import { Box } from "@mui/material";
import { useEffect, useState } from "react";

// Function to generate more random positions for stars
const getRandomPosition = () => {
  const containerWidth = 100; // Percentage-based width
  const containerHeight = 100; // Percentage-based height

  // Generate random position within the container (from 0 to 100%)
  const randomX = Math.random() * containerWidth;
  const randomY = Math.random() * containerHeight;

  return { x: randomX, y: randomY };
};

const AnimatedFourPointStar = ({
  index,
  totalStars,
}: {
  index: number;
  totalStars: number;
}) => {
  const [position, setPosition] = useState(getRandomPosition());
  const [visible, setVisible] = useState(false);
  const [duration, setDuration] = useState<number>(0);

  useEffect(() => {
    const startDelay = Math.random() * 1000 + 1000;
    const randomDuration = Math.random() * 2 + 1; // Random duration between 1s and 3s

    setDuration(randomDuration); // Set random opacity duration

    const interval = setTimeout(() => {
      setVisible(true);
      const cycle = setInterval(() => {
        setVisible(false);
        setTimeout(() => {
          setPosition(getRandomPosition());
          setVisible(true);
        }, 1000);
      }, 2000);

      return () => clearInterval(cycle);
    }, startDelay);

    return () => clearTimeout(interval);
  }, [index, totalStars]);

  return (
    <Box
      sx={{
        position: "absolute",
        top: `${position.y}%`,
        left: `${position.x}%`,
        transition: `opacity ${duration}s ease-in-out`, // Dynamic opacity duration
        opacity: visible ? 0.5 : 0,
      }}
    >
      <FourPointStar animate />
    </Box>
  );
};

export default AnimatedFourPointStar;
