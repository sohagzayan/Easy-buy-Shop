import React from 'react';
import { useNavigate } from 'react-router-dom';
const NotFound = () => {
    const navigate = useNavigate()
    return (
        <div className='flex flex-col justify-center items-center mt-20'>
            <span className='text-xl text-primary'>Not Found </span>
            <h1 className='text-3xl text-secondary font-bold'>404</h1>
            <img width="500px" className='mx-w-sm' src="https://assets.materialup.com/uploads/c13818e8-9e42-4f4d-b657-38743a81b270/preview.gif" alt="" />
            <button onClick={(e)=> navigate('/')} className='btn btn-primary mt-5 text-white'>Go Home</button>    
        </div>
    );
};

export default NotFound;