import React, { useEffect, useState } from 'react';
import ManageAllProductsCard from './ManageAllProdutsCard';
const ManageAllProducts = () => {
    const [manageAllData , setmMnageAllData] = useState()
    
    useEffect(()=>{
        fetch(`https://tranquil-shelf-42201.herokuapp.com/api/tools`)
        .then(res => res.json())
        .then(data => setmMnageAllData(data))
    },[manageAllData])

    return (
        <div className='px-4 mt-5'>
            {
                manageAllData?.map((data, index)=> <ManageAllProductsCard 
                    key={index}
                    data={data}
                />)
            }
        </div>
    );
};

export default ManageAllProducts;