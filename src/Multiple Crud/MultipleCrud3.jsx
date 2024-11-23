import { tr } from "date-fns/locale";
import { Button, Table, TextInput } from "flowbite-react";
import React, { useState } from "react";

let initData = {
  name: "",
  email: "",
  number: "",
};
export default function MultipleCrud3() {
  const [task, setTask] = useState(initData);
  const [taskArr, setTaskArr] = useState([]);
  const [index, setindex] = useState();

  const submitHandler = (e) => {
    console.log("🚀 ~ MultipleCrud3 ~ task:", task);
    e.preventDefault();
    setTaskArr([...taskArr, task]);
    setTask(initData);
  };

  const deleteHandler = (index) => {
    console.log("🚀 ~ deleteHandler ~ index:", index);

    let filterData = taskArr.filter((_, e) => e !== index);
    setTaskArr(filterData);
  };

  const updateData = (data, index) => {
    setindex(index);
    setTask(data);
  };

  const updateHandler=()=>{
    taskArr.splice(index,1,task)
    setTask([...taskArr]);
    setTask(initData)
  }

  return (
    <div className="flex justify-center items-center w-full flex-col gap-4">
      <form
        action=""
        className="w-75 border-2 border-black p-5 flex flex-col gap-3"
      >
        <TextInput
          type="text"
          placeholder="ENTER YOUR NAME"
          value={task.name}
          onChange={(e) => setTask({ ...task, name: e.target.value })}
        />
        <TextInput
          type="email"
          placeholder="ENTER YOUR EMAIL"
          value={task.email}
          onChange={(e) => setTask({ ...task, email: e.target.value })}
        />
        <TextInput
          type="number"
          placeholder="ENTER YOUR NUMBER"
          value={task.number}
          onChange={(e) => setTask({ ...task, number: e.target.value })}
        />
        <Button
          className="bg-purple-700 w-full "
          onClick={(e) => submitHandler(e)}
        >
          SUBMIT
        </Button>
        <Button
          className="bg-purple-700 w-full "
          onClick={() => updateHandler()}
        >
          UPDATE
        </Button>
      </form>
      <div className="w-75">
        <Table>
          <Table.Head>
            <tr className="flex justify-around gap-3 w-75">
              <th>SR.NO</th>
              <th>NAME</th>
              <th>EMAIL</th>
              <th>NUMBER</th>
              <th>ACTIONS</th>
            </tr>
            {taskArr.map((e, i) => {
              return (
                <tr key={i} className="flex justify-around gap-3">
                  <th>{i + 1}</th>
                  <th>{e.name}</th>
                  <th>{e.email}</th>
                  <th>{e.number}</th>
                  <th className="flex justify-center gap-3">
                    <Button
                      className="bg-purple-700 w-full "
                      onClick={() => updateData(e)}
                    >
                      UPDATE
                    </Button>
                    <Button
                      className="bg-purple-700 w-full "
                      onClick={() => deleteHandler(i)}
                    >
                      DELETE
                    </Button>
                  </th>
                </tr>
              );
            })}
          </Table.Head>
        </Table>
      </div>
    </div>
  );
}
