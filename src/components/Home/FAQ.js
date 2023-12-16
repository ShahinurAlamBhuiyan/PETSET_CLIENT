import React from 'react';
import Accordion from 'react-bootstrap/Accordion';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const FAQ = () => {
  return (
    <Container className="mt-5 text-center">
      <Row>
        <Col md={{ span: 8, offset: 2 }}>
          <Accordion>
            {/* Question 1 */}
            <Card>
              <Accordion.Item eventKey="0">
                <Accordion.Header className="accordion-header">What services does PetSet offer?</Accordion.Header>
                <Accordion.Body className="accordion-body">
                  PetSet offers a range of services including memory storing, lost pet assistance, gourmet cuisine, grooming, training, and more. Explore our comprehensive offerings for a tailored pet care experience.
                </Accordion.Body>
              </Accordion.Item>
            </Card>

            {/* Question 2 */}
            <Card>
              <Accordion.Item eventKey="1">
                <Accordion.Header className="accordion-header">How can I locate my lost pet with PetSet?</Accordion.Header>
                <Accordion.Body className="accordion-body">
                  PetSet provides advanced lost pet search features. Contact our team, and we'll leverage our network and technology to help locate your missing pet quickly and ensure a reassuring reunion.
                </Accordion.Body>
              </Accordion.Item>
            </Card>

            {/* Question 3 */}
            <Card>
              <Accordion.Item eventKey="2">
                <Accordion.Header className="accordion-header">Can I store memories of my pet with PetSet?</Accordion.Header>
                <Accordion.Body className="accordion-body">
                  Yes, PetSet offers a digital memory storing service. Capture and preserve precious moments, creating a timeless collection of joyous memories to treasure for years to come.
                </Accordion.Body>
              </Accordion.Item>
            </Card>
          </Accordion>
        </Col>
      </Row>
    </Container>
  );
};

export default FAQ;
