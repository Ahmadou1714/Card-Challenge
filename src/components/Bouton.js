import { Heart } from 'lucide-react';
import React from 'react';

export default function Bouton() {
  return (
    <div className="bouton">
      <button className="add-to-cart-button">Ajouter au panier</button>
      <button className="favorite-button">
        <Heart size={16} />
      </button>
    </div>
  );
}
