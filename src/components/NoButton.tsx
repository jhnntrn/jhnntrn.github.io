// src/components/NoButton.tsx

import React, { useState } from "react";
import { motion } from "framer-motion";

// Define the props interface
interface NoButtonProps {
  text: string;
  onClick: () => void;
  disabled?: boolean; // Add a prop for disabled state
  style?: React.CSSProperties;
  className?: string;
}

const NoButton: React.FC<NoButtonProps> = ({
  text,
  onClick,
  disabled = false,
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
        if (!disabled) {
          // Only allow click if not disabled
          handleMove();
          onClick();
        }
      }}
      onMouseEnter={() => {
        if (!disabled) {
          // Only allow hover if not disabled
          handleMove();
        }
      }}
      animate={position}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
      style={{ position: "absolute", ...style }}
      className={className}
      whileHover={!disabled ? { scale: 1.1 } : undefined} // Scale only if not disabled
      whileTap={!disabled ? { scale: 0.9 } : undefined} // Scale only if not disabled
      disabled={disabled} // Apply disabled attribute based on prop
    >
      {text}
    </motion.button>
  );
};

export default NoButton;
