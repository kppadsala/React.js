import react, { Profiler } from "react";

import "./App.css";
import PageRouter from "./Router/PageRouter";
import { Provider } from "react-redux";
import Store from "./Redux/Store";
function App() {

  return (
    <>
      <Provider store={Store}>

      <PageRouter />
      </Provider>
    </>
  );
}

export default App;
