import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import Cookies from "js-cookie";
import React from "react";
import { useQuery } from "react-query";
import { useParams } from "react-router-dom";
import Loading from "../components/Loading/Loading";
import CheckoutForm from "./CheckoutForm";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
const stripePromise = loadStripe(
  "pk_test_51L3WmdExWmVGpYimsObJZFAagSpnRbMSgsvXy3OqLM6W2fO5JZYQR6Ohbmtg5uMkhzu8inyKXQ8x0KJzTSPCIFug00yK3BzfAk"
);

const Payment = () => {
  const { id } = useParams();
  const token = Cookies.get("token");
  const { isLoading, error, data } = useQuery(["orderSingle", id], () =>
    fetch(`https://easy-buy.onrender.com/api/v1/purchase/${id}`, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }).then((res) => res.json())
  );

  if (isLoading) {
    return <Loading />;
  }

  console.log(data);

  return (
    <>
      <Header />
      <div className="px-4 mt-20">
        <div className="container_c mx-auto  text-own-secondary rounded-md">
          <h2 className="text-own-secondary dark:text-own-white text-2xl font-semibold mb-10 underline text-center">
            Conform You Payment
          </h2>
          <div className=" mb-3 text-own-secondary dark:text-own-white">
            <div className="">
              <h2 className="card-title  font-bold mb-2">
                Hello , <span className="text-own-primary">{data.name}</span>
              </h2>
              <span>
                you Order on
                <span className="text-own-primary font-semibold mb-2 inline-block ">
                  {data?.date}
                </span>{" "}
                please payment your Order
              </span>
              <h3 className=" mb-2">Product Quantity : {data.orderAmount}</h3>
              <h2 className="font-semibold text-xl">Price : ${data.price}</h2>
            </div>
          </div>
          <div className="p-8 bg-[#fff] rounded-md border-[2px] border-own-primary">
            <div className="">
              <h2 className="card-title">Card title!</h2>
              <Elements stripe={stripePromise}>
                <CheckoutForm data={data} />
              </Elements>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Payment;
