import React from 'react'
import { useDispatch } from 'react-redux';
import { incrementCount } from './ReduxCom/createslice';

export default function MarksCom11() {
  const dispatch =  useDispatch()
  const IncrementHandler=()=>{
    dispatch(incrementCount());
  }
  return (
    <div className='p-3 border-[1px] border-gray-500'>MarksCom11
    <button className='px-3 py-2 bg-purple-100 m-2' onClick={()=>IncrementHandler()}>Marks Plus</button></div>
  )
}
