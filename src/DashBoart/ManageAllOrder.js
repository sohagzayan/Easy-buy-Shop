import React, { useEffect, useState } from 'react';
import ManageAllOrderRow from './ManageAllOrderRow';

const ManageAllOrder = () => {

  const [manageOrder , setManageOrder] = useState([])
  useEffect(()=>{
    fetch(`http://localhost:5000/api/purchase` , {
      method : "GET",
      headers : {
        authorization : `Bearer ${localStorage.getItem('accessToken')}`
      }

    })
    .then(res => res.json())
    .then(data => setManageOrder(data))
  },[manageOrder])
  

    return (
        <table className='px-4 mt-5'>
        <tr>
          <th>Date</th>
          <th>Price</th>
          <th>Order Amount</th>
          <th>Email</th>
          <th>Address</th>
          <th>Pay</th>
        </tr>

        {
          manageOrder?.map((order , index) => <ManageAllOrderRow 
              key={index}
              order={order}
            />)
        }
       
      </table>
    );
};

export default ManageAllOrder;