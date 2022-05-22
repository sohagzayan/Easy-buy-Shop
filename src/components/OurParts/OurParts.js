import React from 'react';
import img2 from '../../assets/images/graphicCard.png';
import img1 from '../../assets/images/ram.png';
import img3 from '../../assets/images/ssd.png';
import OurPartsProducts from '../OurPartsProducts/OurPartsProducts';
const OurParts = () => {
    const partsData = [
        {name : "Asus TUF Gaming GeForce RTX 3070 V2 OC Edition 8GB GDDR6 Graphics Card with LHR #TUF-RTX3070-O8G-V2-GAMING" , image : img1 , details : "Specifications of Asus TUF Gaming GeForce RTX 3070 V2 OC Edition 8GB GDDR6 Graphics Card with LHR #TUF-RTX3070-O8G-V2-G" , quantity : 20 , price : 30  },
        {name : "Expansion Card PCI Express 16X to Gaming GeForce RTX 3070 NVMe NVMe  NVMe .2 -Key SSD Adapter Full Speed" , image : img2 , details : "Product details of Expansion .2 -Key SSD Adapter Full Speed Card PCI Express 16X to NVMe .2 -Key SSD Adapter Full Speed" , quantity : 18 , price : 19 , },
        {name : "Asus TUF Gaming GeForce RTX 3070 V2 OC Edition 8GB GDDR6 Graphics Card with LHR #TUF-RTX3070-O8G-V2-GAMING" , image : img3 , details : "Specifications of Asus TUF Gaming GeForce RTX 3070 V2 OC Edition 8GB GDDR6 Graphics Card with LHR #TUF-RTX3070-O8G-V2-G" , quantity : 20 , price : 30  },
    ]
    return (
        <div className='mt-10'>
            <div>
                <h2 className='text-center text-primary text-3xl  border-b-2 inline-block tracking-widest font-bold mb-8 py-4'>Our Parts</h2>

                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
                     {
                         partsData.map((item)=> <OurPartsProducts 
                         item={item}
                         />)
                     }   
                </div>
            </div>
        </div>
    );
};

export default OurParts;