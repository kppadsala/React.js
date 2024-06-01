import React from "react";
import Home from "./Home";
import { Provider } from "react-redux";
import { store } from "./Redux/app";
import AmountDisplay from "./AmountDisplay";

export default function AppRedux() {
  return (
    <div>
      <Provider store={store}>
        <Home />
        <AmountDisplay/>
      </Provider>
    </div>
  );
}
