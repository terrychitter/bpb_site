import React, { useState, useEffect } from "react";
import { Typography } from "@mui/material";
import TypeWriter from "typewriter-effect";
import animation from "@/src/config/animation";
import text from "@/src/config/text";

const RandomTagline = () => {
  const [taglines, setTaglines] = useState<string[]>([]);
  const [currentTagline, setCurrentTagline] = useState<string>(
    text.home.taglineLoadingText
  );
  const [delay, setDelay] = useState<number>(animation.taglineDefaultDelay); // Default 5s
  const typingSpeed = animation.taglineTypingSpeed; // Speed in ms per character
  const extraWaitTime = animation.taglineExtraWaitTime; // Extra 6 seconds before switching

  useEffect(() => {
    const fetchTaglines = async () => {
      const data = text.taglines;
      setTaglines(data);

      if (data.length > 0) {
        const initialTagline = data[Math.floor(Math.random() * data.length)];
        setCurrentTagline(initialTagline);
        setDelay(calculateTotalDelay(initialTagline));
      }
    };

    fetchTaglines();
  }, []);

  useEffect(() => {
    if (taglines.length > 0) {
      const intervalId = setTimeout(() => {
        const randomIndex = Math.floor(Math.random() * taglines.length);
        const newTagline = taglines[randomIndex];

        setCurrentTagline(newTagline);
        setDelay(calculateTotalDelay(newTagline)); // Adjust delay dynamically
      }, delay);

      return () => clearTimeout(intervalId);
    }
  }, [currentTagline, taglines, delay]);

  // Calculate total time before switching to the next tagline
  const calculateTotalDelay = (text: string) => {
    const typingTime = text.length * typingSpeed;
    const extraDelay = animation.taglineExtraDelay;
    return typingTime + extraDelay + extraWaitTime;
  };

  return (
    <Typography variant="h2" fontSize="1rem">
      <TypeWriter
        options={{
          strings: [currentTagline],
          autoStart: true,
          loop: false,
          delay: typingSpeed,
        }}
      />
    </Typography>
  );
};

export default RandomTagline;
