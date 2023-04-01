import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export function Home() {
  return (
    <motion.div
      initial={{ opacity: 0, x: 100 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0.5, x: -100 }}
      transition={{ duration: 3, ease: "linear" }}
    >
      <Link to="/about">Amsterdam Zuid nightwalk</Link>
    </motion.div>
  );
}
