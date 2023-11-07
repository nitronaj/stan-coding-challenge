import { type TTile } from './lib/types';
import Tile from './ui/tile';

export default function Home() {
  // 	Display the first 21 entries
  // Where the entry has a releaseYear attribute value >= 2010
  // Sorted by the title attribute value in ascending alphanumeric order
  const tiles: TTile[] = [
    {
      type: 'SERIES',
      link: '/series?releaseYear=2010&sort=title&page=1&order=asc',
      name: 'Popular Series',
      backgroundImage: '/assets/placeholder.png',
    },
    {
      type: 'MOVIES',
      link: '/movies?releaseYear=2010&sort=title&page=1&order=asc',
      name: 'Popular Movies',
      backgroundImage: '/assets/placeholder.png',
    },
  ];
  return (
    <div className="grid grid-cols-7 grow gap-4 mt-6 mx-auto max-w-7xl px-6 container">
      {tiles.map((tile) => (
        <Tile key={tile.type} {...tile} />
      ))}
    </div>
  );
}
