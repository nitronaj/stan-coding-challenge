'use client';
import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

import { type TTile } from '../lib/types';

type TileProps = TTile;

const Tile: React.FC<TileProps> = ({ type, name, link, query, background: { url, size = 'auto' } }) => {
  const pathname = usePathname();
  const href = {
    pathname: link,
    query,
  };
  return (
    <Link href={link ? href : `${pathname}//#`}>
      <div className="flex flex-col ">
        <div
          className="h-60 flex justify-center items-center bg-gray-800"
          style={{
            backgroundImage: `url(${url})`,
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center',
            backgroundSize: size,
          }}
        >
          {type && <span className="ml-2 text-white text-xl ">{type}</span>}
        </div>
        <span className="text-sm py-2 truncate text-gray-800">{name}</span>
      </div>
    </Link>
  );
};

export default Tile;
