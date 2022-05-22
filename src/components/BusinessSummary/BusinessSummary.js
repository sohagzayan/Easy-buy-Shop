import React from 'react';
import handshake from '../../assets/icons/handshake.png';
import help from '../../assets/icons/help (1).png';
import revenue from '../../assets/icons/increased-revenue.png';
import review from '../../assets/icons/review.png';
import settings from '../../assets/icons/settings.png';
import win from '../../assets/icons/win.png';
const BusinessSummary = () => {
    return (
        <div className='mt-20'>
            <div>
                <h2 className='text-3xl font-bold mb-2'>Why choose <span className='text-secondary'>Us</span></h2>
                 <span className='text-2xl font-medium mb-2 inline-block'>Many Business Trust Us</span>
                <p className='text-sm text-primary'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cupiditate, reiciendis.</p>
                <div className='grid grid-cols-1 gap-3 mt-7 md:grid-cols-2 lg:grid-cols-3'>
                    <div className='bg-[#E8E8FF] m-5 py-3 flex flex-col items-center rounded-lg '>
                        <img  width="100px" className="mb-3" src={help} alt="" />
                         <span className='  text-lg text-primary mb-2 font-bold'>We served customers</span>
                         <span className='text-4xl font-bold text-secondary'>100+</span>
                    </div>
                    <div className='bg-[#E8E8FF] m-5 py-3 flex flex-col items-center rounded-lg'>
                        <img  width="100px" className="mb-3" src={revenue} alt="" />
                         <span className='  text-lg text-primary mb-2 font-bold'>Annual revenue</span>
                         <span className='text-4xl font-bold text-secondary'>120M+ </span>
                    </div>
                    <div className='bg-[#E8E8FF] m-5 py-3 flex flex-col items-center rounded-lg'>
                        <img  width="100px" className="mb-3" src={review} alt="" />
                         <span className='  text-lg text-primary mb-2 font-bold'>Reviews</span>
                         <span className='text-4xl font-bold text-secondary'>33K+</span>
                    </div>
                    <div className='bg-[#E8E8FF] m-5 py-3 flex flex-col items-center rounded-lg'>
                        <img  width="100px" className="mb-3" src={settings} alt="" />
                         <span className='  text-lg text-primary mb-2 font-bold'>Tools</span>
                         <span className='text-4xl font-bold text-secondary'>50+</span>
                    </div>
                    <div className='bg-[#E8E8FF] m-5 py-3 flex flex-col items-center rounded-lg'>
                        <img  width="100px" className="mb-3" src={handshake} alt="" />
                         <span className='  text-lg text-primary mb-2 font-bold'>Happy Clients</span>
                         <span className='text-4xl font-bold text-secondary'>170+</span>
                    </div>
                    <div className='bg-[#E8E8FF] m-5 py-3 flex flex-col items-center rounded-lg'>
                        <img  width="100px" className="mb-3" src={win} alt="" />
                         <span className='  text-lg text-primary mb-2 font-bold'>National award</span>
                         <span className='text-4xl font-bold text-secondary'>10+</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BusinessSummary;