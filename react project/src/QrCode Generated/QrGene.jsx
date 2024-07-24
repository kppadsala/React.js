import { Button, Label, TextInput } from "flowbite-react";
import React, { useState } from "react";
import QRCode from "react-qr-code";

export default function QrGene() {
  let [data, setData] = useState("");
  let [isvisible, setVisible] = useState(false);
  let [bgColor, setBgColor] = useState("");
  let [fgColor, setFgColor] = useState("");

  const HandleSubmit = () => {
    if (!data) {
      return;
    }
    setVisible(true);
   
  };

  const handleBGColor = (e) => {
    setBgColor(e.target.value);
  };

  const handleFGColor = (e) => {
    setFgColor(e.target.value);
  };

  return (
    // <div className="flex justify-center flex-col items-center">
    //   <div className="flex justify-start w-[60%] items-start gap-4 flex-col border border-black p-4 m-4">
    //     <Label>Enter Your URL / Number / Text </Label>
    //     <TextInput
    //       type="url"
    //       className="w-full"
    //       onChange={(e) => setData(e?.target?.value)}
    //     />
    //     <div className="flex justify-start flex-col items-start ">
    //       <span className="flex justify-center gap-4">
    //         <Label>Select Background Color</Label>
    //         <input type="color" value={bgColor} onChange={handleBGColor} />{" "}
    //         <p>{bgColor}</p>
    //       </span>
    //       <span className="flex justify-center gap-4">
    //         <Label>Select BarCode Color</Label>
    //         <input type="color" value={fgColor} onChange={handleFGColor} />{" "}
    //         <p>{fgColor}</p>
    //       </span>
    //     </div>
    //     <Button className="bg-blue-900 w-full " onClick={() => HandleSubmit()}>
    //       Generate QR Code
    //     </Button>
    //   </div>
    //   <div className="border border-black   w-[250px] h-[250px] flex justify-center items-center">
    //     {isvisible ? (
    //       <QRCode value={data} size={200} bgColor={bgColor} fgColor={fgColor} />
    //     ) : (
    //       <div className="flex justify-center flex-col text-gray-400 px-4">
    //         <p>Step 1 : Enter URL / Number / Text </p>
    //         <p>step 2 : Click Generate Button</p>
    //       </div>
    //     )}
    //   </div>
    // </div>
    <div className="flex flex-col items-center p-4 space-y-4">
  <div className="flex flex-col w-full max-w-xl items-start gap-4 border border-black p-4">
    <Label>Enter Your URL / Number / Text</Label>
    <TextInput
      type="url"
      className="w-full"
      onChange={(e) => setData(e?.target?.value)}
    />
    <div className="flex flex-col items-start w-full gap-4">
      <div className="flex items-center gap-4">
        <Label>Select Background Color</Label>
        <input type="color" value={bgColor} onChange={handleBGColor} />
        <p>{bgColor}</p>
      </div>
      <div className="flex items-center gap-4">
        <Label>Select BarCode Color</Label>
        <input type="color" value={fgColor} onChange={handleFGColor} />
        <p>{fgColor}</p>
      </div>
    </div>
    <Button className="bg-blue-900 w-full" onClick={HandleSubmit}>
      Generate QR Code
    </Button>
  </div>
  <div className="border border-black w-64 h-64 flex justify-center items-center">
    {isvisible ? (
      <QRCode value={data} size={200} bgColor={bgColor} fgColor={fgColor} />
    ) : (
      <div className="flex flex-col text-center text-gray-400 px-4">
        <p>Step 1: Enter URL / Number / Text</p>
        <p>Step 2: Click Generate Button</p>
      </div>
    )}
  </div>
    <Button className="bg-blue-900">Download QR Code</Button>
</div>

  );
}
