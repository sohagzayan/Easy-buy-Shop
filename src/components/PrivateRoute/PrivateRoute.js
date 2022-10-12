import Cookies from "js-cookie";
import { Navigate, useLocation } from "react-router-dom";
import { useCurrentUserQuery } from "../../store/API/user";
import Loading from "../Loading/Loading";

const PrivateRoute = ({ children }) => {
  const location = useLocation();
  const userid = Cookies.get("id");
  const { isLoading, data } = useCurrentUserQuery(userid);

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
