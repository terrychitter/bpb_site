import { motion } from "framer-motion";
import React, { useEffect, useState } from "react";

interface BlobProps {
  src?: string;
  startX: number;
  initialDirection: "left" | "right";
  speed: number;
}

// TODO: Fix tap animation

const Blob: React.FC<BlobProps> = ({
  src = "/blob.png",
  startX,
  initialDirection,
  speed,
}) => {
  const [direction, setDirection] = useState(initialDirection);
  const randomOffset = Math.random() * 0.5 + 0.75;
  const [isClicked, setIsClicked] = useState(false);

  useEffect(() => {
    // Toggle direction after each animation cycle
    const interval = setInterval(() => {
      setDirection((prev) => (prev === "left" ? "right" : "left"));
    }, speed * 1000);
    return () => clearInterval(interval);
  }, [speed]);

  return (
    <motion.div
      style={{
        position: "absolute",
        bottom: "-70px",
        left: `${startX}%`,
        width: "170px",
      }}
      initial={{ x: 0 }}
      animate={{
        x: direction === "left" ? "-100vw" : "100vw",
      }}
      transition={{
        duration: speed,
        ease: "linear",
        repeat: Infinity,
        repeatType: "reverse",
      }}
      onClick={() => setIsClicked(true)}
    >
      <motion.img
        src={src}
        width="100%"
        style={{
          transform: `scaleX(${direction === "left" ? -1 : 1})`,
          transformOrigin: "center",
        }}
        animate={{
          scaleX: [1, 1 + Math.random() * 0.2, 1, 0.9 + Math.random() * 0.2, 1],
          scaleY: [
            1,
            0.9 + Math.random() * 0.2,
            1,
            1.1 - Math.random() * 0.2,
            1,
          ],
          y: isClicked ? [-10, 10, -10, 0] : [0],
        }}
        transition={{
          duration: isClicked ? randomOffset / 2 : randomOffset,
          repeat: isClicked ? 1 : Infinity,
          ease: "easeInOut",
        }}
        onAnimationComplete={() => setIsClicked(false)}
      />
    </motion.div>
  );
};

export default Blob;
