import React from 'react';
import Badge from './components/Badge';
import Bouton from './components/Bouton';
import Image from './components/Image';
import Prix from './components/Prix';
import Produit from './components/Produit';

export default function App() {
  return (
    <div className="product-card">
      <Image />
      <div>
        <Badge />
        <Produit />
        <Prix />
        <Bouton />
      </div>
    </div>
  );
}
