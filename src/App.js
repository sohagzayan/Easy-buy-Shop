import { useEffect, useState } from "react";
import { QueryClient, QueryClientProvider } from "react-query";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./App.css";
import Loading from "./components/Loading/Loading";
import { AuthContextProvider } from "./context/AuthContextProvider";
import AllRoutes from "./router/AllRoutes";
import "swiper/css/bundle";
import "./components/HeroSlider/styles.css";

const queryClient = new QueryClient();

function App() {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);

  return (
    <div className="bg-[#fff] dark:bg-own-dark-bg">
      {loading ? (
        <Loading />
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
