import React from "react";
import Home from "./Home";
import { store } from "./Redux/app";
import { Provider } from "react-redux";

export default function AppRedux() {
  return (
    <div>
      <Provider store={store}>
        <Home />
      </Provider>
    </div>
  );
}
