import React from "react";
import { Button, Modal, Form, Col } from "react-bootstrap";

const ContactModal = (props) => {
  return (
    <Modal
      {...props}
      size="md"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header>
        <Modal.Title id="contained-modal-title-vcenter">
          Add Contact
        </Modal.Title>
        <i
          onClick={props.onHide}
          className="fas fa-times"
          style={{ cursor: "pointer" }}
        ></i>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Group controlId="formBasicEmail">
            <Form.Label>First Name*</Form.Label>
            <Form.Control type="text" placeholder="Enter first name" />
            <Form.Label>Last Name*</Form.Label>
            <Form.Control type="text" placeholder="Enter last name" />
            <Form.Label>Email Address*</Form.Label>
            <Form.Control type="email" placeholder="Enter email address" />
            <Form.Label>Phone Number*</Form.Label>
            <Form.Control type="number" placeholder="Enter phone number" />
          </Form.Group>
          <Form.Group controlId="exampleForm.ControlSelect1">
            <Form.Label>Contact Type*</Form.Label>
            <Form.Control as="select">
              <option value="select" disabled selected>
                Select
              </option>
              <option>Client</option>
              <option>Manager</option>
              <option>Bla Bla</option>
            </Form.Control>
          </Form.Group>
          <Form.Group controlId="exampleForm.ControlSelect1">
            <Form.Label>Assign Contact*</Form.Label>
            <Form.Control as="select">
              <option value="select" disabled selected>
                Select
              </option>
              <option>Client 1</option>
              <option>Client 2</option>
              <option>Client 3</option>
            </Form.Control>
          </Form.Group>
          <Form.Group>
            <Form.Label>Gender*</Form.Label>
            <Form.Check type="radio" label="Male" name="formHorizontalRadios" />
            <Form.Check
              type="radio"
              label="Female"
              name="formHorizontalRadios"
            />
          </Form.Group>
          <Form.Label>Date of Birth</Form.Label>
          <Form.Row>
            <Form.Group as={Col} controlId="formGridCity">
              <Form.Control as="select">
                <option value="select" disabled selected>
                  Select
                </option>
                <option>1</option>
                <option>2</option>
                <option>3</option>
                <option>4</option>
                <option>5</option>
                <option>6</option>
                <option>7</option>
                <option>8</option>
                <option>9</option>
              </Form.Control>
            </Form.Group>

            <Form.Group as={Col} controlId="formGridState">
              <Form.Control as="select">
                <option value="select" disabled selected>
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

            <Form.Group as={Col} controlId="formGridZip">
              <Form.Control placeholder="YYYY" />
            </Form.Group>
          </Form.Row>
          <Form.Label>Client Weigth*</Form.Label>

          <Form.Row>
            <Form.Group as={Col} controlId="formGridCity">
              <Form.Control type="number"></Form.Control>
            </Form.Group>

            <Form.Group as={Col} controlId="formGridState">
              <Form.Control as="select">
                <option value="select" disabled selected>
                  Select
                </option>
                <option>Kilograms</option>
                <option>Pounds</option>
              </Form.Control>
            </Form.Group>
          </Form.Row>
          <Form.Label>Client Height*</Form.Label>

          <Form.Row>
            <Form.Group as={Col} controlId="formGridCity">
              <Form.Control type="number"></Form.Control>
            </Form.Group>

            <Form.Group as={Col} controlId="formGridState">
              <Form.Control as="select">
                <option value="select" disabled selected>
                  Select
                </option>
                <option>CM</option>
                <option>Inches</option>
              </Form.Control>
            </Form.Group>
          </Form.Row>
          <Form.Group>
            <Form.Label>Goal*</Form.Label>
            <Form.Control type="text" placeholder="Goal" />
          </Form.Group>
        </Form>
        <div className="text-center">
          <Button
            color="primary"
            className="text-center"
            onClick={props.onHide}
            style={{ borderRadius: 25 }}
          >
            Create
          </Button>
        </div>
      </Modal.Body>
    </Modal>
  );
};

export default ContactModal;
