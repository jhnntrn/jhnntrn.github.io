// src/components/NoButton.tsx

import React, { useState } from "react";
import { motion } from "framer-motion";

// Define the props interface
interface NoButtonProps {
  text: string;
  onClick: () => void;
  style?: React.CSSProperties;
  className?: string;
}

const NoButton: React.FC<NoButtonProps> = ({
  text,
  onClick,
  style,
  className,
}) => {
  const [position, setPosition] = useState({ top: "85%", left: "65%" });

  const getRandomPosition = () => {
    const randomTop = Math.random() * 90 + 5; // Random top position between 5% and 95%
    const randomLeft = Math.random() * 90 + 5; // Random left position between 5% and 95%
    return { top: `${randomTop}%`, left: `${randomLeft}%` };
  };

  const handleMove = () => {
    setPosition(getRandomPosition());
  };

  return (
    <motion.button
      onClick={() => {
        handleMove();
        onClick();
      }}
      onMouseEnter={handleMove}
      animate={position}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
      style={{ position: "absolute", ...style }}
      className={className}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
    >
      {text}
    </motion.button>
  );
};

export default NoButton;
