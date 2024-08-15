import React, { useCallback, useEffect, useRef, useState } from "react";
import { Button, Input } from "reactstrap";

export default function Password() {
  let [length, setLength] = useState(8);
  let [numberAllow, setNumberAllow] = useState(false);
  let [charcterAllow, setCharcterAllow] = useState(false);
  let [password, setPassword] = useState("");

  const passwordref=useRef(null);
  
const CopyPasswordToclipborad=useCallback(()=>{
window.navigator.clipboard.writeText(password)
},[password])

  let PasswordGenerator = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz";
    if (numberAllow) str += "0123456789";
    if (charcterAllow) str += "`!@#$&*?/";
    for (let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length + 1);
      pass += str.charAt(char);
    }
    setPassword(pass);
  }, [length, numberAllow, charcterAllow, setPassword]);

  useEffect(() => {
    PasswordGenerator();
  }, [length, numberAllow, charcterAllow, PasswordGenerator]);

  return (
    <div className="d-flex justify-content-center  align-items-center ">
      <div className="border border-1 px-5 my-5 py-4">
        <h1 className="text-primary text-center ">Password Generator</h1>
        <span className="d-flex justify-content-center ">
          <Input
            type="text"
            value={password}
            className="outline-none rounded-end-0 "
            placeholder="Password"
            readOnly
          />
          <Button className="bg-primary rounded-start-0 border-0" onClick={()=>CopyPasswordToclipborad()}>COPY</Button>
        </span>
        <div className="d-flex justify-content-center mt-3 gap-2 flex-column ">
          {/* ==========Range of Password============= */}
          <span className="d-flex align-items-center  gap-4">
            <Input
              type="range"
              min={6}
              max={12}
              value={length}
              className="cursor-pointer"
              onChange={(e) => {
                setLength(e.target.value);
              }}
            />
            <label>Length:{length}</label>
          </span>

          {/* ==========Number CheckBox============= */}
          <span className="d-flex align-items-center  gap-4">
            <Input
              type="checkbox"
              defaultChecked={numberAllow}
              onChange={() => {
                setNumberAllow((prev) => !prev);
              }}
            />
            <label>Number Allow</label>
          </span>

          {/* ==========Number CheckBox============= */}
          <span className="d-flex align-items-center  gap-4">
            <Input
              type="checkbox"
              defaultChecked={charcterAllow}
              onChange={() => {
                setCharcterAllow((prev) => !prev);
              }}
            />
            <label>Charcter Allow</label>
          </span>
        </div>
      </div>
    </div>
  );
}
