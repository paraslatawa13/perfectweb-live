import React from "react";
import { motion } from "framer-motion";
import * as animations from "../animations";

const MotionDiv = ({ children, type = "fadeIn", className = "", ...props }) => {
  const variant = animations[type] || animations.fadeIn;

  return (
    <motion.div
      className={className}
      variants={variant}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      {...props}
    >
      {children}
    </motion.div>
  );
};

export default MotionDiv;
