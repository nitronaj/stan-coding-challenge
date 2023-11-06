'use client'; // Error components must be Client Components

import { useEffect } from 'react';

export default function Error({ error, reset }: { error: Error & { digest?: string }; reset: () => void }) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error);
  }, [error]);

  return (
    <div className="error-container place-items-center bg-white ">
      <div className="mx-auto max-w-7xl px-6 pt-4 container">
        <h2>Opps, Something went wrong!</h2>
        <button
          className="my-4 bg-gray-300 p-2 rounded hover:bg-gray-200

		  "
          onClick={
            // Attempt to recover by trying to re-render the segment
            () => reset()
          }
        >
          Try again
        </button>
      </div>
    </div>
  );
}
