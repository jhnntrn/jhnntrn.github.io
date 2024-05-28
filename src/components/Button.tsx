// src/components/Button.tsx
import React from "react";
import { motion } from "framer-motion";

// Define the props interface
interface ButtonProps {
  text: string;
  onClick: () => void;
  disabled?: boolean;
  className?: string;
}

const Button: React.FC<ButtonProps> = ({
  text,
  onClick,
  disabled = false,
  className,
}) => {
  return (
    <motion.button
      onClick={onClick}
      disabled={disabled}
      className={className}
      style={{
        position: "absolute",
        top: "85%",
        left: "10%",
      }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
    >
      {text}
    </motion.button>
  );
};

export default Button;
