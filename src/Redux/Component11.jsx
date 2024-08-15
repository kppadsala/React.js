import React from 'react'
import { useDispatch } from 'react-redux'
import { incrementCount } from './ReduxCom/conterSlice'

export default function Component11() {
const dispatch=useDispatch()

const incrementHandler=()=>{
  dispatch(incrementCount());
}
  return (
    <div>
        <button className='bg-green-600 text-white px-4 py-2 rounded-lg' 
        onClick={()=>incrementHandler()}
     >Inc+1</button>
    </div>
  )
}
