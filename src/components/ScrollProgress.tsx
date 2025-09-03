// src/components/ScrollProgress.tsx
import React from "react";
import { useScroll, useSpring, motion } from "framer-motion";

const ScrollProgress: React.FC = () => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 20,
    restDelta: 0.001,
  });

  return (
    <motion.div
      style={{ scaleX }}
      className="fixed left-0 right-0 top-0 z-50 h-1 origin-left 
                 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500"
    />
  );
};

export default ScrollProgress;
