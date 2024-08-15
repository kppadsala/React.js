import React from "react";
import { Provider } from "react-redux";
import { store } from "./Redux/store";
import Navbar from "./Navbar";
import CreateForm from "./CreateForm";
import { BrowserRouter, Route, Routes } from "react-router-dom";

export default function AppRedux() {
  return (
    <div className="w-full">
      <Provider store={store}>
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path="/" element={<CreateForm />} />
          </Routes>
        </BrowserRouter>
      </Provider>
    </div>
  );
}
