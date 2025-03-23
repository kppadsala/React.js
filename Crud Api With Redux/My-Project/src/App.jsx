import react, { Profiler } from "react";

import "./App.css";
import PageRouter from "./Router/PageRouter";
import { Provider } from "react-redux";
import Store from "./Redux/Store";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
function App() {
  const queryClient = new QueryClient()
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <Provider store={Store}>
          <PageRouter />
        </Provider>
        <ReactQueryDevtools initialIsOpen={false} />
      </QueryClientProvider>
      <ToastContainer autoClose={2000} />
    </>
  );
}

export default App;
