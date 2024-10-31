import React from "react";
import Link from "next/link";

export default function Card() {
  return (
    <div className="bg-[#f2f3f3] h-[800px]">
      <div className="mt-32" id="parent">
        <div>
          <h1 className="text-2xl font-bold ml-[150px]">Featured New Cars</h1>
          <div className="flex gap-12 ml-[150px] mt-8 ">
            <h3>Popular</h3>
            <h3>Uppcoming</h3>
            <h3>Newly Launched</h3>
          </div>

          <div className="flex items-center">
          <Link href='/AboutCorolla'>
            <div className="bg-white h-36 w-[233px] ml-[150px] mt-5">
              <div id="img" className="bg-white w-[233px] h-[175px]">
                <img
                  src={
                    "Corolla-X-Cars-Cropped-Pictures-for-Website-removebg-preview.png"
                  }
                  alt=""
                />
              </div>
              <div className="bg-white h-[100px] w-[233px] flex flex-col justify-center items-center">
                <h1 className="ml-2 text-[#233D78] font-bold">
                  Toyota Corolla
                </h1>
                <h3 className="ml-2 text-[#3EB549]">PKR 59.7 - 75.5 Lacs</h3>
              </div>
            </div>
            </Link>
            <Link href='/AboutAlto'>
            <div className="bg-white h-36 w-[233px] ml-[50px] mt-5">
              <div id="img" className="bg-white w-[233px] h-[175px]">
                <img src={"Suzuki_Alto_-_PNG-removebg-preview.png"} alt="" />
              </div>
              <div className="bg-white h-[100px] w-[233px] flex flex-col justify-center items-center">
                <h1 className="ml-2 text-[#233D78] font-bold">Suzuki Alto</h1>
                <h3 className="ml-2 text-[#3EB549]">PKR 23.3 - 30.5 Lacs</h3>
              </div>
            </div>
            </Link>
            <Link href='/AboutHonda'>
            <div className="bg-white h-36 w-[233px] ml-[50px] mt-5">
              <div id="img" className="bg-white w-[233px] h-[175px]">
                <img src={"Honda_City_Front-removebg-preview.png"} alt="" />
              </div>
              <div className="bg-white h-[100px] w-[233px] flex flex-col justify-center items-center">
                <h1 className="ml-2 text-[#233D78] font-bold">Honda City</h1>
                <h3 className="ml-2 text-[#3EB549]">PKR 46.5 - 58.5 Lacs</h3>
              </div>
            </div>
            </Link>
            <Link href='/AboutCivic'>
            <div className="bg-white h-36 w-[233px] ml-[50px] mt-5">
              <div id="img" className="bg-white w-[233px] h-[175px]">
                <img src={"civic-removebg-preview.png"} alt="" />
              </div>
              <div className="bg-white h-[100px] w-[233px] flex flex-col justify-center items-center">
                <h1 className="ml-2 text-[#233D78] font-bold">Honda Civic</h1>
                <h3 className="ml-2 text-[#3EB549]">PKR 86.6 - 99  Lacs</h3>
              </div>
            </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
