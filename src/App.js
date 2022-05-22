import './App.css';
import { AuthContextProvider } from './context/AuthContextProvider';
import AllRoutes from './router/AllRoutes';
function App() {
  return (
    <div>
      <AuthContextProvider>
        <AllRoutes />
      </AuthContextProvider>

    </div>
  );
}

export default App;
