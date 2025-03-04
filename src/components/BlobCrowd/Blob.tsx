"use client";

import { motion } from "framer-motion";
import React, { useEffect, useState } from "react";

interface BlobProps {
  src?: string;
  startX: number;
  bottom: number;
  initialDirection: "left" | "right";
  speed: number;
  isMoving?: boolean;
  width?: number;
}

const Blob: React.FC<BlobProps> = ({
  src = "/blob.png",
  startX,
  bottom,
  initialDirection,
  speed,
  isMoving = true,
  width = 170,
}) => {
  const [direction, setDirection] = useState(initialDirection);
  const randomOffset = Math.random() * 0.5 + 0.75;
  const [isClicked, setIsClicked] = useState(false);

  useEffect(() => {
    if (!isMoving) return;
    const interval = setInterval(() => {
      setDirection((prev) => (prev === "left" ? "right" : "left"));
    }, speed * 1000);
    return () => clearInterval(interval);
  }, [speed, isMoving]);

  return (
    <motion.div
      style={{
        position: "absolute",
        bottom: `${bottom}px`,
        left: `${startX}%`,
        width: `${width}px`,
      }}
      initial={{ x: 0 }}
      animate={
        isMoving ? { x: direction === "left" ? "-100vw" : "100vw" } : { x: 0 }
      }
      transition={{
        duration: speed,
        ease: "linear",
        repeat: isMoving ? Infinity : 0,
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
