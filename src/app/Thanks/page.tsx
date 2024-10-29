import React from 'react'
import './page.css'
import Link from 'next/link'

export default function page() {
  return (
    <div>
        <div className='flex justify-center items-center flex-col mt-[150px]'>
            <h1 className='text-6xl italic text-blue-500' id='h1'>Thank you for shopping !!!</h1>
            <h2 className='mt-6 text-xl'>Your Order will be delivered in 3 Business days</h2>
            <Link href='/'>
            <button className='px-4 bg-blue-800 text-white mt-6 h-[50px] rounded-lg border-none'>Back to Home</button>
            </Link>
        </div>
    </div>
  )
}
