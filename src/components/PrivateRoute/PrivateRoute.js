import { Navigate, useLocation } from "react-router-dom";
import { useAuthContext } from "../../context/AuthContextProvider";
import Loading from "../Loading/Loading";

const PrivateRoute = ({ children }) => {
  const { username ,loading } = useAuthContext();
  const location = useLocation()
  if(loading){
    return <Loading />
  }

  
  return username ? (
       children
    ) : (
      <Navigate to="/login"  state={{from : location}} />
  );
};

export default PrivateRoute;