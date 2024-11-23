import { Button, TextInput } from "flowbite-react";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTask, deleteTask, updateTask } from "./Redux/userdetails";
import TableCom from "./TableCom";

export default function Component1() {
  let [task, setTask] = useState("");
  let [index, setIndex] = useState("");
  let [updateMode, setUpdateMode] = useState(false);

  let dispatch = useDispatch();

  let data = useSelector((store) => {
    return store.CountSlice;
  });
  console.log("=====>data===>", data.count);

  const AddData = () => {
    dispatch(addTask(task));
    setTask("");
  };

  const DeleteData = (index) => {
    dispatch(deleteTask(index));
  };

  const updateHandler = (e, i) => {
    console.log("🚀 ~ updateHandler ~ e:", i);
    setTask(e);
    setUpdateMode(true);
    setIndex(i);
  };

  const updateData = () => {
    let data = { index, newData: task };
    dispatch(updateTask(data));
    setTask("");
    setUpdateMode(false);
  };

  const EnterHandler = (e) => {
    if (e.key === "Enter") {
      {
        updateMode ? updateData() : AddData();
      }
    }
  };
  return (
    <>
      <div className="flex gap-3 ">
        <TextInput
          placeholder="Enter Data"
          value={task}
          onChange={(e) => setTask(e.target.value)}
          onKeyPress={EnterHandler}
        />
        {updateMode ? (
          <Button onClick={() => updateData()}>Update</Button>
        ) : (
          <Button onClick={() => AddData()}>Add</Button>
        )}
      </div>
      <div>
        <TableCom
          updateHandler={updateHandler}
          DeleteData={DeleteData}
          data={data}
        />
      </div>
    </>
  );
}
