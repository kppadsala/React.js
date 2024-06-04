import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Amountcom from "./AmountCom";
import AmountCom1 from "./AmountCom1";
import AmountCom2 from "./AmountCom2";
import { reset } from "./Redux/amountSlice";


export default function AmountDisplay() {
  // let [input,setinput]=useState("")
  const data = useSelector((store) => {
    return store.amountSlice;
  });
  const dispatch = useDispatch();

  const resetHandler = () => {
    dispatch(reset());
  };



  return <div className="flex justify-center flex-col items-center  border-purple-600 border-[3px] m-4 p-4">
     <p>Amount is {data?.amount}</p>
     <button
        className="px-3 py-2 bg-brown-200 mx-3 my-2"
        onClick={() => resetHandler()}
      >
        Reset
      </button>
      
     <div className="flex justify-center gap-3">
     <Amountcom/>
<AmountCom1/>
<AmountCom2/>
     </div>
    
  </div>;
}
