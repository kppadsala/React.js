import React from "react";
import { useDispatch } from "react-redux";
import { incrementcount } from "./Redux/createSlice";

export default function AgeCom11() {
  const dispatch = useDispatch();
  const incrementageHandler = () => {
    dispatch(incrementcount());
  };
  return (
    <div>
      AgeCom11
      <button
        className="px-3 py-2 bg-brown-200 mx-3"
        onClick={() => incrementageHandler()}
      >
        Inc Age
      </button>
    </div>
  );
}
