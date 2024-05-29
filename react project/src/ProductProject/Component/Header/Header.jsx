import { useState } from "react";
import { Button } from "reactstrap";
import { VscSignIn } from "react-icons/vsc";
import LoginModal from "../Modals/LoginModal";
import RegisterModal from "../Modals/RegisterModal";
import { NavLink, useNavigate } from "react-router-dom";
import { FaRegUser } from "react-icons/fa6";

export default function Header() {
  const [modal, setModal] = useState(false);
  const toggle = () => setModal(!modal);
  
  const [regismodal, setRegisModal] = useState(false);
  const registoggle = () => setRegisModal(!regismodal);

  const navigate = useNavigate();
  

  const checkHandler = () => {
    localStorage.setItem("isLogin", "yes");
  };

  let data = localStorage.getItem("loginuser");
  // console.log("🚀 ~ file: Header.jsx:21 ~ Header ~ data:", data);

  return (
    <div className="w-100 bg-dark-subtle  text-danger d-flex justify-content-between align-items-center">
      <LoginModal modal={modal} toggle={toggle} registerToggle={registoggle} />
      <RegisterModal
        modal={regismodal}
        toggle={registoggle}
        loginToggle={toggle}
      />
      <div className="bg-dark-subtle  text-danger d-flex justify-content-center gap-5 p-3 ">
        <NavLink to={"home"}>Home</NavLink>
        <NavLink to={"/contact"}>Contact</NavLink>
        <NavLink to={"/product"}>Product</NavLink>

      </div>
      <div>
        <div className="d-flex justify-content-center align-items-center  gap-3">
          {!data ? (
            <Button
              className="d-flex gap-2 align-items-center bg-danger border-0 me-3 "
              onClick={() => toggle()}
            >
              <VscSignIn />
              Login
            </Button>
          ) : (
            <Button className=" p-1 px-2" onClick={() => navigate("/profile")}>
              <FaRegUser className="h6" /> Profile
            </Button>
          )}
          {/* <Button
            className="d-flex gap-2 align-items-center bg-danger border-0 me-3 "
            onClick={() => registoggle()}
          >
            <VscSignIn />
            Register
          </Button> */}
        </div>
      </div>
    </div>
  );
}
