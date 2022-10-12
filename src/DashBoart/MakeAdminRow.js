import axios from "axios";
import React from "react";
import swal from "sweetalert";

const MakeAdminRow = ({ user, refetch }) => {
  const { email, date, role, _id } = user;

  const makeAdmin = async () => {
    await fetch(
      `https://easy-buy-shop-server.onrender.com/api/admin/${email}`,
      {
        method: "PUT",
        body: JSON.stringify({ role: role === "user" ? "admin" : "user" }),
        headers: {
          "Content-type": "application/json; charset=UTF-8",
          authorization: `Bearer ${localStorage.getItem("accessToken")}`,
        },
      }
    )
      .then((res) => console.log(res))
      .then((data) => {
        swal(`Yah Success !",`, "success");
        refetch();
      });
  };

  const handleDeleteUser = async () => {
    swal({
      title: "Are you sure?",
      text: "Delete this user ?",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    }).then((willDelete) => {
      if (willDelete) {
        swal("Poof! Your imaginary file has been deleted!", {
          icon: "success",
        });
        axios.delete(
          `https://easy-buy-shop-server.onrender.com/api/user/${_id}`
        );
        refetch();
      } else {
        swal("Your imaginary file is safe!");
      }
    });
  };

  return (
    <tr>
      <th>1</th>
      <td>{date}</td>
      <td>{email}</td>
      <td>{role}</td>
      <td onClick={makeAdmin}>
        <button className="text-own-secondary dark:text-own-white px-2 py-2 rounded-md bg-primary border-primary text-white">
          {role === "admin" ? "Make User😑" : "Make Admin🦾"}
        </button>
      </td>
      <td>
        <button
          onClick={handleDeleteUser}
          className="btn bg-secondary border-secondary btn-xs text-white"
        >
          Delete
        </button>
      </td>
    </tr>
  );
};

export default MakeAdminRow;
