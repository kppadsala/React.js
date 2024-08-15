import React from 'react'
import AmountCom1 from './AmountCom1'
import AmountCom2 from './AmountCom2'
import { useSelector } from 'react-redux'

export default function Home() {
const data =  useSelector((store)=>{
  return store.amountSlice
})
console.log("🚀 ~ file: Home.jsx:8 ~ data ~ data:", data)
  return (
    <div className='flex justify-center  flex-col py-4  items-center bg-gray-100'>
        <p className='text-2xl'>Count Is  {data?.amount}</p>
        <div className='flex px-5  py-3 gap-5 '>
        <AmountCom1/>
        <AmountCom2/>
        </div>
    </div>
  )
}

