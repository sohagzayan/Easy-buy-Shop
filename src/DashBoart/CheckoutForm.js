import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import React, { useEffect, useState } from 'react';



const CheckoutForm = ({data}) => {
    const [cardError , setCardError] = useState('')
    const [success , setSuccess] = useState('')
    const [processing ,setPerocessing] = useState(false)
    const [succesTransationId , setSuccesTransationId] = useState('')
    const [clientSecret, setClientSecret] = useState('');
    const stripe = useStripe();
    const elements = useElements();

    const { _id, price , email , name } = data


    useEffect(()=>{
        
        fetch('http://localhost:5000/api/purchase/payment',{
            method: 'POST',
            body: JSON.stringify({
                price
            }),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            }
        })
        .then(res => res.json())
        .then(info => {
           if(info?.clientSecret){
            setClientSecret(info.clientSecret)
           }
        })
    
    },[price])

    
    const handleSubmit = async(e)=>{
        
        setSuccess('')
        e.preventDefault()
        if(!stripe || !elements){
            return;
        }         
        
        const card = elements.getElement(CardElement)
        if(card === null){
            return
        }
        const {error, paymentMethod} = await stripe.createPaymentMethod({
            type: 'card',
            card
          });
          
        if(error){
            setCardError(error.message)
        }else{
            setCardError('')
        }

        setPerocessing(true)

        const {paymentIntent, error : intentError} = await stripe.confirmCardPayment(
            clientSecret,
            {
              payment_method: {
                card: card,
                billing_details: {
                  name: name,
                  email : email,
                
                },
              },
            },
          );

          if(intentError){
            setCardError(intentError.message)
            setPerocessing(false)
            // console.log(intentError);
          }else{
            setCardError('')
            setSuccesTransationId(paymentIntent.id)
            setSuccess('Cong Your Payment is completed')
            const paymnetInfo = {
                transactionId : paymentIntent.id,
                productId : _id
            }
            fetch(`http://localhost:5000/api/purchase/${_id}`,{
                method : "PUT",
                headers : {
                    'content-type' : 'application/json',
                    'authorization' : `Bearer ${localStorage.getItem('accessToken')}`
                 },

                 body : JSON.stringify({transactionId : paymentIntent.id , productId : _id})
            }).then((res)=> res.json())
            .then(data => {
                setPerocessing(false)
                console.log(data)
            })

          }
    }
   

    return (
       <>
        <form onSubmit={handleSubmit}>
        <CardElement />
        <button type="submit" className='bg-primary btn mt-2' disabled={!stripe || !clientSecret}>
          Pay
        </button>
      </form>
        <p className='text-secondary'>{cardError}</p>
        <div className=''>
            <p className='text-green-400'>{success}</p>
            {
                succesTransationId &&
                <h2 className='text-green-500 font-bold text-xl'>Your TrazationId  {succesTransationId}</h2>

            }
        </div>
       </>
    );
};

export default CheckoutForm;