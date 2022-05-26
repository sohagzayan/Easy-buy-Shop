import {
    Elements
} from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import React from "react";
import { useQuery } from "react-query";
import { useParams } from "react-router-dom";
import Loading from '../components/Loading/Loading';
import CheckoutForm from './CheckoutForm';

const stripePromise = loadStripe('pk_test_51L3WmdExWmVGpYimsObJZFAagSpnRbMSgsvXy3OqLM6W2fO5JZYQR6Ohbmtg5uMkhzu8inyKXQ8x0KJzTSPCIFug00yK3BzfAk');

const Payment = () => {
  const { id } = useParams();

  const { isLoading, error, data } = useQuery(["orderSingle", id], () =>
    fetch(`http://localhost:5000/api/purchase/${id}`,{
        method : "GET",
        headers : {
            authorization : `Bearer ${localStorage.getItem('accessToken')}`
        }
    }).then(
      (res) => res.json()
    )
  );
    if(isLoading){
        return <Loading />
    }    
//   console.log(data);
        
  return (
    <>
      <div className="px-4 mt-4">
        <div>
          <div class="card max-w-96 bg-base-100 shadow-xl mb-9">
            <div class="card-body">
              <h2 class="card-title text-secondary font-bold">hello , {data.name}</h2>
                <span>you Order on {data.date} . please payment your Order .</span>
                <h3>Order amount : {data.orderAmount}</h3>
                <h2>Price : ${data.price}</h2>
            </div>
          </div>
          <div class="card max-w-96 bg-base-100 shadow-xl">
            <div class="card-body">
              <h2 class="card-title">Card title!</h2>
              <Elements stripe={stripePromise}>
                    <CheckoutForm data={data} />
            </Elements>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Payment;
