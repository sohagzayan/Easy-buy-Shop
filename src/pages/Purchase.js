import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import BuyModal from "../components/BuyModal/BuyModal";
import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";

const Purchase = () => {
    const [singleData  , setSingleData] = useState({})
    const { image, name, details, price, quantity, minimumOrder, _id } = singleData
    const { id } = useParams();
    useEffect(()=>{
        const getData = async ()=>{
            await axios.get(`http://localhost:5000/api/tools/${id}`)
            .then(data => setSingleData(data.data))
            
        }
        getData()
        
    },[])
    
    const rsult = parseInt(minimumOrder) * parseInt(price)
    const [yourQuantity , setYourQuantity] = useState(0)
    const [totalPrice , setTotalPrice] = useState(1)
  

 const handleQuntity = (e)=>{
    const re = /^[0-9\b]+$/;
    if (e.target.value === "" || re.test(e.target.value)) {
      setYourQuantity(e.target.value);
    }
 }

 const handleDefaultInfo = async()=>{
     setYourQuantity(parseInt(minimumOrder))
     const total = yourQuantity * parseInt(price)
     //  console.log(total);
     console.log();
     console.log(yourQuantity);
     setTotalPrice(parseInt(price) * yourQuantity )
     console.log(totalPrice);
    }

  return (
    <>
      <Header />
      <div className="mt-20">
        <div class="lg:card-side bg-base-100 shadow-xl">
          <img className="max-w-sm p-7" src={image} alt="Album" />

          <div class="card-body">
            <h2 class="card-title text-primary font-bold">{name}</h2>
            <p>{details}</p>
            <div className="flex flex-col">
              <span className="text-lg text-primary ">
                Minimum Order :{" "}
                <span className="text-2xl font-bold text-secondary">
                  {minimumOrder}
                </span>
              </span>
              <span className="text-lg text-primary ">
                Available Quantity :{" "}
                <span className="text-2xl font-bold text-secondary">
                  {quantity}
                </span>
              </span>
            </div>
            <h4 className="text-2xl font-bold text-secondary ">
              Price : <span>{price}</span>
            </h4>
            <div>
              <h2 className="text-3xl border-b-2    border-primary">
                Order Details
              </h2>
             
                <label class="label">
                  <span class="label-text">Your Order Amount</span>
                </label>
                <input
                  type="number"
                  placeholder="Amount quantity"
                  class="input input-bordered w-full max-w-xs"
                  value={yourQuantity}
                  onChange={handleQuntity}
                />
                <p className="mt-2 font-bold text-secondary">Total Price : {totalPrice}</p>
                <button onClick={handleDefaultInfo} class="btn block btn-secondary mt-3 btn-sm text-white">Set Default Info</button>
            
            </div>
            <div class="card-actions justify-end">
              <label for="my-modal-6" class="btn btn-secondary font-bold text-white"> Buy Now</label>
              <BuyModal />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Purchase;
