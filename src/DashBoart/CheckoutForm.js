import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import Cookies from "js-cookie";
import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
import swal from "sweetalert";
import LoadingSpener from "../components/LoadingSpener/LoadingSpener";

const CheckoutForm = ({ data, setProcessing, processing }) => {
  const [cardError, setCardError] = useState("");
  const [success, setSuccess] = useState("");
  const [succesTransationId, setSuccesTransationId] = useState("");
  const [clientSecret, setClientSecret] = useState("");
  const stripe = useStripe();
  const elements = useElements();
  const token = Cookies.get("token");
  const [loading, setLoading] = useState(false);

  const { _id, price, email, name } = data;

  useEffect(() => {
    fetch("https://easy-buy-shop-server.onrender.com/api/v1/payment", {
      method: "POST",
      body: JSON.stringify({
        price,
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    })
      .then((res) => res.json())
      .then((info) => {
        if (info?.clientSecret) {
          setClientSecret(info.clientSecret);
        }
      });
  }, [price]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setSuccess("");
    if (!stripe || !elements) {
      return;
    }
    const card = elements.getElement(CardElement);
    if (card === null) {
      return;
    }
    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card,
    });

    if (error) {
      setCardError(error.message);
    } else {
      setCardError("");
    }

    setProcessing(true);

    const { paymentIntent, error: intentError } =
      await stripe.confirmCardPayment(clientSecret, {
        payment_method: {
          card: card,
          billing_details: {
            name: name,
            email: email,
          },
        },
      });

    if (intentError) {
      setCardError(intentError.message);
      setProcessing(false);
      // console.log(intentError);
    } else {
      setCardError("");
      setSuccesTransationId(paymentIntent.id);
      setSuccess("Cong Your Payment is completed");
      const paymnetInfo = {
        transactionId: paymentIntent.id,
        productId: _id,
      };
      fetch(`https://easy-buy-shop-server.onrender.com/api/v1/payment/${_id}`, {
        method: "PUT",
        headers: {
          "content-type": "application/json",
          authorization: `Bearer ${token}`,
        },

        body: JSON.stringify({
          transactionId: paymentIntent.id,
          productId: _id,
          payed: "complete",
        }),
      })
        .then((res) => res.json())
        .then((data) => {
          setProcessing(false);
          toast.success("Your paymnet Successfully Complete ", {
            position: toast.POSITION.TOP_CENTER,
            autoClose: "5000",
          });
        });
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit} className="mb-5 ">
        <CardElement />
        <button
          type="submit"
          className="bg-own-primary text-own-white  btn mt-2"
          disabled={!stripe || !clientSecret}
        >
          Pay
        </button>
      </form>
      <p className="text-secondary">{cardError}</p>
      <div className="">
        <p className="text-own-primary">{success}</p>
        {succesTransationId && (
          <h2 className="text-green-500 font-bold text-xl">
            Your TrazationId : {succesTransationId}
          </h2>
        )}
      </div>
    </>
  );
};

export default CheckoutForm;
