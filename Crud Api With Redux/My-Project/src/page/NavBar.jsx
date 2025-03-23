import React from "react";
import { useNavigate } from "react-router-dom";

export default function NavBar() {
  const navigate = useNavigate();

  return (
    <div className="bg-gray-300 w-full shadow-md p-3">
      <ul className="flex justify-center gap-8">
        <li
          className="text-base font-semibold cursor-pointer"
          onClick={() => navigate("/")} 
        >
          Home
        </li>
        <li
          className="text-base font-semibold cursor-pointer"
          onClick={() => navigate("/cart")} 
        >
          Cart
        </li>
      </ul>
    </div>
  );
}
