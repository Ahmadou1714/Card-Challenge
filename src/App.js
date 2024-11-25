import { SpeedInsights } from '@vercel/speed-insights/react';
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
      <SpeedInsights />
      <div>
        <Badge />
        <Produit />
        <Prix />
        <Bouton />
      </div>
    </div>
  );
}
