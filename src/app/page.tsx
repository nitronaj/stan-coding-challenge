import { type Tile } from './lib/types';
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
    <div className="mt-4 flex grow gap-4 mx-auto max-w-7xl px-6 container">
      {tiles.map((tile) => (
        <TileComponent key={tile.type} {...tile} />
      ))}
    </div>
  );
}
