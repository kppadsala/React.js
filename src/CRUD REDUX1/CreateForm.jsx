import { Button, Checkbox, Label, Radio, TextInput } from "flowbite-react";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { createUser } from "./Redux/userdetailsSlice";

export default function CreateForm() {
    const[user,setUser]=useState();
    const dispatch=useDispatch() 
    const addData=(e)=>{
        setUser({...user, [e.target.name]: e.target.value})
        // console.log(" user==>", user)
        
    }
    const handleSubmit=(e)=>{
      e.preventDefault(); 
      console.log("=-=->user",user);
      dispatch(createUser(user))
      
    }
  return (
    <div className=" mt-5   flex justify-center">
      <form className="flex max-w-md flex-col gap-4 border-2 border-gray-600 p-3 w-[30rem]" onSubmit={handleSubmit}>
        <div>
          <div className="mb-2 block">
            <Label value="Your Name" />
          </div>
          <TextInput type="text" name="name" placeholder="Name" required  onChange={addData}/>
        </div>
        <div>
          <div className="mb-2 block">
            <Label value="Your email" />
          </div>
          <TextInput type="email" name="email" placeholder="Email" required onChange={addData}/>
        </div>
        <div>
          <div className="mb-2 block">
            <Label value="Your Age" />
          </div>
          <TextInput type="number" name="age" placeholder="Age" required onChange={addData}/>
        </div>
        <div className="flex items-center gap-2">
          <Radio name="gender" value="male" onChange={addData}/>
          <Label>Male</Label>
          <Radio name="gender" value="female" onChange={addData}/>
          <Label>Female</Label>
          <Radio name="gender" value="other" onChange={addData}/>
          <Label>Other</Label>
        </div>
        <Button type="submit">Submit</Button>
      </form>
    </div>
  );
}
