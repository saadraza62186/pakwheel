import React from 'react';

export default function Heros() {
  return (
    <div className="p-4">
      <div className="text-center font-bold text-[24px] md:text-[30px] md:mt-[50px]">
        <h1>Sell Your Car on PakWheels and Get the Best Price</h1>
      </div>
      <div className="flex flex-col md:flex-row mt-5">
        <div className="md:w-1/2 p-4">
          <h1 className="text-blue-800 font-bold text-xl text-center md:ml-[100px] md:mr-[210px]">
            Post your Ad on PakWheels
          </h1>
          <p className="mt-4 md:ml-[110px]">Post your Ad for free in 3 Easy Steps</p>
          <p className='md:ml-[110px]'>Get Genuine offers from Verified Buyers</p>
          <p className='md:ml-[110px]'>Sell your car Fast at the Best Price</p>
          <button className="mt-6 bg-red-800 md:ml-[150px] px-6 py-2 rounded-lg text-white ml-[50px]">
            Post Your Ad
          </button>
        </div>
        <div className="md:w-1/2 p-4">
          <h1 className="text-blue-800 text-center font-bold text-xl md:mr-[200px]">
            Post your Ad on PakWheels
          </h1>
          <p className="mt-4 md:ml-[70px]">Post your Ad for free in 3 Easy Steps</p>
          <p className='md:ml-[70px]'>Get Genuine offers from Verified Buyers</p>
          <p className='md:ml-[70px]'>Sell your car Fast at the Best Price</p>
          <button className="mt-6 bg-blue-500 px-6 py-2 rounded-lg text-white ml-[50px] md:ml-[100px]">
            Post Your Ad
          </button>
        </div>
      </div>
    </div>
  );
}
