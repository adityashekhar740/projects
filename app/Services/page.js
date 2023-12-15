import React from 'react'
import Link from 'next/link'

const page = () => {
  return (
    <>
     <>
    <nav className='flex text-xl h-[75px] bg-red-500 items-center justify-between '>
      <Link href={'/'} className='ml-5'>logo</Link>
      <div>
        <div className='flex gap-4 mr-5'>
           <Link href={'/Products'}>products</Link>
           <Link href={'/Services'}>services</Link>
           <Link href={'/products'}>about</Link>
         
        </div>
      </div>
    </nav>
    </>
    </>
    )
}

export default page