import React from 'react';

const ManageAllOrderRow = ({order }) => {
    const {price ,orderAmount , name , email , date, address } = order
    // const dataFormated = format(date , 'PP')
    return (
        <tr>
        <td className='text-sm'>{date}</td>
        <td>{price}</td>
        <td>{orderAmount}</td>
        <td>{email}</td>
        <td>{address}</td>
        <td>
            <button>Padding</button>
        </td>
      </tr>
    );
};

export default ManageAllOrderRow;