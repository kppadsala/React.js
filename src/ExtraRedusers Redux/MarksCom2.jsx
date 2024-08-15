import React from 'react'
import { useDispatch } from 'react-redux'
import { decrementCount } from './ReduxCom/createslice';

export default function Markscom2() {
  const dispatch=useDispatch();
  const decrementHandler=()=>{
dispatch(decrementCount())
  }
  return (
    <div className='p-3 border-[1px] border-gray-500'>Markscom2
    <button className='px-3 py-2 bg-purple-100 m-2'
    onClick={()=>decrementHandler()}>Mark Dec</button></div>
  )
}
