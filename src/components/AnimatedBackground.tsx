"use client"

import { motion } from "motion/react";

export default function AnimatedBackground() {
  return (
    <motion.div
      className="fixed inset-0 -z-10"
      animate={{
        background: [
          "linear-gradient(135deg, #667eea, #764ba2)",
          "linear-gradient(135deg, #f093fb, #f5576c)",
          "linear-gradient(135deg, #4facfe, #00f2fe)",
          "linear-gradient(135deg, #667eea, #764ba2)",
        ],
      }}
      transition={{
        duration: 10,
        repeat: Infinity,
        ease: "linear",
      }}
    />
  );
}