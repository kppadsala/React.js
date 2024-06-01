import React from 'react'
import { useDispatch} from 'react-redux'
import { incrementamount } from './Redux/amountSlice'

export default function Amountcom() {

const dispatch=useDispatch()
const incrementamountHandler=()=>{
    dispatch(incrementamount())
}
  return (
    <div className="border-[1px] border-blue-400 p-4 flex"> 
       
        <button
        className="px-3 py-2 bg-brown-200 mx-3"
        onClick={() => incrementamountHandler()}
      >
        Inc Age
      </button>
      
    </div>
  )
}
