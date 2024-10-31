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
      <div className="ml-[200px] mr-[100px] mt-[40px] flex justify-center items-center flex-col">
        <h1>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis assumenda iure eos similique, perspiciatis dolore, obcaecati accusamus
        </h1>
        <h1>
        harum, earum nisi quos. Officia dolor architecto dolore rem ipsum ipsa nihil eaque.
        </h1>
      </div>
      <div>
        <h1 className="text-[20px] text-green-600 flex justify-center items-center mt-3">
            PKR 86,00,000
        </h1>
      </div>
      <Link href='/CheckOut'>
        <div className=" flex justify-between items-center">
            <button className="bg-blue-800 text-white p-3 rounded-lg border-none text-[16px] ml-[580px] mt-2" >Make Payment</button>
        </div>
      </Link>
    </div>
  );
}
