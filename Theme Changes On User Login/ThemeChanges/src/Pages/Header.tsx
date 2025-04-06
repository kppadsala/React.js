import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { setThemeColor } from "../Utils/colorUtils";
import { useDispatch, useSelector } from "react-redux";
import { clearSession } from "../Redux/sessionSlice";
import { setLogoTheme } from "../Utils/LogoUtils";
import { toast } from "react-toastify";

export default function Header() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const sessionUser = useSelector((state: any) => state.session.username);

  useEffect(() => {
    setThemeColor();
    setLogoTheme();
  }, [sessionUser]);

  const handleLogout = () => {
    dispatch(clearSession());
    toast.success("User Logout Successful!");
    sessionStorage.removeItem("user"); // Remove session
  };
  
  return (
    <div className="bg-[var(--color-admin1Color)] text-white p-4 flex justify-between w-full">
      <div>
        <img id="global-logo" alt="Logo" className="h-10 w-auto" />
      </div>
      <ul className="flex gap-4">
        <li className="cursor-pointer" onClick={() => navigate("/")}>
          Home
        </li>
        <li className="cursor-pointer">About</li>
      </ul>
      <button
        className="bg-red-500 text-white px-4 py-2 rounded-lg cursor-pointer"
        onClick={handleLogout}
      >
        Logout
      </button>
    </div>
  );
}
