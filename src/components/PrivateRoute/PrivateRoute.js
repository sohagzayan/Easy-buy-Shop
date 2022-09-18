import Cookies from "js-cookie";
import { Navigate, useLocation } from "react-router-dom";
import { useAuthContext } from "../../context/AuthContextProvider";
import { useCurrentUserQuery } from "../../store/API/user";
import Loading from "../Loading/Loading";

const PrivateRoute = ({ children }) => {
  const { username, loading } = useAuthContext();
  const usernames = true;
  const location = useLocation();
  const userid = Cookies.get("id");
  const { isLoading, data } = useCurrentUserQuery(userid);
  console.log(data?.status);

  if (isLoading) {
    return <Loading />;
  }
  return data?.status === "success" ? (
    children
  ) : (
    <Navigate to="/login" state={{ from: location }} />
  );
};

export default PrivateRoute;
