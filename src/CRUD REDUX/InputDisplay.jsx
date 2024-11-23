import { Plus } from "lucide-react";
import React, { useState } from "react";
import { Button, Input } from "reactstrap";
import TableCom from "./TableCom";
import { useDispatch, useSelector } from "react-redux";
import { addTask, deleteTask, updateTask } from "./Redux/createSlice";

export default function InputDisplay() {
  let [task, setTask] = useState("");
  let [index, setIndex] = useState(null);
  let [updateMode, setUpdateMode] = useState(false);

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
  let data = useSelector((store) => {
    return store.crudSlice;
  });
  console.log("🚀 ~ file: TableCom.jsx:7 ~ data ~ data:", data);

  const deleteHandler = (index) => {
    dispatch(deleteTask(index));
  };

  const updateHandler = (e,i) => {
    setTask(e);
    setUpdateMode(true);
    setIndex(i);
  };
  
  const updateData = () => {
    let data={index:index , newData:task};
    dispatch(updateTask(data));

  };
  return (
    <div className="flex justify-center w-full flex-col items-center">
      <div className="flex justify-center p-3 w-full">
        <Input
          className="w-50 border-[1px] border-black"
          value={task}
          onChange={(e) => setTask(e?.target?.value)}
          onKeyPress={handleEnter}
        />
        {updateMode ? (
          <Button onClick={() => updateData()}>Update</Button>
        ) : (
          <Button onClick={() => addData()}><Plus /></Button>
        )}
      </div>
      <TableCom
        deleteHandler={deleteHandler}
        data={data}
        updateHandler={updateHandler}
      />
    </div>
  );
}
