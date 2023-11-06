import React from 'react';

const header: React.FC = () => {
  return (
    <header className="bg-gray-700 ">
      <div className="mx-auto max-w-7xl px-2 sm:px-6 container">
        <div className="relative flex h-14 items-center justify-between">
          <div className="ml-2 text-white text-xl ">Popular Titles</div>
        </div>
      </div>
    </header>
  );
};

export default header;
