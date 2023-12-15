"use client"
import React, { useState } from 'react'
import axios from 'axios'

const Content = () => {
  const [picarr,setpicarr]=useState(null);
  const pics = async ()=>{
    try{
      const res= await axios.get('https://picsum.photos/v2/list');
      const data=  await res.data;
      console.log(data);
      setpicarr(data);
    }
    catch{
      console.error("nooooo picss");
    }
  }
  return (
    <>
    <h2>random image generator</h2>
    <button onClick={pics}  className='bg-red-700 mt-4' >generate</button>
    <div className='flex gap-4 flex-wrap'>
      {(picarr)?
    picarr.map((i)=>{
      return <div>
        <img className='' width="200px" src={i.download_url} alt='yo' />
      </div>
    })    
    :null}
    </div>
    </>
    
  )
}

export default Content