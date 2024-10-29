import React from "react";
import "./page.css";
import anyimage from "./assets/image.png";
import Link from "next/link";

export default function Page() {
  return (
    <div id="main">
      <div className="">
        <h1 className="font-bold text-2xl flex justify-center items-center mt-9 underline ">
          Honda City 2024 Price in Pakistan, Image, Reviews & Specs
        </h1>
      </div>
      <div className="flex justify-center mt-5 h-[200px]">
        <img src={"city-2.jpg"} alt="corolla pic" />
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
          <div>: 1200 CC</div>
        </div>
        <div className="flex ">
          <div className="font-semibold">Condition</div>
          <div>: 8 / 10</div>
        </div>
        <div className="flex ">
          <div className="font-semibold">Driven</div>
          <div>: 5000 KM</div>
        </div>
        <div className="flex ">
          <div className="font-semibold">Suspension Type</div>
          <div>: Soft Suspension</div>
        </div>
      </div>
      <div className="flex gap-4 justify-center items-center mt-1">
        <div className="flex ">
          <div className="font-semibold">Avg</div>
          <div>: 15 km per ltr</div>
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
            PKR 46,00,000
        </h1>
      </div>
      <Link href='/CheckHonda'>
        <div className=" flex justify-between items-center">
            <button className="bg-blue-800 text-white p-3 rounded-lg border-none text-[16px] ml-[580px] mt-2" >Make Payment</button>
        </div>
      </Link>
    </div>
  );
}
