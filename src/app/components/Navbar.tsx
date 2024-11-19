import React from 'react';

export default function Navbar() {
  return (
    <div>
      <div className="bg-blue-950 flex h-[60px] justify-between items-center px-4">
        <div className="text-white flex items-center w-[150px]">
          <img
            src="old_logo_pak-removebg-preview.png"
            alt="PakWheels Logo"
            className="w-full"
          />
        </div>
        <div className="hidden md:flex text-white gap-8 items-center">
          <p>Used Cars</p>
          <p>New Cars</p>
          <p>Bikes</p>
          <p>Auto Store</p>
          <p>Videos</p>
          <p>Forums</p>
          <p>Blog</p>
          <p>More</p>
        </div>
        <div className="text-white bg-red-800 rounded-lg px-4 py-2 cursor-pointer text-[12px] md:text-[16px]">
          Post An Ad
        </div>
      </div>
    </div>
  );
}
