import axios from "axios";
import { Button, TextInput } from "flowbite-react";
import React, { useState } from "react";
import { Controller, useForm } from "react-hook-form";
import { toast } from "react-toastify";

export default function RegisterApi() {
  const { control, handleSubmit } = useForm({
    defaultValues: {
      name: "",
      email: "",
      password: "",
      conformpassword: "",
      contact: "",
    },
  });

  const registerHandler = (data) => {
    axios({
      method: "post",
      url: "http://localhost:9999/user/signup",
      data: data,
    })
      .then((res) => {
        console.log("=-=- Response Data", res.data.data);
        console.log("=-=- Response Status", res.status);
        toast.success("Register SuccessFully");
        localStorage.setItem("user", JSON.stringify(res?.data?.data));
      })
      .catch((error) => {
        console.log("=-=-Error", error);
        toast.error("Somthing Went Wrong");
      });
    console.log("=====>", data);
  };

  return (
    <div className="flex justify-center items-center w-full mt-5 ">
      <form
        className="w-full flex justify-center flex-col items-center "
        onSubmit={handleSubmit(registerHandler)}
      >
        <div className="w-full flex justify-center flex-col gap-2  ">
          <label>Name</label>
          <Controller
            name="name"
            control={control}
            render={({ field }) => (
              <TextInput
                type="text"
                placeholder="Enter Your Name "
                className="w-50"
                {...field}
              />
            )}
          />

          <label>Email</label>
          <Controller
            name="email"
            control={control}
            render={({ field }) => (
              <TextInput
                type="email"
                placeholder="Enter Your Email "
                className="w-50"
                {...field}
              />
            )}
          />

          <label>Password</label>
          <Controller
            name="password"
            control={control}
            render={({ field }) => (
              <TextInput
                type="password"
                placeholder="Enter Your password "
                className="w-50"
                {...field}
              />
            )}
          />

          <label>Confrom Passwprd</label>
          <Controller
            name="conformpassword"
            control={control}
            render={({ field }) => (
              <TextInput
                type="text"
                placeholder="Enter Your conform password "
                className="w-50"
                {...field}
              />
            )}
          />

          <label>Contact</label>
          <Controller
            name="contact"
            control={control}
            render={({ field }) => (
              <TextInput
                type="number"
                placeholder="Enter Your Number "
                className="w-50"
                {...field}
              />
            )}
          />

          <Button type="submit" className="w-50 mt-4">
            Submit
          </Button>
        </div>
      </form>
    </div>
  );
}
