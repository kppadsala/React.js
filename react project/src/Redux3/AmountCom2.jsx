import React from 'react'
import { useDispatch} from 'react-redux'
import { multipleamount, reset } from './Redux/amountSlice'

export default function AmountCom2() {

const dispatch=useDispatch()
const multiamountHandler=()=>{
    dispatch(multipleamount())
}
  return (
    <div className="border-[1px] border-blue-400 p-4 flex"> 
       
        <button
        className="px-3 py-2 bg-brown-200 mx-3"
        onClick={() => multiamountHandler()}
      >
        Multi Age
      </button>
      
    </div>
  )
}

