import React from "react";
import "./page.css";
import Link from "next/link";
import Image from "next/image";
export default function Page() {
  return (
    <div id="main">
      <div className="">
        <h1 className="font-bold text-2xl flex justify-center items-center mt-9 underline ">
          Honda Civic 2024 Price in Pakistan, Image, Reviews & Specs
        </h1>
      </div>
      <div className="flex justify-center mt-5 h-[200px]">
      <Image src="/civic-2.jpg" width={300} height={700} alt="corolla pic" />
      </div>
      <div>
        <div className="flex justify-center items-center gap-[50px] mt-4">
          <button className="bg-blue-800 text-white p-3 rounded-lg border-none text-xs">
            Book a Test Drive
          </button>
          <button className="bg-blue-800 text-white p-3 rounded-lg border-none text-xs">
            Request Bank Fianance{" "}
          </button>
          <button className="bg-blue-800 text-white p-3 rounded-lg border-none text-xs">
            Visit Place
          </button>
          <button className="bg-blue-800 text-white p-3 rounded-lg border-none text-xs">
            Car Inspection
          </button>
        </div>
      </div>
      <div>
        <h3 className="flex justify-center mt-3 font-semibold">
          Vehicle Description
        </h3>
      </div>
      <div className="flex justify-center items-center gap-4 mt-3">
        <div className="flex">
          <div className="">Number of Doors</div>
          <div>: 4</div>
        </div>
        <div className="flex ">
          <div className="font-semibold">Engine</div>
          <div>: 1500 CC</div>
        </div>
        <div className="flex ">
          <div className="font-semibold">Condition</div>
          <div>: 8.5 / 10</div>
        </div>
        <div className="flex ">
          <div className="font-semibold">Driven</div>
          <div>: 4000 KM</div>
        </div>
        <div className="flex ">
          <div className="font-semibold">Suspension Type</div>
          <div>: Soft Suspension</div>
        </div>
      </div>
      <div className="flex gap-4 justify-center items-center mt-1">
        <div className="flex ">
          <div className="font-semibold">Avg</div>
          <div>: 18 km per ltr</div>
        </div>
        <div className="flex ">
          <div className="font-semibold">Transmission</div>
          <div>: Automatic</div>
        </div>
        <div className="flex ">
          <div className="font-semibold">fuel type</div>
          <div>: Petrol</div>
        </div>
      </div>
      <div>
        <h1 className="text-[20px] text-green-600 flex justify-center items-center mt-3">
            PKR 86,00,000
        </h1>
      </div>
      <Link href='/CheckCivic'>
        <div className=" flex justify-between items-center">
            <button className="bg-blue-800 text-white p-3 rounded-lg border-none text-[16px] ml-[580px] mt-2" >Make Payment</button>
        </div>
      </Link>
    </div>
  );
}
