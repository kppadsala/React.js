
import React from 'react'
import { useDispatch } from 'react-redux'
import { decrementamount } from './Redux/amountSlice'

export default function AmountCom1() {

const dispatch=useDispatch()
const decrementamountHandler=()=>{
    dispatch(decrementamount())
}
  return (
    <div className="border-[1px] border-blue-400 p-4 flex"> 
       
        <button
        className="px-3 py-2 bg-brown-200 mx-3"
        onClick={() => decrementamountHandler()}
      >
        Dec Age
      </button>
      
    </div>
  )
}
