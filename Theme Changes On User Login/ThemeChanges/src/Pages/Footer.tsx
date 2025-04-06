import { useEffect } from "react";
import { useSelector } from "react-redux";
import { setThemeColor } from "../Utils/colorUtils";

export default function Footer() {
    const sessionUser = useSelector((state: any) => state.session.username);
    useEffect(() => {
        setThemeColor(); 
    }, [sessionUser]);

  return (
    <div className="bg-[var(--color-admin1Color)] text-white p-4 flex justify-between w-full">
      <p className="text-center w-full">Copyright © 2025 Theme Labs Inc. · Trademark Policy</p>
    </div>
  );
}
