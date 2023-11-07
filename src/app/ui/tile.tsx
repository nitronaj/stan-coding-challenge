import React from 'react';
import Link from 'next/link';

import { type TTile } from '../lib/types';

type TileProps = TTile;

const tile: React.FC<TileProps> = ({ type, name, link, backgroundImage }) => {
  return (
    <Link href={link ?? '#'}>
      <div className="flex flex-col ">
        <div
          className="h-60 flex justify-center items-center bg-gray-800"
          style={{
            backgroundImage: `url(${backgroundImage})`,
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center',
          }}
        >
          {type && <span className="ml-2 text-white text-xl ">{type}</span>}
        </div>
        <span className="text-sm py-2 truncate text-gray-800">{name}</span>
      </div>
    </Link>
  );
};

export default tile;
