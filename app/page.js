"use client";
import React, { useState } from 'react'
import Link from 'next/link';
import  Content  from '../Components/Content';

const page = () => {
 
  return (
    <>
    <nav className='flex text-xl h-[75px] bg-red-500 items-center justify-between '>
      <h2 className='ml-5'>logo</h2>
      <div>
        <div className='flex gap-4 mr-5'>
           <Link href={'/Products'}>products</Link>
           <Link href={'/Services'}>services</Link>
           <Link href={'/products'}>about</Link>
         
        </div>
      </div>
    </nav>
           <Content/>
    </>
  )
}

export default page