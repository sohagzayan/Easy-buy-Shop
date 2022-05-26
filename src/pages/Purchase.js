import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import BuyModal from "../components/BuyModal/BuyModal";
import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";

const MF = "https://tranquil-shelf-42201.herokuapp.com/upload/"
const Purchase = () => {
    const [singleData  , setSingleData] = useState({})
    const [parsesError , setParsesError] = useState('')
    const { image, name, details, price, quantity, minimumOrder, _id } = singleData
    const { id } = useParams();
    useEffect(()=>{
        const getData = async ()=>{
            await axios.get(`https://tranquil-shelf-42201.herokuapp.com/api/tools/${id}`)
            .then(data => setSingleData(data.data))
            
        }
        getData()
  
    },[])
    
    const minimumPeress = parseInt(minimumOrder)

    // const rsult = parseInt(minimumOrder) * parseInt(price)
    const [yourQuantity , setYourQuantity] = useState(minimumPeress)
    // const [totalPrice , setTotalPrice] = useState(0)
    useEffect(()=>{
      setYourQuantity(minimumPeress)
    },[minimumPeress])

 const handleQuntity = (e)=>{
    const re = /^[0-9\b]+$/;
    if (e.target.value === "" || re.test(e.target.value)) {
      setYourQuantity(e.target.value);   
    }
 }

      useEffect(()=>{
        if(yourQuantity < minimumPeress){
          setParsesError(`Please Your minimum Order [ ${minimumOrder} ]`)
        }else if(yourQuantity > parseInt(quantity)){
          setParsesError(`Please Your maximum Order [ ${quantity} ]`)
        }
        else{
          setParsesError('')
        }
        
      },[yourQuantity])

  return (
    <>
      <Header />
      <div className="mt-7 container mx-auto px-8">
        <div class="lg:card-side bg-base-100 shadow-md">
          <img className="max-w-sm px-5 mb-3" src={image ? MF + image : null} alt="Album" />

          <div class="px-5">
            <h2 class="card-title mb-2 text-primary font-bold">{name}</h2>
            <p className="font-light">{details}</p>
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
              <h2 className="text-3xl mt-2">
                Order Details
              </h2>
              <hr />
             
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
                <p className="mt-2 font-bold text-primary">Total Price : {yourQuantity * parseInt(price)} </p>
            
            </div>
            <p className="text-xl text-secondary">{parsesError}</p>
            <div class="flex pb-5 justify-end">
              <label for="my-modal-6" class={parsesError ? "btn bg-slate-400 font-bold text-white pointer-events-none  " : "btn btn-secondary font-bold text-white "}>Buy Now</label>
              <BuyModal yourQuantity={yourQuantity} price={price} />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Purchase;
