import React, { useState } from "react";
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  Form,
  Input,
  Label,
  FormGroup,
} from "reactstrap";
import axios from "axios";
import { BiHide, BiShowAlt } from "react-icons/bi";

export default function RegisterModal({ modal, toggle, loginToggle }) {
  let userInfo = {
    name: "",
    email: "",
    password: "",
    Confrompassword: "",
    number: "",
    age: "",
  };
  let userAddressInfo = {
    area: "",
    city: "",
    state: "",
    pinCode: "",
  };
  const [userData, setUserData] = useState(userInfo);

  const [userAddress, setUserAddress] = useState(userAddressInfo);
  const [showPassword, setShowPassword] = useState(false);
  // const inputHandler = (e) => {
  //   const { name, value } = e.target;
  //   setUserData(prevState => ({...prevState,[name]: value}));
  // };

  // const inputAddressHandler = (e) => {
  //   const { name, value } = e.target;
  //   setUserAddress(prevState => ({...prevState,[name]: value}));
  // };

  const registerHandle = (e) => {
    if (userData.password !== userData.Confrompassword) {
      alert("Passwords do not match!");
    }
    e.preventDefault();
    let data = { ...userData, Address: [userAddress] };
    // console.log("==> data:", data);

    axios({
      method: "post",
      url: "http://localhost:9999/user/signup",
      data: data,
    })
      .then((res) => {
        console.log("==>res:", res.data);
        toggle();
        localStorage.setItem("user", JSON.stringify(res.data.data));
        setUserData(userInfo);
        setUserAddress(userAddressInfo);
      })
      .catch((err) => {
        console.log("==>err:", err);
      });
  };
  const pageHandler = () => {
    toggle();
    loginToggle();
    setUserAddress(userAddressInfo);
    setUserData(userInfo);
  };

  return (
    <Modal isOpen={modal} toggle={toggle} className="rounded-0 ">
      <ModalHeader className="bg-violet-200 rounded-0" toggle={toggle}>
        Register
      </ModalHeader>
      <ModalBody className="bg-violet-200">
        <Form onSubmit={registerHandle}>
          <FormGroup>
            <Label for="exampleName" className="font-bold">
              Name
            </Label>
            <Input
            style={{boxShadow:"none"}}
              id="exampleName"
              name="name"
              placeholder="Enter your Name"
              type="text"
              value={userData.name}
              onChange={(e) =>
                setUserData({ ...userData, name: e?.target?.value })
              }
              className="box-shado"
            />
          </FormGroup>
          <FormGroup>
            <Label for="exampleEmail" className="font-bold">
              Email
            </Label>
            <Input
            style={{boxShadow:"none"}}
              id="exampleEmail"
              name="email"
              placeholder="Enter your Email"
              type="email"
              value={userData.email}
              onChange={(e) =>
                setUserData({ ...userData, email: e?.target?.value })
              }
            />
          </FormGroup>
          <FormGroup>
            <Label for="examplePassword" className="font-bold">
              Password
            </Label>
            <Input
            style={{boxShadow:"none"}}
              id="examplePassword"
              name="password"
              placeholder="Enter your Password"
              type="text"
              value={userData.password}
              onChange={(e) =>
                setUserData({ ...userData, password: e?.target?.value })
              }
            />
          </FormGroup>
          <FormGroup>
            <Label for="examplePassword" className="font-bold">
              Conform Password
            </Label>
            <div className="d-flex justify-content-between align-items-center ">
              <Input
              
                id="examplePassword"
                name="password"
                placeholder="Enter your Password"
                type={showPassword ? "text" : "password"}
                value={userData.Confrompassword}
                onChange={(e) =>
                  setUserData({
                    ...userData,
                    Confrompassword: e?.target?.value,
                  })
                }
                style={{
                  border:
                    userData.password !== userData.Confrompassword
                      ? "2px solid red"
                      : "2px solid green",
                }}
              />
              {showPassword ? (
                <BiHide
                  BiHide
                  className="h2 ms-2 showpass"
                  onClick={() => setShowPassword(!showPassword)}
                />
              ) : (
                <BiShowAlt
                  className="h2 ms-2 showpass"
                  onClick={() => setShowPassword(!showPassword)}
                />
              )}
            </div>
          </FormGroup>
          <FormGroup>
            <Label for="exampleNumber" className="font-bold">
              Mobile Number
            </Label>
            <Input
            style={{boxShadow:"none"}}
              id="exampleNumber"
              name="number"
              placeholder="Enter your Mobile Number"
              type="text"
              value={userData.number}
              onChange={(e) =>
                setUserData({ ...userData, number: e?.target?.value })
              }
            />
          </FormGroup>
          <FormGroup>
            <Label for="exampleAge" className="font-bold">
              Age
            </Label>
            <Input
            style={{boxShadow:"none"}}
              id="exampleAge"
              name="age"
              placeholder="Enter your Age"
              type="number"
              value={userData.age}
              onChange={(e) =>
                setUserData({ ...userData, age: e?.target?.value })
              }
            />
          </FormGroup>
          <div className="grid grid-cols-2 gap-2 ">
            <FormGroup>
              <Label for="exampleArea" className="font-bold">
                Add
              </Label>
              <Input
            style={{boxShadow:"none"}}
                id="exampleArea"
                name="add"
                placeholder="Enter your Area"
                type="text"
                value={userAddress.area}
                onChange={(e) =>
                  setUserAddress({ ...userAddress, area: e?.target?.value })
                }
              />
            </FormGroup>
            <FormGroup>
              <Label for="exampleCity" className="font-bold">
                City
              </Label>
              <Input
            style={{boxShadow:"none"}}
                id="exampleCity"
                name="city"
                placeholder="Enter your City"
                type="text"
                value={userAddress.city}
                onChange={(e) =>
                  setUserAddress({ ...userAddress, city: e?.target?.value })
                }
              />
            </FormGroup>
            <FormGroup>
              <Label for="exampleState" className="font-bold">
                State
              </Label>
              <Input
            style={{boxShadow:"none"}}
                id="exampleState"
                name="state"
                placeholder="Enter your State"
                type="text"
                value={userAddress.state}
                onChange={(e) =>
                  setUserAddress({ ...userAddress, state: e?.target?.value })
                }
              />
            </FormGroup>
            <FormGroup>
              <Label for="examplePinCode" className="font-bold">
                PinCode
              </Label>
              <Input
            style={{boxShadow:"none"}}
                id="examplePinCode"
                name="pinCode"
                placeholder="Enter your PinCode"
                type="text"
                value={userAddress.pinCode}
                onChange={(e) =>
                  setUserAddress({ ...userAddress, pinCode: e?.target?.value })
                }
              />
            </FormGroup>
            <p>
              Already Have Account
              <span
                onClick={() => pageHandler()}
                role="button"
                className="ms-2"
                style={{
                  color: "blue",
                  textDecoration: "underline",
                }}
              >
                Login
              </span>
            </p>
          </div>

          <Button className="bg-danger w-100 border-0 fw-bold  ">
            Register
          </Button>
        </Form>
      </ModalBody>
    </Modal>
  );
}
