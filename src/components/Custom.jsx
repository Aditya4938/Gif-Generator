import React, { useState } from 'react'
import Spinner from './Spinner';
import Gif from '../hooks/Gif';
const Custom = () => {
  
  const [value,setValue]=useState('Car');
  const {gif,loading,getData}=Gif(value);
  
  
  return (
    <div className='bg-blue-500 justify-around items-center w-1/2 mx-auto text-center p-6 min-w-[670px] mt-8 border-white border-solid border-[1px] rounded-lg flex flex-col'>
      <div className='text-[20px] underline font-bold mb-4'>Random {value} Gif</div>
      {
        loading ? <Spinner/>:(<img src={gif} alt=""  className='w-[384px] mb-8'/>)
      }
      <input type="text" name="" id="" onChange={(event)=>{setValue(event.target.value)}} value={value} className='w-[60%] rounded-md p-1 mb-4 text-center'/>
      <button onClick={()=>{getData()}} className='bg-white w-[70%] opacity-70 hover:opacity-100 transition-all p-2 rounded-lg' >GENERATE</button>
    </div> 
    
  )
}

export default Custom


