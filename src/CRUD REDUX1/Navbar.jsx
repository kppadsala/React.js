import { Button, TextInput } from "flowbite-react";
import React from "react";

export default function Navbar() {
  return (
    <div>
      <div className="w-full bg-gray-600 p-3 flex justify-around gap-3 items-center ">
        <div className="flex justify-around gap-4 text-white">
          <p>HOME</p>
          <p>ABOUT</p>
          <p>CONTACT</p>
          <p>CAREER</p>
        </div>
        <span>
        <TextInput placeholder="Search Your Data" className="full w-[20rem]" />
        </span>
        <span className="flex justify-center gap-4">
        <Button  className="full border-black" >Login</Button>
        <Button  className="full border-black" >Sign Up</Button>

        </span>
      </div>
    </div>
  );
}
