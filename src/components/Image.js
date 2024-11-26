import { motion } from 'framer-motion';
import React from 'react';

export default function Image() {
  return (
    <motion.img
      src="bf43fec8f24317098a616188c4651772.jpeg"
      alt="Montre"
      className="product-image"
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      transition={{ duration: 0.5 }}
    />
  );
}
