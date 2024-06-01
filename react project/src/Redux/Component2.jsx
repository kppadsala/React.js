import React from 'react'
import { useDispatch } from 'react-redux'
import { decrementCount } from './ReduxCom/conterSlice';

export default function Component2() {
 const dispatch= useDispatch();
 const decrementHandler=()=>{
dispatch(decrementCount())
 }
  return (
    <div className='w-50 border-2 border-blue-500 p-4'>
      <button className='bg-green-600 text-white px-4 py-2 rounded-lg'
      onClick={()=>decrementHandler()}>Dec-1</button>
      </div>
  )
}
