import React from 'react'
export default function Navbar() {
  return (
    <div>
        <div id='parent' className='bg-blue-950 flex h-[60px]  justify-between '>
            <div id='img' className='text-white ml-2 flex items-center h-15 w-[200px]'>
                <img src={"old_logo_pak-removebg-preview.png"} alt="" />
            </div>
            <div className='text-white flex gap-16 items-center'>
                <p>Used Cars</p>
                <p>New Cars</p>
                <p>Bikes</p>
                <p>Auto Store</p>
                <p>Videos</p>
                <p>Forums</p>
                <p>Blog</p>
                <p>More</p>
            </div>
            <div id='btn-post' className='text-white mr-4 flex items-center bg-red-800 rounded-lg p-3 h-9 mt-3.5' >
                Post An Ad
            </div>
        </div>

    </div>
  );
};
 