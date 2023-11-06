import Image from 'next/image';
import Link from 'next/link';

import { type Tile } from './lib/types';
import Footer from './ui/footer';
import Header from './ui/header';
import Navbar from './ui/navbar';
import TileComponent from './ui/tile';

export default function Home() {
  const tiles: Tile[] = [
    {
      type: 'SERIES',
      link: '/series',
      text: 'Popular Series',
    },
    {
      type: 'MOVIES',
      link: '/movies',
      text: 'Popular Movies',
    },
  ];
  return (
    <main className="flex min-h-screen flex-col">
      <Navbar />
      <Header />
      <div className="mt-4 flex grow gap-4 mx-auto max-w-7xl px-6 container">
        {tiles.map((tile) => (
          <TileComponent key={tile.type} {...tile} />
        ))}
      </div>
      <Footer />
    </main>
  );
}
