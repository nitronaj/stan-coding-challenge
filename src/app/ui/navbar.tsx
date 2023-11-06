import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const navbar: React.FC = () => {
  return (
    <nav className="bg-blue-600 bg-gradient-to-b from-blue-400 to-blue-600">
      <div className="mx-auto max-w-7xl px-2 sm:px-6 container">
        <div className="relative flex h-14 items-center justify-between">
          <div className="flex flex-1 justify-start items-center">
            <div className="flex flex-shrink-0 items-center">
              <Link href="/">
                <Image className="h-8 w-auto" src="/stan_logo.png" alt="Your Company" width={80} height={80} />
              </Link>
            </div>
            <div className="ml-6 text-white text-md sm:text-2xl ">DEMO Streaming</div>
          </div>
          <div className="flex items-center ml-6 pr-0 gap-5">
            <Link href="/login" className="flex items-center text-xs text-white hover:underline">
              <span>Log in</span>
            </Link>

            <Link
              href="/start"
              className="flex items-center rounded-sm bg-gray-700 px-2 py-1 text-sm text-white transition-colors hover:bg-gray-600 "
            >
              <span>Start your free trial</span>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default navbar;
