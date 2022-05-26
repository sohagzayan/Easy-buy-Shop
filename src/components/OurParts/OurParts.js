import axios from 'axios';
import React from 'react';
import { useQuery } from 'react-query';
import Loading from '../Loading/Loading';
import OurPartsProducts from '../OurPartsProducts/OurPartsProducts';
const OurParts = () => {


    const { isLoading, error, data:partsData } = useQuery('toolsData', () =>
     axios.get(`https://tranquil-shelf-42201.herokuapp.com/api/tools`)
  )

  
  if(isLoading){
      return <Loading />
  }
console.log(partsData);
    return (
        <div className='mt-10'>
            <div>
                <h2 className='text-center text-primary text-3xl  border-b-2 inline-block tracking-widest font-bold mb-8 py-4'>Our Parts</h2>

                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
                     {
                         partsData.data?.map((item)=> <OurPartsProducts 
                         item={item}
                         />)
                     }   
                </div>
            </div>
        </div>
    );
};

export default OurParts;