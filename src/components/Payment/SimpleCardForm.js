import React, { useEffect, useState } from 'react';
import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2'
import bkashLogo from '../../assets/bkash_payment.png'
import { Modal, Button } from 'react-bootstrap';

const SimpleCardForm = ({ handlePayment, paymentMethod, paymentFor }) => {
    const stripe = useStripe();
    const elements = useElements();
    const [paymentError, setPaymentError] = useState(null);
    const [paymentSuccess, setPaymentSuccess] = useState(false);
    const [processing, setProcessing] = useState("");
    const [modalShow, setModalShow] = useState(false);

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

    const generateBkashId = () => {
        const timestamp = new Date().getTime();

        const uniqueID = `${timestamp}bkash`;

        return uniqueID;
    }

    const handleBkashPayment = () => {
        handlePayment(generateBkashId())
        setProcessing(false);
        setPaymentSuccess(true)
        setPaymentError(null);
    }

    useEffect(() => {
        if (paymentSuccess && !processing) {
            Swal.fire({
                title: "Congratulation!",
                text: "Your order has been saved!",
                icon: "success"
            });
            if (paymentFor === 'product') {
                navigate('/orders')
            } else {
                navigate('/hostel-orders')
            }
        } else if (!processing && paymentError) {
            alert(paymentError)
        }
    }, [paymentSuccess, paymentError, processing])


    return (
        <div >
            <form onSubmit={handleSubmit}>
                <CardElement id="card-element" />
                <hr className="my-4" />
                <button disabled={paymentMethod === 'credit' ? false : true} className="w-100 btn btn-primary btn-lg" type="submit">Order</button>
                <div className='mt-2'>
                    <img onClick={() => setModalShow(true)} style={{ cursor: 'pointer', opacity: `${(paymentMethod === 'bKash') ? 1 : 0.5}` }} width={400} height={110} src={bkashLogo} alt="" />
                </div>
                <div >
                    <Modal
                        show={modalShow}
                        onHide={() => setModalShow(false)}
                        size="md"
                        aria-labelledby="contained-modal-title-vcenter"
                        centered

                    >
                        <Modal.Header closeButton>
                            <Modal.Title id="contained-modal-title-vcenter">
                                <img width={450} height={110} src={bkashLogo} alt="" />
                            </Modal.Title>
                        </Modal.Header>
                        <Modal.Body style={{ backgroundColor: 'rgb(189, 27,98)', color: 'white', flexDirection: 'column' }} className='centering_items_flex'>
                            <small>Your bKash Account number</small>
                            <input type="number" placeholder='e.g 01XXXXXXXXX' />
                        </Modal.Body>
                        <Modal.Footer className='centering_items_flex' style={{ justifyContent: 'center' }}>
                            <Button style={{ backgroundColor: 'gray', border: 'none' }} onClick={handleBkashPayment}>Confirm</Button>
                            <Button style={{ backgroundColor: 'gray', border: 'none' }} onClick={() => setModalShow(false)}>Close</Button>
                        </Modal.Footer>
                    </Modal>
                </div>
            </form >
        </div>
    );
};
export default SimpleCardForm;