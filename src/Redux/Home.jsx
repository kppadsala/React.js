import React from 'react'
import Component1 from './Component1'
import Component2 from './Component2'
import { useSelector } from 'react-redux'

export default function Home() {
  let data =  useSelector((store) => {
    return store.counterSlice
  })
  return (
      <div className='flex flex-col items-center     border-2 border-black p-10 m-10'>
       <h1 className="text-2xl">Counter is {data.count}</h1>
       <div className='flex w-full gap-4 m-3'>
        <Component1/>
        <Component2/> 
       </div>
    </div>
  )
}

