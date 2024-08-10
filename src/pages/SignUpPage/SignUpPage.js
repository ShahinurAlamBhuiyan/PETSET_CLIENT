
import axios from 'axios';
import React, { useState } from 'react';
import { Form, Button, Card, Container, Row, Col } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2'


const SignUpPage = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    role: 'user',
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    image_URL: 'https://www.westridgehilton.org.in/img/dd.jpg'
  });

  const [confirmPass, setConfirmPass] = useState('')

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (confirmPass === formData.password) {
      try {
        await axios.post("https://petset-api.onrender.com/sign-up", formData)
        Swal.fire({
          title: "Congratulation!",
          text: "Sign-up successfully!",
          icon: "success"
        });
        navigate('/sign-in');
      } catch (error) {
        alert(error.response.data)
      }
      setFormData({
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        role: '',
        image_URL: ''
      });
      setConfirmPass('');

    } else {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "password not matched!"
      });
    }

  };

  return (
    <Container className='pb-5'>
      <Row className="justify-content-md-center mt-5">
        <Col md={6}>
          <Card>
            <Card.Body>
              <Card.Title className="text-center">Sign Up</Card.Title>
              <Form onSubmit={handleSubmit}>
                <Form.Group controlId="formFirstName">
                  <Form.Label>First Name</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Enter first name"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleInputChange}
                    required
                  />
                </Form.Group>

                <Form.Group controlId="formLastName">
                  <Form.Label>Last Name</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Enter last name"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleInputChange}
                    required
                  />
                </Form.Group>

                <Form.Group controlId="formEmail">
                  <Form.Label>Email address</Form.Label>
                  <Form.Control
                    type="email"
                    placeholder="Enter email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                  />
                </Form.Group>

                <Form.Group controlId="formPassword">
                  <Form.Label>Password</Form.Label>
                  <Form.Control
                    type="password"
                    placeholder="Password"
                    name="password"
                    value={formData.password}
                    onChange={handleInputChange}
                    required
                  />
                </Form.Group>

                <Form.Group controlId="formConfirmPassword">
                  <Form.Label>Confirm Password</Form.Label>
                  <Form.Control
                    type="password"
                    placeholder="Confirm Password"
                    name="confirmPassword"
                    value={confirmPass}
                    onChange={(e) => setConfirmPass(e.target.value)}
                    required
                  />
                </Form.Group>

                <Button variant="primary" type="submit" className="mt-3">
                  Sign Up
                </Button>
              </Form>
              <div className="mt-3 text-center">
                <span>Already have an account?</span>{' '}
                <Link to="/sign-in">Sign In</Link>
              </div>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default SignUpPage;
