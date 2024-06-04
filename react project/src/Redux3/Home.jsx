import React, { useState } from "react";
import AgeCom2 from "./AgeCom2";
import AgeCom1 from "./AgeCom1";
import { useDispatch, useSelector } from "react-redux";
import { multiplecount, reset } from "./Redux/createSlice";
import { userInput } from "./Redux/createSlice";
import { Button, Input } from "reactstrap";
import { Plus } from "lucide-react";

export default function Home() {
  let [input, setinput] = useState("");
  const data = useSelector((store) => {
    return store.createSlice;
  });
  const dispatch = useDispatch();
  const resetHandler = () => {
    dispatch(reset());
  };
  const ageMultiHandler = () => {
    dispatch(multiplecount());
  };
  const userHandler = () => {
    dispatch(userInput(input));
    setinput("")
  };
  return (
    <div className="flex justify-center items-center flex-col">
      <p>Age is {data.age}</p>
      <div className="m-3 flex justify-center">
        <button
          className="px-3 py-2 bg-brown-200 mx-3"
          onClick={() => resetHandler()}
        >
          Reset
        </button>
        <button
          className="px-3 py-2 bg-brown-200 mx-3"
          onClick={() => ageMultiHandler()}
        >
          Multi * 15
        </button>
      </div>

      <div className="flex justify-center gap-5 border-[1px] border-gray-500 p-4">
        <AgeCom1 />
        <AgeCom2 />
      </div>
      <div className="flex p-3">
        <Input
          type="number"
          value={input}
          onChange={(e) => setinput(e?.target?.value)}
        />
        <Button color="warning" onClick={() => userHandler()}>
          <Plus />
        </Button>
      </div>
    </div>
  );
}
