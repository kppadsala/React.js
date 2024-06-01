import React from "react";
import { Button, Input, Radio } from "@material-tailwind/react";
import { EyeOff } from "lucide-react";
import { Controller, useForm } from "react-hook-form";
import ReactSelect from "react-select";
import { render } from "react-dom";

export default function UserForm() {
  const { control, handleSubmit, reset, setValue } = useForm({
    defaultValues: {
      name: "",
      email: "",
      password: "",
      hobby: "",
      gender: "",
    },
  });
  const inputHandler = (data) => {
    console.log("==>data:", data);
    reset();
  };
  return (
    <div className="flex justify-center items-center ">
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
            <Controller
              name="userType"
              control={control}
              render={({ field }) => <ReactSelect {...field} />}
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
          </div>
        </form>
      </div>
    </div>
  );
}
