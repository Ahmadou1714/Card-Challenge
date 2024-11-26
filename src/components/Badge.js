import { motion } from 'framer-motion';
import React from 'react';

export default function Badge() {
  return (
    <motion.div
      className="product-badge"
      initial={{ x: -100 }}
      animate={{ x: 0 }}
      transition={{ duration: 0.5 }}
    >
      <span className="badge">FitLife</span>
      <span className="modele">XV-383923810</span>
    </motion.div>
  );
}
