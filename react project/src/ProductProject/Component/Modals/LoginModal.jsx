import React, { useEffect, useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
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

export default function LoginModal({ toggle, modal, registerToggle }) {
  let Data = {
    email: "",
    password: "",
  };
  useEffect(() => {
    const toggleAfterThreeSeconds = setTimeout(() => {
      // toggle();
    }, 5000);
    return () => clearTimeout(toggleAfterThreeSeconds);
  }, []);

  const [userData, setUserData] = useState(Data);

  const loginHandle = (e) => {
    e.preventDefault();
    let logindata = { ...userData };
    console.log("Login Data:", logindata);
    axios({
      method: "post",
      url: "http://localhost:9999/user/signin",
      data: userData,
    })
      .then((res) => {
        localStorage.setItem("loginuser", JSON.stringify(res.data.data));
        setUserData(Data);
        console.log("==>res:", res.userData);
        toggle();
      })
      .catch((err) => {
        console.log("==>err:", err);
        toast.error(err.response.data);
      });
  };
  const pageHandler = () => {
    toggle();
    registerToggle();
    // setUserAddress(userAddressInfo);
    // setUserData(userInfo);
  };

  return (
    <Modal isOpen={modal} toggle={toggle}>
      <ModalHeader toggle={toggle}>Login</ModalHeader>
      <ModalBody>
        <Form onSubmit={loginHandle}>
          <FormGroup>
            <Label for="exampleEmail">Email</Label>
            <Input
              id="exampleEmail"
              name="email"
              placeholder="Enter your email"
              type="email"
              value={userData.email}
              onChange={(e) =>
                setUserData({ ...userData, email: e.target.value })
              }
            />
          </FormGroup>
          <FormGroup>
            <Label for="examplePassword">Password</Label>
            <Input
              id="examplePassword"
              name="password"
              placeholder="Enter your password"
              type="password"
              value={userData.password}
              onChange={(e) =>
                setUserData({ ...userData, password: e.target.value })
              }
            />
          </FormGroup>
          <p>
            Create New Account
            <span
              onClick={() => pageHandler()}
              role="button"
              className="ms-2"
              style={{
                color: "blue",
                textDecoration: "underline",
              }}
            >
              Sign Up
            </span>
          </p>
          <Button color="danger" className="w-100">
            Login
          </Button>
        </Form>
      </ModalBody>
    </Modal>
  );
}
