import axios from "axios";
import {
  Button,
  Checkbox,
  Label,
  Radio,
  Table,
  TextInput,
} from "flowbite-react";
import React, { useEffect, useState } from "react";
import { json } from "react-router-dom";
import ReactSelect from "react-select";

let intialData = {
  name: "",
  email: "",
  password: "",
  number: "",
  gender: "",
  city: "",
  hobbies: "",
};

const options = [
  { value: "movie", label: "Movie" },
  { value: "cricket", label: "Cricket" },
  { value: "cycling", label: "Cycling" },
  { value: "swiming", label: "Swiming" },
];
export default function MultipleCrud() {
  let [task, setTask] = useState(intialData);
  let [taskArr, setTaskArr] = useState([]);
  let [city, setCity] = useState("");
  let [index, setindex] = useState("");
  let [search, setsearch] = useState("");

  useEffect(() => {
    const storedData = JSON.parse(localStorage.getItem("user"));
    setTaskArr(storedData);
    let searchData = storedData?.filter?.(
      (e) =>
        e?.name?.toLowerCase().includes(search.toLowerCase()) 
        // e?.gender?.toLowerCase().includes(search.toLowerCase()) ||
        // e?.city?.toLowerCase().includes(search.toLowerCase())
    );
    setTaskArr(searchData);
  }, [search]);

  const submitHandler = (e) => {
    console.log("🚀 ~ MultipleCrud ~ task:", task);
    e.preventDefault();
    setTaskArr([task, ...taskArr]);
    localStorage.setItem("user", JSON.stringify([task, ...taskArr]));
    setTask(intialData);
  };
  const checkBoxHandler = (clr, e) => {
    let updatedCity = [];
    if (e.target.checked) {
      updatedCity = [...city, clr];
    } else {
      updatedCity = city.filter((item) => item !== clr);
    }
    setCity(updatedCity);
    setTask({ ...task, city: updatedCity });
  };
  //   const checkBoxHandler=(clr,e)=>{
  // if(e.target.checked){
  //   setCity([...city,clr])
  // }
  // else{
  //   let filterData=city.filter((e)=>e !== clr);
  //   setTask(filterData);
  // }
  //   }

  const multiHandler = (e) => {
    let arr = e.map((e) => e.value);
    setTask({ ...task, hobbies: arr });
  };

  const deleteHandler = (index) => {
    let filterData = taskArr.filter((e) => e !== index);
    setTaskArr(filterData);
    localStorage.setItem("user", JSON.stringify(filterData));
  };

  const updateData = (data, index) => {
    console.log("🚀 ~ updateData ~ index:", index);
    console.log("🚀 ~ updateData ~ data:", data);
    setTask(data);
    setindex(index);
  };

  const updateHandler = (e) => {
    taskArr.splice(index, 1, task);
    setTask([...taskArr]);
    localStorage.setItem("user", JSON.stringify([...taskArr]));

    setindex(null);
  };

  return (
    <>
      <div className=" flex flex-col items-center justify-center p-5 ">
        <form className="w-100 flex flex-col gap-4 border border-violet-700 p-5">
          <TextInput
            type="text"
            placeholder="Enter Name"
            id="name"
            value={task.name}
            onChange={(e) => setTask({ ...task, name: e.target.value })}
          />
          <TextInput
            type="email"
            placeholder="Enter Email"
            id="email"
            value={task.email}
            onChange={(e) => setTask({ ...task, email: e.target.value })}
          />
          <TextInput
            type="password"
            placeholder="Enter Password"
            id="password"
            value={task.password}
            onChange={(e) => setTask({ ...task, password: e.target.value })}
          />
          <TextInput
            type="number"
            placeholder="Enter Phone Number"
            id="number"
            value={task.number}
            onChange={(e) => setTask({ ...task, number: e.target.value })}
          />

          <div className="flex  gap-3">
            <span>
              <Radio
                className="me-2"
                name="gender"
                value="male"
                checked={task.gender === "male"}
                onChange={(e) => setTask({ ...task, gender: e.target.value })}
              />
              <Label>Male</Label>
            </span>
            <span>
              <Radio
                className="me-2"
                name="gender"
                value="female"
                checked={task.gender === "female"}
                onChange={(e) => setTask({ ...task, gender: e.target.value })}
              />

              <Label>Female</Label>
            </span>
            <span>
              <Radio
                className="me-2"
                name="gender"
                value="other"
                checked={task.gender === "other"}
                onChange={(e) => setTask({ ...task, gender: e.target.value })}
              />

              <Label>Other</Label>
            </span>
          </div>
          <div className="flex gap-3">
            <span>
              <Checkbox
                id="promotion"
                className="me-2"
                checked={city.includes("surat")}
                onChange={(e) => checkBoxHandler("surat", e)}
              />
              <Label htmlFor="promotion">Surat</Label>
            </span>
            <span>
              <Checkbox
                id="promotion"
                className="me-2"
                checked={city.includes("vapi")}
                onChange={(e) => checkBoxHandler("vapi", e)}
              />
              <Label htmlFor="promotion">Vapi</Label>
            </span>
            <span>
              <Checkbox
                id="promotion"
                className="me-2"
                checked={city.includes("navsari")}
                onChange={(e) => checkBoxHandler("navsari", e)}
              />
              <Label htmlFor="promotion">Navsari</Label>
            </span>
            <span>
              <Checkbox
                id="promotion"
                className="me-2"
                checked={city.includes("bardoli")}
                onChange={(e) => checkBoxHandler("bardoli", e)}
              />
              <Label htmlFor="promotion">Bardoli</Label>
            </span>
          </div>

          <ReactSelect
            isMulti
            className="w-100"
            options={options}
            onChange={(e) => multiHandler(e)}
          />
          <Button onClick={(e) => submitHandler(e)}>SUBMIT</Button>
          <Button onClick={(e) => updateHandler(e)}>UPDATE</Button>
        </form>
      </div>
      <div className="px-5 my-5">
        <TextInput
          type="text"
          className="border-black border m-2 rounded"
          placeholder="Search Data"
          value={search}
          onChange={(e) => setsearch(e.target.value)}
        />
        <Table striped className="bg-purple-300 text-black">
          <thead>
            <tr>
              <th className="px-2"> SR.</th>
              <th>NAME</th>
              <th>EMAIL</th>
              <th>PASSWORD</th>
              <th>GENDER</th>
              <th>CITY</th>
              <th>HOBBIES</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {taskArr.map((e, i) => {
              // console.log("-----------  e----------->", e);
              return (
                <tr key={i}>
                  <th scope="row">{i + 1}</th>
                  <td>{e?.name}</td>
                  <td>{e?.email}</td>
                  <td>{e?.password}</td>
                  <td>{e?.gender}</td>
                  <td>{e?.city?.join?.(" - ")}</td>
                  <td>{e?.hobbies?.join(" - ")}</td>
                  <span className="flex gap-2">
                    <td className="flex gap-2">
                      <Button onClick={() => deleteHandler(e)}>Delete</Button>
                    </td>
                    <td className="flex gap-2">
                      <Button onClick={() => updateData(e, i)}>Update</Button>
                    </td>
                  </span>
                </tr>
              );
            })}
          </tbody>
        </Table>
      </div>
    </>
  );
}

