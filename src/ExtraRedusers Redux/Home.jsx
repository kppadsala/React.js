import React from 'react'
import MarksCom1 from './MarksCom1'
import MarksCom2 from './MarksCom2'
import { useDispatch, useSelector } from 'react-redux'
import { reset } from './ReduxCom/createslice'

export default function Home() {
  const data=useSelector((store)=>{
return store.createslice
  })
  const dispatch=useDispatch()
  const resetHandler=()=>{
    dispatch(reset())
  }
  return (
    <div className='flex justify-center flex-col items-center'>
        <p className='text-2xl'>Count is {data?.marks}</p>
        <button className='px-3 py-2 bg-purple-100 m-2' onClick={()=>resetHandler()}>Reset</button>
        <div className='flex justify-center  gap-4  p-4'>
        <MarksCom1/>
        <MarksCom2/>
        </div>
    </div>
  )
}

