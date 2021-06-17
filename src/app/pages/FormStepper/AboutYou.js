import React from "react";
import { Form, Col, Button } from "react-bootstrap";

import "./Forms.css";

const AboutYou = () => {
  return (
    <>
      <h2>Tell us about yourself!</h2>
      <div className="avatar">
        <i class="fas fa-user-circle"></i>
        <Button variant="outline-primary" className="avatar-button">
          Upload Avatar
        </Button>
      </div>
      <div>
        <div>
          <Form.Row>
            <Form.Group as={Col} controlId="exampleForm.ControlSelect1">
              <Form.Label>Gender*</Form.Label>
              <Form.Control as="select" placeholder="Please select">
                <option selected disabled>
                  Select
                </option>
                <option>Male</option>
                <option>Female</option>
              </Form.Control>
            </Form.Group>
            <Form.Group as={Col} controlId="exampleForm.ControlSelect1">
              <Form.Label>Date of Birth*</Form.Label>
              <Form.Row>
                <Form.Group as={Col} controlId="exampleForm.ControlSelect1">
                  <Form.Control type="number" placeholder="17" />
                </Form.Group>
                <Form.Group>
                  <Form.Control as="select" placeholder="Please select">
                    <option selected disabled>
                      Select
                    </option>
                    <option>January</option>
                    <option>February</option>
                    <option>March</option>
                    <option>April</option>
                    <option>May</option>
                    <option>June</option>
                    <option>July</option>
                    <option>August</option>
                    <option>September</option>
                    <option>October</option>
                    <option>November</option>
                    <option>December</option>
                  </Form.Control>
                </Form.Group>
                <Form.Group>
                  <Form.Control type="number" placeholder="1999" />
                </Form.Group>
              </Form.Row>
            </Form.Group>
          </Form.Row>
        </div>
      </div>
    </>
  );
};

export default AboutYou;
