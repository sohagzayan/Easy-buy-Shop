import { Navigate, useLocation } from "react-router-dom";
import { useAuthContext } from "../../context/AuthContextProvider";
import useAdmin from "../../hock/useAdmin";
import Loading from "../Loading/Loading";

const PrivateAdmin = ({ children }) => {
  const { username ,loading } = useAuthContext();
  const [admin , adminLoading] = useAdmin(username)
  const location = useLocation()
  
  if(loading || adminLoading){
    return <Loading />
  }

  console.log(loading , adminLoading);

    if(!username || !admin){
        <Navigate to="/login"  state={{from : location}} ></Navigate>
    }
  
  return children
};

export default PrivateAdmin;