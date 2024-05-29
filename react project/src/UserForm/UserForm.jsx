import { Input } from "@material-tailwind/react";
import React from "react";

export default function UserForm() {
  return (
    <div className="flex justify-center items-center ">
      <div className="border-[2px] border-black px-5 py-3 w-[50%]">
        <form>
        <Input label="Username" />
        </form>
      </div>
    </div>
  );
}
