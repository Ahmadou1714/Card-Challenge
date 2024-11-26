import { motion } from 'framer-motion';
import React from 'react';

export default function Produit() {
  const starStyle = {
    fill: 'gold',
    width: '14px',
    height: '24px',
    marginRight: '4px',
  };

  const emptyStarStyle = {
    fill: 'none',
    stroke: 'gold',
    strokeWidth: '2',
    width: '14px',
    height: '24px',
    marginRight: '4px',
  };

  return (
    <>
      <motion.h1
        initial={{ x: -100 }}
        animate={{ x: 0 }}
        transition={{ duration: 0.5 }}
      >
        Montre Connectée FtLife Pro 5+
      </motion.h1>
      <div className="product-details">
        <div>
          {Array.from({ length: 4 }).map((_, index) => (
            <svg
              key={index}
              style={starStyle}
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <path d="M12 .587l3.668 7.568L24 9.423l-6 5.849 1.417 8.268L12 18.896l-7.417 4.644L6 15.272 0 9.423l8.332-1.268z" />
            </svg>
          ))}
          <svg
            style={emptyStarStyle}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            <path d="M12 .587l3.668 7.568L24 9.423l-6 5.849 1.417 8.268L12 18.896l-7.417 4.644L6 15.272 0 9.423l8.332-1.268z" />
          </svg>
        </div>
        <motion.span
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          43 notes
        </motion.span>
      </div>
    </>
  );
}
