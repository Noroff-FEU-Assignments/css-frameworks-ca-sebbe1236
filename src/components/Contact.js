import React from "react";
import { Container } from "react-bootstrap";
import { Form } from "react-bootstrap";
import { Row } from "react-bootstrap";
import { Col } from "react-bootstrap";
import { InputGroup } from "react-bootstrap";
import { FormControl } from "react-bootstrap";
import Button from "react-bootstrap/Button";
function Contact() {
  return (
    <>
      <div>
        <h1></h1>
        <Container>
          <Row xs={1} md={1} lg={2}>
            <Col className="Container_contactform">
              <Form>
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                  <Form.Label>Name</Form.Label>
                  <Form.Control type="email" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                  <Form.Label>Email</Form.Label>
                  <Form.Control type="email" />
                </Form.Group>
                <Form.Label htmlFor="basic-url">Your vanity URL</Form.Label>
                <InputGroup className="mb-3">
                  <InputGroup.Text id="basic-addon3">https://</InputGroup.Text>
                  <FormControl id="basic-url" aria-describedby="basic-addon3" />
                </InputGroup>
                <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                  <Form.Label>Message</Form.Label>
                  <Form.Control as="textarea" rows={7} />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                  <Form.Check type="checkbox" label="Allow us to sell your personal details to whomever we want" />
                </Form.Group>
                <div className="d-grid gap-2">
                  <Button variant="secondary" size="lg" classname="Contact_btn">
                    SUBMIT
                  </Button>{" "}
                </div>
              </Form>
            </Col>
            <Col className="text-lg-center text-md-center mt-5">
              <p>hello@yay.com</p>
              <p>123 456 7890</p>
              <p>123 Some Street Somewhere Some City 10000</p>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
}

export default Contact;
