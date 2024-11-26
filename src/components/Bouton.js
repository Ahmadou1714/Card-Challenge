import { motion } from 'framer-motion';
import { Heart } from 'lucide-react';
import React from 'react';

export default function Bouton() {
  return (
    <motion.div
      className="bouton"
      initial={{ y: 20 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <button className="add-to-cart-button">Ajouter au panier</button>
      <button className="favorite-button">
        <Heart size={20} />
      </button>
    </motion.div>
  );
}
