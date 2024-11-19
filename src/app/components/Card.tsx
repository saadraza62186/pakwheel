import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function Card() {
  return (
    <div className="bg-[#f2f3f3] min-h-screen p-4 md:mt-[200px]">
      <h1 className="text-2xl font-bold text-center md:text-left md:ml-[70px]">Featured New Cars</h1>
      <div className="flex justify-center md:justify-start gap-4 mt-4 md:ml-[70px]">
        <h3>Popular</h3>
        <h3>Upcoming</h3>
        <h3>Newly Launched</h3>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-8 md:ml-[70px]">
        <Link href="/AboutCorolla">
          <div className="bg-white shadow rounded-lg overflow-hidden">
            <Image
              src="/Corolla-X-Cars-Cropped-Pictures-for-Website-removebg-preview.png"
              width={800}
              height={200}
              alt="Toyota Corolla"
              className="w-full h-40 object-cover"
            />
            <div className="p-4">
              <h1 className="text-[#233D78] font-bold">Toyota Corolla</h1>
              <h3 className="text-[#3EB549]">PKR 59.7 - 75.5 Lacs</h3>
            </div>
          </div>
        </Link>
        <Link href="/AboutAlto">
          <div className="bg-white shadow rounded-lg overflow-hidden">
            <Image
              src="/Suzuki_Alto_-_PNG-removebg-preview.png"
              width={800}
              height={200}
              alt="Suzuki Alto"
              className="w-full h-40 object-cover"
            />
            <div className="p-4">
              <h1 className="text-[#233D78] font-bold">Suzuki Alto</h1>
              <h3 className="text-[#3EB549]">PKR 23.3 - 30.5 Lacs</h3>
            </div>
          </div>
        </Link>
        <Link href="/AboutHonda">
          <div className="bg-white shadow rounded-lg overflow-hidden">
            <Image
              src="/Honda_City_Front-removebg-preview.png"
              width={800}
              height={200}
              alt="Honda City"
              className="w-full h-40 object-cover"
            />
            <div className="p-4">
              <h1 className="text-[#233D78] font-bold">Honda City</h1>
              <h3 className="text-[#3EB549]">PKR 46.5 - 58.5 Lacs</h3>
            </div>
          </div>
        </Link>
        <Link href="/AboutCivic">
          <div className="bg-white shadow rounded-lg overflow-hidden">
            <Image
              src="/civic-removebg-preview.png"
              width={800}
              height={200}
              alt="Honda Civic"
              className="w-full h-40 object-cover"
            />
            <div className="p-4">
              <h1 className="text-[#233D78] font-bold">Honda Civic</h1>
              <h3 className="text-[#3EB549]">PKR 86.6 - 99 Lacs</h3>
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
}
