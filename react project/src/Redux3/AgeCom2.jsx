import React from "react";
import { useDispatch } from "react-redux";
import { decrementcount } from "./Redux/createSlice";

export default function AgeCom2() {
  const dispatch = useDispatch();
  const decrementageHandler = () => {
    dispatch(decrementcount());
  };
  return (
    <div className="border-[1px] border-blue-400 p-4">
      AgeCom2
      <button
        className="px-3 py-2 bg-brown-200 mx-3"
        onClick={() => decrementageHandler()}
      >
        Dec Age
      </button>
    </div>
  );
}
