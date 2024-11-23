import { Button, Table, TextInput } from "flowbite-react";
import React, { useState } from "react";

let initData={
  name: "",
  email: "",
  password: "",
  number: ""
}

export default function MultipleCrud2() {
  const [task, setTask] = useState(initData);
  const [taskArr, setTaskArr] = useState([]);
  const [index,setindex]=useState()

  const submitHandler = (e) => {
    e.preventDefault();
    console.log("🚀 ~ MultipleCrud2 ~ task:", task);
    setTaskArr([...taskArr, task]);
    setTask(initData)
  };

  const updateData=(data,index) => {
    console.log("🚀 ~ updateData ~ data:", data,)
    console.log("🚀 ~ updateData ~ index:", index,)

  setindex(index);
  setTask(data)
  }

  const updateHandler=()=>{
    taskArr.splice(index,1,task)
    setTask([...taskArr]);
    setTask(initData)

  }

  const deleteHandler = (index) => {
    // console.log("delete Button");
    let filterData = taskArr.filter(( _,i) => i !== index);
    setTaskArr(filterData);
  };
  
  return (
    <>
      <form >
        <div className="w-full flex flex-col gap-2 p-5 bg-blue-gray-200">
          <TextInput
            type="text"
            placeholder="Enter Name"
            value={task.name}
            onChange={(e) => setTask({ ...task, name: e.target.value })}
          />
          <TextInput
            type="text"
            placeholder="Enter Email"
            value={task.email}
            onChange={(e) => setTask({ ...task, email: e.target.value })}
          />
          <TextInput
            type="text"
            placeholder="Enter Password"
            value={task.password}
            onChange={(e) => setTask({ ...task, password: e.target.value })}
          />
          <TextInput
            type="text"
            placeholder="Enter Phone Number"
            value={task.number}
            onChange={(e) => setTask({ ...task, number: e.target.value })}
          />
          <Button onClick={(e) => submitHandler(e)}>Submit</Button>
          <Button onClick={() => updateHandler()}>UPDATE</Button>

        </div>
      </form>
      <div>
        <Table >
          <thead>
            <tr className="flex justify-around gap-3">
              <th className="px-2"> SR.</th>
              <th>NAME</th>
              <th>EMAIL</th>
              <th>PASSWORD</th>
              <th>NUMBER</th>
              <th>ACTION</th>
            </tr>
            {taskArr?.map?.((e, i) => {
              return (
                <tr key={i} className="flex justify-around gap-3">
                  <th scope="row">{i + 1}</th>
                  <td>{e?.name}</td>
                  <td>{e?.email}</td>
                  <td>{e?.password}</td>
                  <td>{e?.number}</td>
                  <span className="flex gap-2">
                    <td className="flex gap-2">
                      <Button onClick={() => deleteHandler(i)}>Delete</Button>
                    </td>
                    <td className="flex gap-2">
                      <Button onClick={() => updateData(e, i)}>Update</Button>
                    </td>
                  </span>
                </tr>
              );
            })}
          </thead>
        </Table>
      </div>
    </>
  );
}
