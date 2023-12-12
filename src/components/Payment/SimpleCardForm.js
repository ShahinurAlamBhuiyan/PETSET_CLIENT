import React, { useState } from 'react';
import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js';
import { useNavigate } from 'react-router-dom';

const SimpleCardForm = ({ handlePayment }) => {
    const stripe = useStripe();
    const elements = useElements();
    const [paymentError, setPaymentError] = useState(null);
    const [paymentSuccess, setPaymentSuccess] = useState(false);
    const [processing, setProcessing] = useState("");

    const navigate = useNavigate();

    const handleSubmit = async (event) => {
        event.preventDefault();
        setProcessing(true);
        if (!stripe || !elements) {
            return;
        }

        const cardElement = elements.getElement(CardElement);

        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: 'card',
            card: cardElement,
        });

        if (error) {
            setPaymentError(error.message)
            setPaymentSuccess(null);
            console.log(error);
        } else {
            setPaymentSuccess(true)
            setPaymentError(null);
            handlePayment(paymentMethod.id)
            setProcessing(false);
        }
    };
    if (paymentSuccess) {
        alert(
            'Great! Your order has been saved!'
        )
        navigate('/store')
    }

    return (
        <div >
            <form onSubmit={handleSubmit}>
                {/* <div className=""> */}
                <CardElement id="card-element" />
                {/* </div> */}

                <hr class="my-4" />

                <button class="w-100 btn btn-primary btn-lg" type="submit"><span>{processing ? "Processing..." : "Continue to Checkout"}</span></button>
            </form >
            {
                paymentError && <p style={{ fontSize: '20px', fontWeight: 'bold', color: 'red' }}>{paymentError}</p>
            }
            {
                paymentSuccess && <p style={{ fontSize: '20px', fontWeight: 'bold', color: 'green' }}>Your Payment is successful</p>
            }
        </div>
    );
};
export default SimpleCardForm;