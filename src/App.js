import { QueryClient, QueryClientProvider } from "react-query";
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
        </AuthContextProvider>
      </QueryClientProvider>
    </div>
  );
}

export default App;
