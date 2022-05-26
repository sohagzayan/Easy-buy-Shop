import React from 'react';
import Footer from '../components/Footer/Footer';
import Header from '../components/Header/Header';
const Blogs = () => {
    return (
        <>
        <Header />
            <div className='container mx-auto px-9  mt-10'>
                <ul>
                    <li className='mb-5'>
                        <h2 className='text-xl font-bold'>How will you improve the performance of a React Application?</h2>
                        <p>
                        </p>
                    </li>
                    <li className='mb-5'>
                        <h2 className='text-xl font-bold'>What are the different ways to manage a state in a React application?</h2>
                        <p>
                        </p>
                    </li>
                    <li className='mb-5'>
                        <h2 className='text-xl font-bold'>How does prototypical inheritance work?</h2>
                        <p>
                        </p>
                    </li>
                    <li className='mb-5'>
                        <h2 className='text-xl font-bold'>Why you do not set the state directly in React. For example, if you have const [products, setProducts] = useState([]). Why you do not set products = [...] instead, you use the setProducts</h2>
                        <p>
                        </p>
                    </li>
                    <li className='mb-5'>
                        <h2 className='text-xl font-bold'>You have an array of products. Each product has a name, price, description, etc. How will you implement a search to find products by name?</h2>
                        <p>
                        </p>
                    </li>
                    <li className='mb-5'>
                        <h2 className='text-xl font-bold'>What is a unit test? Why should write unit tests?</h2>
                        <p>
                        </p>
                    </li>
                </ul>
            </div>
        <Footer />
        </>
    );
};

export default Blogs;