import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { incrementByUser, incrementCount } from "./ReduxCom/createslice";
import { Button, Input } from "reactstrap";
import { Plus } from "lucide-react";

export default function MarksCom11() {
  let [input,setinput]=useState("")
  const dispatch = useDispatch();
  const IncrementHandler = () => {
    dispatch(incrementCount());
  };
  const IncrementByUserHandler = () => {
    dispatch(incrementByUser(+input));
    setinput("")
  };
  return (
    <div className="p-3 border-[1px] border-gray-500">
      MarksCom11
      <button
        className="px-3 py-2 bg-purple-100 m-2"
        onClick={() => IncrementHandler()}
      >
        Marks Plus
      </button>
      <div className="flex p-3">

      <Input type="number" value={input} onChange={(e)=>setinput(e?.target?.value)}/>
      <Button color="warning" onClick={()=>IncrementByUserHandler()}>
        <Plus/>
      </Button>
      </div>
    </div>
  );
}
