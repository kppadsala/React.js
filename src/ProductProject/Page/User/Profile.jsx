import React from "react";
import { Button } from "reactstrap";
import {useNavigate} from 'react-router-dom'

export default function Profile() {
    const navigate=useNavigate();
  const logOutcheckHandler = () => {
    localStorage.clear();
    navigate("/home");
  };
  return (
    <div>
      <h1>Hello User</h1>
      <Button
        className=" bg-danger border-0  "
        onClick={() => logOutcheckHandler()}
      >
        Logout
      </Button>
    </div>
  );
}
