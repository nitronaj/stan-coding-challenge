import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const footer: React.FC = () => {
  return (
    <footer className="h-60 bg-gray-900 text-gray-400">
      <div className="mx-auto max-w-7xl px-2 sm:px-6 container pt-8">
        <div className="flex items-center justify-start  text-sm">
          <Link href="/login" className="pr-2 hover:underline">
            Home
          </Link>
          |
          <Link href="/terms-conditions" className="px-2 hover:underline">
            Terms and Conditions
          </Link>
          |
          <Link href="/privacy-policy" className="px-2 hover:underline">
            Privacy and Policy
          </Link>
          |
          <Link href="/collection-statement" className="px-2 hover:underline">
            Collection Statement
          </Link>
          |
          <Link href="/help" className="px-2 hover:underline">
            Help
          </Link>
          |
          <Link href="/manage-account" className="pl-2 hover:underline">
            Mange Account
          </Link>
        </div>
        <div className="flex items-center justify-start py-4 text-xs">
          <span>Copyright © 2016 DEMO Streaming All Rights Reserved</span>
        </div>

        <div className="flex items-center justify-between py-12 ">
          <div className="flex items-center gap-5">
            <Link href="https://facebook.com" target="_blank" className="text-center ">
              <Image alt="facebook" src="/assets/social/facebook-white.svg" width={18} height={18} />
            </Link>
            <Link href="https://twitter.com" target="_blank" className=" hover">
              <Image alt="twitter" src="/assets/social/twitter-white.svg" width={30} height={30} />
            </Link>
            <Link href="https://instagram.com" target="_blank" className=" hover">
              <Image alt="instagram" src="/assets/social/instagram-white.svg" width={30} height={30} />
            </Link>
          </div>
          <div className="flex items-center gap-5">
            <Link href="https://apps.apple.com/au/app/stan/id948095331" target="_blank" className="text-center ">
              <Image alt="Apple Store" src="/assets/store/app-store.svg" width={128} height={18} />
            </Link>
            <Link
              href="https://play.google.com/store/apps/details?id=au.com.stan.and&hl=en&gl=US"
              target="_blank"
              className="text-center "
            >
              <Image alt="Google Store" src="/assets/store/play-store.svg" width={128} height={18} />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default footer;
