import React from "react";
import { useQuery } from "react-query";
import { useNavigate } from "react-router-dom";
import Loading from "../components/Loading/Loading";
import { useAuthContext } from "../context/AuthContextProvider";
import MakeAdminRow from "./MakeAdminRow";

const MakeAdmin = () => {
  const navigate = useNavigate();
  const { logOut } = useAuthContext();

  const {
    isLoading,
    refetch,
    error,
    data: allUser,
  } = useQuery("userData", () =>
    fetch(`https://tranquil-shelf-42201.herokuapp.com/api/user`, {
      method: "GET",
      headers: {
        authorization: `bearer ${localStorage.getItem("accessToken")}`,
      },
    }).then((res) => {
      if (res.status === 401 || res.status === 403) {
        logOut();
        localStorage.removeItem("accessToken");
        navigate("/");
      } else {
        return res.json();
      }
    })
  );

  if (isLoading) {
    return <Loading />;
  }

  return (
    <div className="px-4 mt-6">
      <div className="overflow-x-auto">
        <table className="">
          <thead>
            <tr>
              <th></th>
              <th>Date</th>
              <th>Email</th>
              <th>Role</th>
              <th>Make Admin</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {allUser?.map((user , index) => (
              <MakeAdminRow key={index} refetch={refetch} user={user} />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MakeAdmin;
