import React from "react";
import './page.css'
import Link from "next/link";

export default function Forms() {
  return (
    <div className="">
      <h1 className="text-center text-6xl mt-10 font-bold">
        Enter Your Details
      </h1>
      <div>
        <div className="flex justify-center flex-col items-center mt-1 ">
          <input
            type="text"
            placeholder="Enter your Email"
            className="border h-[60px] w-[300px] mt-6 p-5 rounded-lg bg-slate-200 "
          />
          <input
            type="text"
            placeholder="Enter your Password"
            className="border h-[60px] w-[300px] mt-6 p-5 rounded-lg bg-slate-200 "
          />
          <input
            type="text"
            placeholder="Card Number"
            className="border h-[60px] w-[300px] mt-6 p-5 rounded-lg bg-slate-200 "
          />
          <input
            type="text"
            placeholder="Enter your Address"
            className="border h-[60px] w-[300px] mt-6 p-5 rounded-lg bg-slate-200 "
          />
        </div>
        <Link href='/Thanks'>
        <div id="btn" className="inline-flex justify-center mt-[22px] h-[60px] rounded-lg ml-[570px] ">
          <button className="px-4 bg-blue-800 text-white rounded-lg w-[160px] border-none">Place Your Order</button>
        </div>
        </Link>
      </div>
    </div>
  );
}
