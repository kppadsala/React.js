import { Provider } from "react-redux";
import "./App.css";
import RouterTheme from "./Router/RouterTheme";
import store from "./Redux/store";
import { Bounce, ToastContainer } from "react-toastify";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

function App() {
  const queryClient = new QueryClient(); 
  return (
    <>
    <QueryClientProvider client={queryClient}>
      <Provider store={store}>
          <RouterTheme />
      </Provider>
      <ToastContainer 
      position="top-right"
      autoClose={2000}
      hideProgressBar={false}
      newestOnTop={false}
      closeOnClick={true}
      rtl={false}
      pauseOnFocusLoss
      draggable
      pauseOnHover
      theme="light"
      transition={Bounce}/>
      </QueryClientProvider>
    </>
  );
}

export default App;
