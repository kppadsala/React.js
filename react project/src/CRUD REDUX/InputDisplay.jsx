import { Plus } from "lucide-react";
import React, { useState } from "react";
import { Button, Input } from "reactstrap";
import TableCom from "./TableCom";
import { useDispatch, useSelector } from "react-redux";
import { addTask, deleteTask } from "./Redux/createSlice";

export default function InputDisplay() {
  let [task, setTask] = useState("");

  const dispatch = useDispatch();

  const addData = () => {
    dispatch(addTask(task));
    setTask("");
  };
  const handleEnter = (e) => {
    if (e.key === "Enter") {
      addData();
    }
  };
  let data= useSelector((store)=>{
    return store.crudSlice
})
console.log("🚀 ~ file: TableCom.jsx:7 ~ data ~ data:", data);

 const deleteHandler=(index) => {
       console.log("🚀 ~ file: InputDisplay.jsx:28 ~ deleteHandler ~ index:", index)
       let filterData=data.task.filter((e,i)=> i !== index)
       console.log("🚀 ~ file: InputDisplay.jsx:30 ~ deleteHandler ~ filterData:", filterData)
       dispatch(deleteTask(filterData))
    }
  return (
    <div className="flex justify-center w-full flex-col items-center">
      <div className="flex justify-center p-3 w-full">
        <Input
          className="w-50 border-[1px] border-black"
          value={task}
          onChange={(e) => setTask(e?.target?.value)}
          onKeyPress={handleEnter}
        />
        <Button onClick={() => addData()} >
          <Plus />
        </Button>
      </div>
      <TableCom deleteHandler={deleteHandler} data={data}/>
    </div>
  );
}
