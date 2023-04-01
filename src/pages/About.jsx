import React from "react";
import { motion } from "framer-motion";
export function About() {
  return (
    <motion.div
      initial={{ opacity: 0, x: 100 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0.5, x: -100 }}
      transition={{ duration: 3, ease: "linear" }}
    >
      hello
    </motion.div>
  );
}
