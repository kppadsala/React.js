import axios from "axios";
import { Button, Checkbox, Radio, TextInput } from "flowbite-react";
import React, { useState } from "react";
import { toast } from "react-toastify";

let initialData = {
  name: "",
  email: "",
  password: "",
  cpassword: "",
  number: "",
  gender: "",
  city: [],
};

export default function RegisterApiSimple() {
  let [regData, setRegData] = useState(initialData);
  let [checkValue, setCheckValue] = useState([]);

  console.log("🚀 ~ RegisterApiSimple ~ checkValue:", checkValue);
  console.log("🚀 ~ RegisterApiSimple ~ regData:", regData);

  const handleCheckBox = (e) => {
    const flag = e.target.checked;
    const value = e.target.value;
    console.log("🚀 ~ handleCheckBox ~ value:", value);
    if (flag) {
      setCheckValue([...checkValue, value]);
    } else {
      setCheckValue(checkValue.filter((e) => e !== value));
    }
  };

  const registerHandler = () => {
    setRegData({ ...regData, city: checkValue });
    axios({
      method: "post",
      url: "http://localhost:9999/user/signup",
      data: { ...regData, city: checkValue },
    })
      .then((res) => {
        toast.success("Register Successfully");
        console.log("🚀 ~ registerHandler ~ res:", res.data.data);
      })
      .catch((err) => {
        toast.error("Register Not Successfully");
        console.log("🚀 ~ registerHandler ~ err:", err);
      });
  };

  return (
    <div>
      <form className="flex justify-center flex-col items-center">
        <div className="flex justify-center flex-col items-center gap-4 mt-5 w-full ">
          <TextInput
            className="w-50"
            type="text"
            placeholder="Enter Your Name"
            required
            value={regData.name}
            onChange={(e) => setRegData({ ...regData, name: e.target.value })}
          />
          <TextInput
            className="w-50"
            type="email"
            placeholder="Enter Your Email"
            required
            value={regData.email}
            onChange={(e) => setRegData({ ...regData, email: e.target.value })}
          />
          <TextInput
            className="w-50"
            type="password"
            placeholder="Enter Your Password"
            required
            value={regData.password}
            onChange={(e) =>
              setRegData({ ...regData, password: e.target.value })
            }
          />
          <TextInput
            className="w-50"
            type="password"
            placeholder="Enter Your Confirm Password"
            required
            value={regData.cpassword}
            onChange={(e) =>
              setRegData({ ...regData, cpassword: e.target.value })
            }
          />
          <TextInput
            className="w-50"
            type="number"
            placeholder="Enter Your Phone Number"
            required
            value={regData.number}
            onChange={(e) => setRegData({ ...regData, number: e.target.value })}
          />
          <div className="flex justify-center items-center gap-3">
            <span className="flex justify-center items-center gap-1">
              <Radio
                name="gender"
                value="male"
                checked={regData.gender === "male"}
                onChange={(e) =>
                  setRegData({ ...regData, gender: e.target.value })
                }
              />
              <label>MALE</label>
            </span>
            <span className="flex justify-center items-center gap-1">
              <Radio
                name="gender"
                value="female"
                checked={regData.gender === "female"}
                onChange={(e) =>
                  setRegData({ ...regData, gender: e.target.value })
                }
              />
              <label>FEMALE</label>
            </span>
            <span className="flex justify-center items-center gap-1">
              <Radio
                name="gender"
                value="other"
                checked={regData.gender === "other"}
                onChange={(e) =>
                  setRegData({ ...regData, gender: e.target.value })
                }
              />
              <label>OTHER</label>
            </span>
          </div>
          <div className="flex justify-center items-center gap-3">
            <span className="flex justify-center items-center gap-1">
              <Checkbox name="city" value="surat" onChange={handleCheckBox} />
              <label>surat</label>
            </span>
            <span className="flex justify-center items-center gap-1">
              <Checkbox name="city" value="vapi" onChange={handleCheckBox} />
              <label>vapi</label>
            </span>
            <span className="flex justify-center items-center gap-1">
              <Checkbox name="city" value="navsari" onChange={handleCheckBox} />
              <label>navsari</label>
            </span>
            <span className="flex justify-center items-center gap-1">
              <Checkbox name="city" value="tapi" onChange={handleCheckBox} />
              <label>tapi</label>
            </span>
          </div>
          <Button className="w-50" onClick={registerHandler}>
            Register
          </Button>
        </div>
      </form>
    </div>
  );
}
  