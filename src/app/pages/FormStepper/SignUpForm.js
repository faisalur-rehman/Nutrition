import React from "react";
import { Form, Col } from "react-bootstrap";

const SignUpForm = () => {
  return (
    <>
      <Col sm={1}></Col>
      <Col sm={10}>
        <Form.Label>Let’s finish your account setup!</Form.Label>
        <Form.Row>
          <Form.Group as={Col} controlId="formGridCity">
            <Form.Label>Business Name*</Form.Label>
            <Form.Control placeholder="Business Name" />
          </Form.Group>

          <Form.Group as={Col} controlId="formGridZip">
            <Form.Label>Sub Domain</Form.Label>
            <Form.Control placeholder="pure-fitness-trainer" />
          </Form.Group>
        </Form.Row>
        <Form.Row>
          <Form.Group as={Col} controlId="formGridCity">
            <Form.Label>Country</Form.Label>
            <Form.Control placeholder="England" />
          </Form.Group>

          <Form.Group as={Col} controlId="formGridState">
            <Form.Label>Time Zone</Form.Label>
            <Form.Control as="select">
              <option>Choose...</option>
              <option>...</option>
            </Form.Control>
          </Form.Group>

          <Form.Group as={Col} controlId="formGridZip">
            <Form.Label>Phone Number</Form.Label>
            <Form.Control type="number" placeholder="12345678" />
          </Form.Group>
        </Form.Row>
      </Col>
      <Col sm={1}></Col>
    </>
  );
};

export default SignUpForm;
