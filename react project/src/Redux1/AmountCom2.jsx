import React from 'react'
import { useDispatch } from 'react-redux';
import { decrementAmount } from './ReduxCom/amountSlice';

export default function AmountCom2() {
  const dispatch =  useDispatch()
  const DecrementHandler=()=>{
    dispatch(decrementAmount());
  }
  return (
    <div  className='border-[1px] border-gray-500  p-4 '>AmountCom2
    <button className='px-3 bg-brown-200 py-2 m-3'
    onClick={()=>DecrementHandler()}>Amount Dec</button></div>
  )
}
