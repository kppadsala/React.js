// import axios from "axios";
// import { Button, Label, TextInput } from "flowbite-react";
// import React from "react";
// import { Controller, useForm } from "react-hook-form";
// import { toast } from "react-toastify";

// export default function LoginApi() {
//   const { control, handleSubmit, reset } = useForm({
//     defaultValues: {
//       email: "",
//       password: "",
//     },
//   });
//   const loginHandler = (data) => {
//     axios({
//       method: "post",
//       url: "http://localhost:9999/user/signin",
//       data: data,
//     })
//       .then((res) => {
//         console.log("Login Respone", res.data.data);
//         toast.success("Login SuccessFully");
//         localStorage.setItem("user",JSON.stringify(res?.data?.data));
//         reset();
//       })
//       .catch((err) => {
//         console.log("Login Respone", err);
//         toast.success("Somthing Went Wrong");
//       });
//     console.log(" data=>", data);
//   };
//   return (
//     <div className="flex justify-center flex-col items-center">
//       <form
//         onSubmit={handleSubmit(loginHandler)}
//         className="w-75 flex gap-2 justify-center border-2 items-center flex-col border-black p-2"
//       >
//         <Label>Email</Label>
//         <Controller
//           name="email"
//           control={control}
//           render={({ field }) => <TextInput className="w-50" {...field} />}
//         />

//         <Label>Password</Label>
//         <Controller
//           name="password"
//           control={control}
//           render={({ field }) => <TextInput className="w-50" {...field} />}
//         />

//         <Button type="submit">Login</Button>
//       </form>
//     </div>
//   );
// }
import axios from "axios";
import { Button, Label, TextInput } from "flowbite-react";
import React, { useState } from "react";
import { toast } from "react-toastify";

let data={
  email: "",
  password: "",
}
export default function LoginApi() {
  const [formData, setFormData] = useState(data);

  const loginHandler = (e) => {
    e.preventDefault();
    axios({
      method: "post",
      url: "http://localhost:9999/user/signin",
      data: formData,
    })
      .then((res) => {
        console.log("Login Response", res.data.data);
        toast.success("Login Successfully");
        localStorage.setItem("user", JSON.stringify(res?.data?.data));
        setFormData(data);
      })
      .catch((err) => {
        console.log("Login Response", err);
        toast.error("Something Went Wrong");
      });
    console.log("data =>", formData);
  };

  return (
    <div className="flex justify-center flex-col items-center">
      <form
        onSubmit={loginHandler}
        className="w-75 flex gap-2 justify-center border-2 items-center flex-col border-black p-2"
      >
        <Label>Email</Label>
        <TextInput
          className="w-50"
          name="email"
          value={formData.email}
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
        />

        <Label>Password</Label>
        <TextInput
          className="w-50"
          name="password"
          type="password"
          value={formData.password}
          onChange={(e) => setFormData({ ...formData, password: e.target.value })}
        />

        <Button type="submit">Login</Button>
      </form>
    </div>
  );
}
