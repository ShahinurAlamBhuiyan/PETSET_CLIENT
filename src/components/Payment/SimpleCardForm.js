import React, { useEffect, useState } from 'react';
import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2'

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

        if (!error) {
            setPaymentSuccess(true)
            setPaymentError(null);
            handlePayment(paymentMethod.id)
            setProcessing(false);
        } else {
            setPaymentError(error?.message)
        }

    };

    useEffect(() => {
        if (paymentSuccess && !processing) {
            Swal.fire({
                title: "Congratulation!",
                text: "Your order has been saved!",
                icon: "success"
            });
            navigate('/orders')
        } else if (!processing && paymentError) {
            alert(paymentError)
        }
    }, [paymentSuccess, paymentError, processing])


    return (
        <div >
            <form onSubmit={handleSubmit}>
                <CardElement id="card-element" />
                <hr className="my-4" />
                <button className="w-100 btn btn-primary btn-lg" type="submit">Order</button>
            </form >
        </div>
    );
};
export default SimpleCardForm;