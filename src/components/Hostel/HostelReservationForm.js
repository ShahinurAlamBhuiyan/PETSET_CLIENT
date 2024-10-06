import React, { useContext, useState } from 'react';
import './Hostel.css';
import { Form, Button, Row, Col } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2'; // Import SweetAlert2
import { HostelContext } from '../../Providers/HostelCheckoutProvider';

const HostelReservationForm = () => {
    const { setHostelBookingData } = useContext(HostelContext);
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        petType: '',
        guests: 2,
        checkIn: '',
        checkOut: '',
        totalAmount: 0  // Adding totalAmount field
    });

    const [errors, setErrors] = useState({});
    const PER_DAY_PRICE = 700;  // Define price per day per pet

    // Form validation function
    const validateForm = () => {
        const newErrors = {};
        const { checkIn, checkOut } = formData;

        if (!formData.petType) {
            newErrors.petType = 'Please select a pet type.';
        }
        if (!formData.guests || formData.guests <= 0) {
            newErrors.guests = 'Please enter a valid number of guests.';
        }
        if (!checkIn) {
            newErrors.checkIn = 'Please select a check-in date.';
        }
        if (!checkOut) {
            newErrors.checkOut = 'Please select a check-out date.';
        }
        if (checkIn && checkOut && new Date(checkOut) < new Date(checkIn)) {
            newErrors.checkOut = 'Check-out date cannot be earlier than check-in date.';
        }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    // Calculate total amount
    const calculateTotalAmount = () => {
        const { guests, checkIn, checkOut } = formData;

        // Calculate the difference in time (milliseconds)
        const checkInDate = new Date(checkIn);
        const checkOutDate = new Date(checkOut);
        const timeDifference = checkOutDate.getTime() - checkInDate.getTime();

        // Calculate the number of days
        const days = timeDifference / (1000 * 3600 * 24);

        // Calculate total amount
        return guests * days * PER_DAY_PRICE;
    };

    // Handle input changes
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    // Handle form submission
    const handleSubmit = (e) => {
        e.preventDefault();
        if (validateForm()) {
            // Calculate the total amount before submitting
            let totalAmount = calculateTotalAmount();
            if (totalAmount === 0) totalAmount = 700;

            // Update formData with totalAmount
            const updatedFormData = { ...formData, totalAmount };

            // Display SweetAlert with order details
            Swal.fire({
                title: 'Confirm Your Booking',

                html: `
                    <h3>Per Cat + Per Day = 700৳ </h3>
                    <p><strong>Pet Type:</strong> ${updatedFormData.petType}</p>
                    <p><strong>Guests:</strong> ${updatedFormData.guests}</p>
                    <p><strong>Check-in Date:</strong> ${updatedFormData.checkIn}</p>
                    <p><strong>Check-out Date:</strong> ${updatedFormData.checkOut}</p>
                    <p><strong>Total Amount:</strong> ${updatedFormData.totalAmount} Taka</p>
                `,
                icon: 'info',
                showCancelButton: true,
                confirmButtonText: 'Confirm',
                cancelButtonText: 'Cancel',
            }).then((result) => {
                if (result.isConfirmed) {
                    // If the user confirmed, save the data and navigate
                    setHostelBookingData(updatedFormData);
                    localStorage.setItem('hostelBookingData', JSON.stringify(updatedFormData));
                    navigate('/payment/hostel-payment');
                }
            });
        }
    };

    return (
        <div className='hostel-header-form mx-3 mt-4 mt-lg-0'>
            <Form className="bg-white shadow-lg p-5 rounded-lg" onSubmit={handleSubmit}>
                <h3 className="text-center mb-4">Online Reservation</h3>

                <Form.Group className="mb-3">
                    <Form.Label>Pet Type</Form.Label>
                    <Form.Control
                        as="select"
                        name="petType"
                        value={formData.petType}
                        onChange={handleChange}
                        isInvalid={!!errors.petType}
                    >
                        <option value="">Select Pet Type</option>
                        <option value="dog">Dog</option>
                        <option value="cat">Cat</option>
                    </Form.Control>
                    <Form.Control.Feedback type="invalid">
                        {errors.petType}
                    </Form.Control.Feedback>
                </Form.Group>

                <Form.Group className="mb-3">
                    <Form.Label>Guests</Form.Label>
                    <Form.Control
                        type="number"
                        name="guests"
                        value={formData.guests}
                        onChange={handleChange}
                        isInvalid={!!errors.guests}
                    />
                    <Form.Control.Feedback type="invalid">
                        {errors.guests}
                    </Form.Control.Feedback>
                </Form.Group>

                <Row className="mb-3">
                    <Form.Group as={Col}>
                        <Form.Label>Check-in</Form.Label>
                        <Form.Control
                            type="date"
                            name="checkIn"
                            value={formData.checkIn}
                            onChange={handleChange}
                            isInvalid={!!errors.checkIn}
                        />
                        <Form.Control.Feedback type="invalid">
                            {errors.checkIn}
                        </Form.Control.Feedback>
                    </Form.Group>

                    <Form.Group as={Col}>
                        <Form.Label>Check-out</Form.Label>
                        <Form.Control
                            type="date"
                            name="checkOut"
                            value={formData.checkOut}
                            onChange={handleChange}
                            isInvalid={!!errors.checkOut}
                        />
                        <Form.Control.Feedback type="invalid">
                            {errors.checkOut}
                        </Form.Control.Feedback>
                    </Form.Group>
                </Row>

                <Button variant="dark" type="submit" className="w-100">
                    Check Availability
                </Button>
            </Form>
        </div>
    );
}

export default HostelReservationForm;
