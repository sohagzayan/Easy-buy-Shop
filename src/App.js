import { QueryClient, QueryClientProvider } from "react-query";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./App.css";
import { AuthContextProvider } from "./context/AuthContextProvider";
import AllRoutes from "./router/AllRoutes";
import GlobalLoading from "./components/GlobalLoading/GlobalLoading";
import { useEffect, useState } from "react";
const queryClient = new QueryClient();

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, []);
  return (
    <div>
      {loading ? (
        <GlobalLoading />
      ) : (
        <QueryClientProvider client={queryClient}>
          <AuthContextProvider>
            <AllRoutes />
            <ToastContainer />
          </AuthContextProvider>
        </QueryClientProvider>
      )}
    </div>
  );
}

export default App;
