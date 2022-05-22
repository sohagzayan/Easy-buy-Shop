import React from 'react';
import { AiOutlineCaretRight, AiOutlineDoubleRight } from 'react-icons/ai';
import computer from '../../assets/images/technical-support.png';

const Hero = () => {
    return (
        <div class="hero min-h-screen ">
        <div class="hero-content flex-col lg:flex-row-reverse">
          <img src={computer} class=" max-w-sm md:max-w-lg rounded-lg p-5" alt='img'/>
          <div className=''>
              <span className='text-primary text-lg font-bold mb-2'>Welcome  Our</span>
            <h1 class="text-5xl lg:text-6xl font-bold text-primary md:leading-normal "> Exclusive <span className='text-secondary font-bold'>Computer</span> Hardware Fair</h1>
            <p class="py-6 text-primary text-sm font-medium tracking-wider">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem molestias illo odio. Sit ullam officiis sed minima culpa laboriosam? Tempore! sed minima culpa laboriosam? Tempore! </p>
           <form className='md:w-1/2 relative  py-2 rounded-md border-2 bg-transparent border-secondary mb-4'>
               <span className='absolute top-2 left-1'><AiOutlineDoubleRight className='text-primary text-2xl' /></span>
           <input type="text" className=' bg-transparent w-full h-full pl-10 outline-none text-primary font-bold' placeholder='Search' />  
           </form>
            <div className='flex items-center '>
            <button class="btn btn-secondary text-white mr-3 ">Get Started</button>
            <button class="btn border-2 border-secondary bg-transparent text-primary flex items-center"><AiOutlineCaretRight className='text-secondary text-lg' /> show me the demo</button>
            </div>
          </div>
        </div>
      </div>
    );
};

export default Hero;