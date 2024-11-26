import { SpeedInsights } from '@vercel/speed-insights/react';
import { motion } from 'framer-motion';
import React from 'react';
import Badge from './components/Badge';
import Bouton from './components/Bouton';
import Image from './components/Image';
import Prix from './components/Prix';
import Produit from './components/Produit';

export default function App() {
  return (
    <motion.div
      className="product-card"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <Image />
      <SpeedInsights />
      <motion.div
        initial={{ y: -20 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <Badge />
        <Produit />
        <Prix />
        <Bouton />
      </motion.div>
    </motion.div>
  );
}
