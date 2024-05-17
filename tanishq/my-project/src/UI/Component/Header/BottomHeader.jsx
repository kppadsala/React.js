import React from "react";
import { useCookies } from "react-cookie";
import { NavLink } from "react-router-dom";

export default function BottomHeader() {
  const [cookies] = useCookies(["user"]);

  return (
    <div className=" d-flex justify-content-center gap-5  flex-column align-items-center">
      {cookies?.user?.userType !== "admin" ? (
      
        <div className="flex justify-center gap-4 px-5 py-3 ">
        <NavLink to={"Gold"} className="hover:font-semibold ">
          ALL JEWELLERY
        </NavLink>
        <NavLink to="/Gold" className="hover:font-semibold ">
          GOLD
        </NavLink>
        <NavLink to={"Gold"} className="hover:font-semibold ">
          DIAMOND
        </NavLink>
        <NavLink to={"Gold"} className="hover:font-semibold ">
          ERRINGS
        </NavLink>
        <NavLink to={"Gold"} className="hover:font-semibold ">
          RINGS
        </NavLink>
        <NavLink to={"Gold"} className="hover:font-semibold ">
          COLLECTIONS
        </NavLink>
        <NavLink to={"Gold"} className="hover:font-semibold ">
          WEDDING
        </NavLink>
        <NavLink to={"Gold"} className="hover:font-semibold ">
          GIFTING
        </NavLink>
        <NavLink to={"Gold"} className="hover:font-semibold ">
          GOLDEN HARVEST
        </NavLink>
        <NavLink to={"Gold"} className="hover:font-semibold ">
          MORE
        </NavLink>
        <NavLink to={"Gold"} className="hover:font-semibold ">
          PROFILE
        </NavLink>
      </div>
      ) : (
        <div className="flex justify-center gap-4 px-5 py-3 ">
        <NavLink to="/Userlist" className="hover:font-semibold ">
          USER
        </NavLink>
        <NavLink to={"/product"} className="hover:font-semibold ">
          PRODUCT
        </NavLink>
        <NavLink to={"Gold"} className="hover:font-semibold ">
          ORDER
        </NavLink>
      </div>
      )}
    </div>
  );
}
