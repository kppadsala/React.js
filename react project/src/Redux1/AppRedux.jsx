import React from "react";
import Home from "./Home";
import { Provider } from "react-redux";
import {store} from '../Redux1/ReduxCom/app'

export default function AppRedux() {
  return (
    <div>
      <Provider store={store}>
      <Home />
      </Provider>
    </div>
  );
}

