import React from 'react';
import Link from 'next/link';

import { type Tile } from '../lib/types';

type TileProps = Tile;

const tile: React.FC<TileProps> = ({ type, text, link }) => {
  return (
    <Link href={link}>
      <div className="flex flex-col">
        <div
          className="w-32 h-52 flex justify-center items-center bg-gray-800"
          style={{
            backgroundImage: 'url(/assets/placeholder.png)',
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center',
          }}
        >
          <span className="ml-2 text-white text-xl ">{type}</span>
        </div>
        <span className="text-sm py-2 text-gray-800">{text}</span>
      </div>
    </Link>
  );
};

export default tile;
