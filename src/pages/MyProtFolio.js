import React from 'react';
import { ImDownload3 } from 'react-icons/im';
import image from '../assets/images/myPhoto.jpg';
import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";
const MyProtFolio = () => {
  return (
    <>
      <Header />
        <div className='flex md:flex-row flex-col justify-around  mt-24 mb-28 items-center px-4'>
           <div className='aboutImage'>
                 <img width={400} className="rounded-full" src={image} alt="images" />
           </div>
            <div>
              <div className='mb-5'>
                  <h3 className='text-xl text-primary font-bold mb-3'>Name : MD SOHAG HOSSAIN</h3>
                  <h3 className='text-xl text-primary font-bold mb-3'>Email : gdsohag360@gmail.com</h3>
                  <h3 className='text-xl text-primary font-bold mb-3'>Educational : diploma in engineering</h3>

              </div>
                <h3 className='text-4xl text-green_light mb-4'>About Me</h3>
                <p className='text-justify'>Hello, I’m a Md Sohag, web-developer based on Paris. I have rich experience in <br /> web site design & building and customization. A self-motivated and enthusiastic web developer. <br /> To gain confidence and fame using my potential in the field of web development and express my <br /> innovative creative skills for self and company growth. <br /> I always like to learn new things and have experience with new stuff. Also I am good at</p>
                <div className='mt-6'>
                    <span className='border-2 mb-4 inline-block  border-green_light mr-5 px-5 rounded-sm ' href="/">html</span>
                    <span className='border-2  mb-4 inline-block border-green_light mr-5 px-5 rounded-sm ' href="/">css</span>
                    <span className='border-2  mb-4 inline-block border-green_light mr-5 px-5 rounded-sm ' href="/">javascript</span>
                    <span className='border-2  mb-4 inline-block border-green_light mr-5 px-5  rounded-sm' href="/">react</span>
                    <span className='border-2  mb-4 inline-block border-green_light mr-5 px-5  rounded-sm' href="/">node</span>
                    <br />
                    <span className='border-2  mb-4 inline-block border-green_light mr-5 px-5  rounded-sm' href="/">mongoDB</span>
                    <span className='border-2  mb-4 inline-block border-green_light mr-5 px-5  rounded-sm' href="/">express</span>
                </div>
                <button className='flex items-center text-white_light font-bold tracking-widest rounded-lg justify-center uppercase bg-green_light px-6 py-2'>Download CV
                    <ImDownload3 className='text-white_light ml-3' />
                </button>
                    <div>
                      <h4 className=''>
                        <span className='font-bold'>
                         1 Live Link : <a className='text-secondary' href="https://preeminent-cupcake-119a2c.netlify.app/" target='_blank' rel="noreferrer">https://preeminent-cupcake-119a2c.netlify.app/</a>
                        </span>
                        <span className='font-bold block'>
                         2 Live Link : <a className='text-secondary' href="https://gentle-rolypoly-91ea14.netlify.app/" target='_blank' rel="noreferrer">https://gentle-rolypoly-91ea14.netlify.app/</a>
                        </span>
                        <span className='font-bold'>
                         3 Live Link : <a className='text-secondary' href="https://our-foodify.web.app/" target='_blank' rel="noreferrer">https://our-foodify.web.app/</a>
                        </span>
                      </h4>
                    </div>
            </div>
        </div>
        <Footer />
        </>
    );
};




export default MyProtFolio;
