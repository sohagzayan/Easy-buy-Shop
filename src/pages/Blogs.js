import React from "react";
import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";
const Blogs = () => {
    const answerQus = `
    const products = [
        "Dell hardcore 129 laptop",
        "iphone 1Tb camera flashlight phone",
        "yellow laptop with balack camera",
        "Dell 1x59 lenovo commercial yoga Laptop",
        "LG supernove laptop dell",
        "HTC low price phone",
        "Dell purple color phone with Laptop"
        ]
        const searching = "phone";
        const output = [];
        for (const product of products) {
        if (product.toLowerCase().includes(searching.toLowerCase())) {
        output.push(product)
        }
        }
        console.log(output);
    `
  return (
    <>
      <Header />
      <div className="container mx-auto px-9  mt-10">
        <ul>
          <li className="mb-5">
            <h2 className="text-xl font-bold">
              1. How will you improve the performance of a React Application?
            </h2>
            <p>
              To Improve our react applications performance Keeping component
              state local where necessary We have learned that a state update in
              a parent component re-renders the parent and its child
              components.So, to ensure re-rendering a component only happens
              when necessary, we can extract the part of code that cares about
              the component state, making it local to that part of the code. (i)
              Using the useCallback Hook With the useCallback Hook, the
              incrementCount function only redefines when the count dependency
              array changes (ii) Using the useMemo Hook When the prop we pass
              down to a child component is an array or object, we can use a
              useMemo Hook to memoize the value between renders. As we have
              learned above, these values point to different spaces in memory
              and are entirely new values. (iii) Lazy loading images in React To
              optimize an application that consists of several images, we can
              avoid rendering all of the images at once to improve the page load
              time. With lazy loading, we can wait until each of the images is
              about to appear in the viewport before we render them in the DOM.
            </p>
          </li>
          <li className="mb-5">
            <h2 className="text-xl font-bold">
              2. What are the different ways to manage a state in a React
              application?
            </h2>
            <p>
              React State মেনেজ করার জন্য অনেক উপায় রয়েছে । React এর build in
              কিছু উপায় রয়েছে তার ভিতরে জন প্রীয় হচ্ছে useState । useState
              নিয়ে খুব সহজেই state manage করা যায় । এবং এইরকম করো একটি পদ্ধতি
              হচ্ছে useReducer এই use reducer দিয়েও আমারা ইচ্ছে করলে state
              manage করতে পারি ‌ । তবে খুব বড় application এর জন্য এগুলো তেমন
              বড় ভূমিকা রাখতে পারে না । তাই বড় application এর জন্য আমাদের
              react এর কিছু state management library use করতে হয় ‌ । তার ভিতরে
              জনপ্রিয় হচ্ছে redux . Redux দিয়ে আমারা বড় বড় application এর
              state গুলো খুব সহজেই manage করতে পারি । তাই বলা যায় react State
              Manage এর অনেক উপায় আছে তার ভিতরে , useState , useReducer , redux
              , MobX , Vuex etc
            </p>
          </li>
          <li className="mb-5">
            <h2 className="text-xl font-bold mb-2">
              3. How does prototypical inheritance work?
            </h2>
            <p>
              Javascript সবকিছুই একটি object | এমনকি একটি class তৈরি করার সময়
              একটি object লিটারাল বা কনস্ট্রাক্টর function মাধ্যমে একটি object |
              এভাবেই জাভাস্ক্রিপ্ট ক্লাস-ভিত্তিক প্রোগ্রামিং করে অন্যান্য
              প্রথাগত object-orented প্রোগ্রামিং ল্যাঙ্গুয়েজ যেখানে তারা
              'class' এবং 'inheritance' keyword ব্যবহার করে | Javascript class
              ভিত্তিক প্রোগ্রামিং এবং অন্যান্য ঐতিহ্যগত class ভিত্তিক
              প্রোগ্রামিং ভাষার সংস্করণ একই ধারণার সাথে কাজ করে কিন্তু ঠিক একই
              রকম কাজ করে না। syntax, এবং এটি কিভাবে কাজ করে। জাভাস্ক্রিপ্টের
              class ভিত্তিক প্রোগ্রামিং সংস্করণের সুবিধা এবং অসুবিধা নিয়েও
              বিতর্ক রয়েছে | So, the core idea of Prototypal Inheritance is
              that an object can point to another object and inherit all its
              properties. The main purpose is to allow multiple instances of an
              object to share common properties, hence, the Singleton Pattern.
            </p>
          </li>
          <li className="mb-5">
            <h2 className="text-xl font-bold mb-2">
              3. Why you do not set the state directly in React. For example, if
              you have const [products, setProducts] = useState([]). Why you do
              not set products = [...] instead, you use the setProducts
            </h2>
            <p>
            * নিম্নলিখিত কারণগুলির কারণে একজনকে কখনই সরাসরি state  আপডেট করা উচিত নয়:
            (i) If you update it directly, calling the setState() afterward may just replace the update you made.
            (ii)When you directly update the state, it does not change this.state immediately. Instead, it creates a pending state transition, and accessing it after calling this method will only return the present value.
            (iii)You will lose control of the state across all components.
            </p>
          </li>
          <li className="mb-5">
            <h2 className="text-xl font-bold mb-2">
              4. You have an array of products. Each product has a name, price,
              description, etc. How will you implement a search to find products
              by name?
            </h2>
            <p>
                <textarea name="" id="" cols="50" rows="10" value={answerQus}>
              
                </textarea>      
            </p>
          </li>
          <li className="mb-5">
            <h2 className="text-xl font-bold mb-2">
              5. What is a unit test? Why should write unit tests?
            </h2>
            <p>
            A unit test typically comprises of three stages: plan, cases and scripting and the unit test itself. In the first step, the unit test is prepared and reviewed. The next step is for the test cases and scripts to be made, then the code is tested.

        Test-driven development requires that developers first write failing unit tests. Then they write code and refactor the application until the test passes. TDD typically results in an explicit and predictable code base.
            </p>
          </li>
        </ul>
      </div>
      <Footer />
    </>
  );
};

export default Blogs;
