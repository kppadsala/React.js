import React from 'react'
import { useDispatch } from 'react-redux';
import { incrementAmount } from './ReduxCom/amountSlice';

export default function AmountCom11() {
  const dispatch =  useDispatch()
const IncrementHandler=()=>{
  dispatch(incrementAmount());
}
  return (
    <div>AmountCom11
         <button className='px-3 bg-brown-200 py-2 m-3' 
         onClick={()=>IncrementHandler()}>Amount Inc</button>
         </div>
  )
}
