import { QueryClient, QueryClientProvider } from "react-query";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./App.css";
import { AuthContextProvider } from "./context/AuthContextProvider";
import AllRoutes from "./router/AllRoutes";

const queryClient = new QueryClient();

function App() {
  return (
    <div>
      <QueryClientProvider client={queryClient}>
        <AuthContextProvider>
          <AllRoutes />
          <ToastContainer />
        </AuthContextProvider>
      </QueryClientProvider>
    </div>
  );
}

export default App;
