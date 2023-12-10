
import axios from 'axios';
import React, { useContext, useState } from 'react';
import { Form, Button, Card, Container, Row, Col } from 'react-bootstrap';
import { Link, useLocation, useNavigate } from 'react-router-dom';

const SignInPage = () => {
  const location = useLocation()
  const navigate = useNavigate()

  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Send a POST request to the sign-in API
      const res = await axios.post("http://localhost:8800/sign-in", formData)
      sessionStorage.setItem('user', JSON.stringify(res.data[0]))
      const redirectPath = (location.state && location.state.from && location.state.from !== '/sign-in') ? (location.state.from) : '/';
      navigate(redirectPath)
      window.location.reload(); // bug
    } catch (error) {
      console.log(error.response.data)
      alert(error.response.data)
    }

    // Reset form after submission
    setFormData({
      email: '',
      password: '',
    });
  };

  return (
    <Container>
      <Row className="justify-content-md-center mt-5">
        <Col md={6}>
          <Card>
            <Card.Body>
              <Card.Title className="text-center">Sign In</Card.Title>
              <Form onSubmit={handleSubmit}>
                <Form.Group controlId="formEmailSignIn">
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

                <Form.Group controlId="formPasswordSignIn">
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

                <Button variant="primary" type="submit" className="mt-3">
                  Sign In
                </Button>
              </Form>

              <div className="mt-3 text-center">
                <span>Don't have an account?</span>{' '}
                <Link to="/sign-up">Sign Up</Link>
              </div>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default SignInPage;
