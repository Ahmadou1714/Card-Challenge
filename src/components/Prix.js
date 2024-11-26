import { motion } from 'framer-motion';
import React from 'react';

export default function Prix() {
  return (
    <motion.div
      className="product-price"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <span className="original-price">183,99 €</span>
      <span className="discounted-price">149,99 € </span>
    </motion.div>
  );
}
