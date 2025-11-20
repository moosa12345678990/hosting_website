import React from 'react';
import Link from 'next/link';
import { Outfit } from 'next/font/google';
import Image from 'next/image';
import { FaTwitter, FaFacebookF, FaInstagram, FaLinkedinIn } from 'react-icons/fa';
const outfit = Outfit({
  weight: '400',
  subsets: ['latin'],
  style: 'normal',
});

const HeaderMessage = () => {
  return (
    <div className="bg-[#43ABEA] p-8 hidden   text-white md:flex justify-between items-center p-2 text-sm h-[48px] w-full font-outfit">
      {/* Left message */}
      <div>
        <h4 className={outfit.className + " text-[16px]"}>
          Get started with Cloud X Hosting today — 50% OFF on your first year of cloud hosting!
        </h4>
      </div>

      {/* Right Register / Login */}
      <div>
        <div className="flex justify-end gap-4 text-sm">
         <Link
        href="/register"
        className={`${outfit.className} font-medium hover:underline transition-all duration-200`}
      >
        Register
      </Link>
      <span>/</span>
      <Link
        href="/login"
        className={`${outfit.className} font-medium hover:underline transition-all duration-200`}
      >
        Login
      </Link>
    


    <div className="flex gap-5 text-xl text-white">
    

      {/* External social links use <a> with target="_blank" */}
      <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
        <FaTwitter />
      </a>
      <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
        <FaFacebookF />
      </a>
      <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
        <FaInstagram />
      </a>
      <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
        <FaLinkedinIn />
      </a>
    </div>
  



        </div>
      </div>
    </div>
  );
};

export { HeaderMessage };
