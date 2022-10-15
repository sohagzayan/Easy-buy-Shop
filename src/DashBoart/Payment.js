import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import Cookies from "js-cookie";
import React, { useState } from "react";
import { useQuery } from "react-query";
import { useParams } from "react-router-dom";
import Loading from "../components/Loading/Loading";
import CheckoutForm from "./CheckoutForm";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import { ThreeCircles } from "react-loader-spinner";

const stripePromise = loadStripe(
  "pk_test_51L3WmdExWmVGpYimsObJZFAagSpnRbMSgsvXy3OqLM6W2fO5JZYQR6Ohbmtg5uMkhzu8inyKXQ8x0KJzTSPCIFug00yK3BzfAk"
);

const Payment = () => {
  const { id } = useParams();
  const [processing, setProcessing] = useState(false);
  const token = Cookies.get("token");

  const { isLoading, error, data } = useQuery(["orderSingle", id], () =>
    fetch(`http://localhost:5000/api/v1/purchase/${id}`, {
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
        {processing ? (
          <div className="fixed bg-[#00000046] w-full h-screen top-0 left-0 right-0 z-50 flex items-center justify-center">
            <ThreeCircles
              height="100"
              width="100"
              color="#008aff"
              wrapperStyle={{}}
              wrapperClass=""
              visible={true}
              ariaLabel="three-circles-rotating"
              outerCircleColor=""
              innerCircleColor=""
              middleCircleColor=""
            />
          </div>
        ) : null}

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
              <h3 className=" mb-2">Product Quantity : {data?.orderAmount}</h3>
              <h2 className="font-semibold text-xl mb-2">
                Price : ${data?.price}
              </h2>
              <h2 className="font-semibold text-xl">
                Total Price : ${data?.totalPrice}
              </h2>
            </div>
          </div>
          <div className="p-8 bg-[#fff] rounded-md border-[2px] border-own-primary">
            <div className="">
              <h2 className="card-title">Card title!</h2>
              <Elements stripe={stripePromise}>
                <CheckoutForm
                  processing={processing}
                  setProcessing={setProcessing}
                  data={data}
                />
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
