import React, { useEffect, useState } from "react";
import { Button, Input } from "@material-tailwind/react";
import { EyeOff } from "lucide-react";
import { Controller, useForm } from "react-hook-form";
import ReactSelect from "react-select";
import { render } from "react-dom";
import { Table } from "reactstrap";

export default function UserForm() {
  const [users, setUsers] = useState({
    name: "",
    email: "",
    password: "",
    hobby: "",
    // gender: "",
    usertype: "",
    phonenumber: "",
    dob: "",
  });
  const { control, handleSubmit, reset, setValue } = useForm({
    defaultValues: users,
  });
  const [usersArr, setUserArr] = useState([]);
  const [index, setIndex] = useState(null);
  users;
  useEffect(() => {
    const storedUsers = JSON.parse(localStorage.getItem("users")) || [];
    setUserArr(storedUsers);
  }, []);

  const inputHandler = (data) => {
        setUserArr([...usersArr, data]);
        setUsers("");
        localStorage.setItem("userData", JSON.stringify(data));
        console.log("==>data:", data);
        reset();
  };

  const handleDelete = (index) => {
    let filterData = usersArr.filter((e, i) => i !== index);
    setUserArr(filterData);
    localStorage.setItem("users", JSON.stringify(filterData));
  };

  const updateHandle = (data, index) => {
    setUsers(data);
    reset(data);
    setIndex(index);
    console.log("🚀 ~ file: UserForm.jsx:39 ~ updateHandle ~ data:", data);
  };

  const upData = () => {};

  return (
    <div className="flex justify-center items-center flex-col  gap-4">
      <div className="border-[2px] border-black px-5 py-3 w-[50%] ">
        <form onSubmit={handleSubmit(inputHandler)}>
          <div className="flex  flex-col  gap-3">
            <label>Name</label>
            <Controller
              name="name"
              control={control}
              render={({ field }) => <Input label="Username" {...field} />}
            />

            <label>Email</label>
            <Controller
              name="email"
              control={control}
              render={({ field }) => <Input label="Email" {...field} />}
            />

            <label>Password</label>
            <Controller
              name="password"
              control={control}
              render={({ field }) => (
                <Input
                  label="Password"
                  type="password"
                  {...field}
                  icon={<EyeOff />}
                />
              )}
            />

            <label>Hobby</label>
            <Controller
              name="hobby"
              control={control}
              render={({ field }) => (
                <ReactSelect
                  className="w-full"
                  isMulti
                  {...field}
                  onChange={(selectedOptions) => {
                    const selectedValues = selectedOptions.map?.(
                      (option) => option.value
                    );
                    field.onChange(selectedValues);
                  }}
                  value={field?.value?.map?.((val) => ({
                    value: val,
                    label: val,
                  }))}
                  options={[
                    { value: "cycling", label: "cycling" },
                    { value: "traveling", label: "traveling" },
                    { value: "reading", label: "reading" },
                  ]}
                />
              )}
            />

            <label>User Type</label>
            <Controller
              name="usertype"
              control={control}
              render={({ field }) => (
                <ReactSelect
                  {...field}
                  onChange={(selectedOptions) => {
                    setValue("usertype", selectedOptions.value);
                  }}
                  value={field?.value?.map?.((val) => ({
                    value: val,
                    label: val,
                  }))}
                  options={[
                    { value: "admin", label: "Admin" },
                    { value: "user", label: "User" },
                  ]}
                />
              )}
            />

            <label>Phone Number</label>
            <Controller
              name="phonenumber"
              control={control}
              render={({ field }) => (
                <Input label="Phone Number" max={10} {...field} />
              )}
            />
            <label>Date Of Birth</label>
            <Controller
              name="dob"
              control={control}
              render={({ field }) => (
                <Input type="date" label="DOB" {...field} />
              )}
            />

            {/* <div className="flex flex-col justify-start items-start w-full">
              <label>Gender</label>
              <span>
                <Radio 
                  id="male"
                  value="male"
                  name="gender"
                  label="Male"
                  onChange={() => setValue("gender", "male")}
                />
                <Radio 
                  id="female"
                  value="female"
                  name="gender"
                  label="Female"
                  onChange={() => setValue("gender", "female")}
                />
                <Radio 
                  id="kids"
                  value="kids"
                  name="gender"
                  label="Kids"
                  onChange={() => setValue("gender", "kids")}
                />
                
              </span>
            </div> */}

            <Button type="submit">Add Product</Button>
            <Button onClick={() => upData()}>Update Product</Button>
          </div>
        </form>
      </div>
      <h3>Users List</h3>
      <div className="mx-5">
        <Table bordered>
          <thead>
            <tr>
              <th>Sr.No</th>
              <th> Name</th>
              <th> Email</th>
              <th> Password</th>
              <th> Hobby</th>
              <th> UserType</th>
              <th> PhoneNumber</th>
              <th> DOB</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {usersArr?.map?.((e, i) => (
              <tr key={i}>
                <td>{i + 1}</td>
                <td>{e.name}</td>
                <td>{e.email}</td>
                <td>{e.password}</td>
                <td className="grid ">{e.hobby}</td>
                <td>{e.usertype}</td>
                <td>{e.phonenumber}</td>
                <td>{e.dob}</td>

                <td className="flex gap-4">
                  <Button
                    variant="contained"
                    color="secondary"
                    onClick={() => handleDelete(i)}
                  >
                    Delete
                  </Button>
                  <Button
                    variant="contained"
                    color="primary"
                    onClick={() => updateHandle(e, i)}
                  >
                    Update
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
    </div>
  );
}
