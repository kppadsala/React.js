import React from "react";
import { Provider } from 'react-redux';
import { store } from "./Store";

export default function Redux() {
  return (
    <div>
      <Provider store={store}>
        <App />
      </Provider>
    </div>
  );
}
