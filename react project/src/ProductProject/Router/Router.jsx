import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../Page/User/Home";
import Header from "../Component/Header/Header";
import ProtectedRouter from "./ProtectedRouter";
import Profile from "../Page/User/Profile";
import { ToastContainer } from "react-toastify";
import Product from "../Page/User/Product";
import Contact from "../Page/User/Contact";

export default function Router() {
  return (
    <div>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/Product" element={<Product />} />

          <Route
            path="/profile"
            element={<ProtectedRouter component={<Profile />} />}
          />

        </Routes>
      </BrowserRouter>
      <ToastContainer />
    </div>
  );
}
