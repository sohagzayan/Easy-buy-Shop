import React from 'react';
import { NavLink } from 'react-router-dom';

const MyOrderRow = ({order}) => {

    const {price ,orderAmount , name , email , date, address , _id } = order

   
    return (
        <tr>
        <th>1</th>
        <td>{date}</td>
        <td>{price}</td>
        <td>{email}</td>
        <td>343434</td>
        <td>
            <button className='text-secondary mr-2 cursor-pointer '>
                Cancel
            </button>
            <NavLink to={`/dashBoart/payment/${_id}`}>
                <button className='text-primary cursor-pointer font-bold'>
                    Payment
                </button>
            </NavLink> 
        </td>
      </tr>
    );
};

export default MyOrderRow;