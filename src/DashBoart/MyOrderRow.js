import React from "react";
import { NavLink } from "react-router-dom";
import swal from 'sweetalert';

const MyOrderRow = ({ order }) => {
  const {
    price,
    orderAmount,
    name,
    email,
    date,
    address,
    _id,
    payed,
    transactionId,
    
  } = order;

  const handleDeleteProduct = ()=>{
    swal({
        title: "Are you sure?",
        text: "Once deleted, you will not be able to recover this imaginary file!",
        icon: "warning",
        buttons: true,
        dangerMode: true,
      })
      .then((willDelete) => {
        if (willDelete) {
          swal("Poof! Your imaginary file has been deleted!", {
            icon: "success",
          });
          fetch(`https://tranquil-shelf-42201.herokuapp.com/api/purchase/${_id}`, {
            method: "DELETE",
            headers: {
              authorization: `Bearer ${localStorage.getItem("accessToken")}`,
            },
          })
          .then(res => res.json())
          
        } else {
          swal("Your imaginary file is safe!");
        }
      });
  }
  return (
    <tr>
      <th>1</th>
      <td>{date}</td>
      <td>{price}</td>
      <td>{email}</td>
      <td>{transactionId}</td>
      <td>
        {
          payed ?
          null
          :
          <button onClick={handleDeleteProduct} className="text-secondary mr-2 cursor-pointer ">Cancel</button>
        }
        {payed ? (
          <span className=" cursor-pointer font-bold text-green-400">
            Payed
          </span>
        ) : (
          <NavLink to={`/dashBoart/payment/${_id}`}>
            <button className="text-primary cursor-pointer font-bold">
              Payment
            </button>
          </NavLink>
        )}
      </td>
    </tr>
  );
};

export default MyOrderRow;
