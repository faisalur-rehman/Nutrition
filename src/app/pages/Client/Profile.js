import React from "react";
import { Button, Modal, Form, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./Profile.css";

const Profile = (props) => {
  return (
    <Modal
      {...props}
      size="md"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header>
        <Modal.Title id="contained-modal-title-vcenter">
          {props.title}
        </Modal.Title>
        <i
          onClick={props.onHide}
          className="fas fa-times"
          style={{ cursor: "pointer" }}
        ></i>
      </Modal.Header>
      <Modal.Body>
        <div className="avatar">
          <h3>MP</h3>
          <div>
            <Button variant="outline-info" className="avatar-btn">
              Avatar
            </Button>
          </div>
        </div>
        <Form>
          <Form.Row>
            <Form.Group as={Col} controlId="formGridState">
              <Form.Label>First Name*</Form.Label>
              <Form.Control placeholder="First Name" />
            </Form.Group>

            <Form.Group as={Col} controlId="formGridZip">
              <Form.Label>Last Name*</Form.Label>
              <Form.Control placeholder="Last Name" />
            </Form.Group>
          </Form.Row>
          <Form.Row>
            <Form.Group as={Col} controlId="formGridState">
              <Form.Label>Date of Birth</Form.Label>
              <Form.Row>
                <Form.Group as={Col} controlId="formGridZip">
                  <Form.Control type="number" placeholder="Date" />
                </Form.Group>
                <Form.Group as={Col} controlId="formGridZip">
                  <Form.Control as="select">
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
                <Form.Group as={Col} controlId="formGridZip">
                  <Form.Control placeholder="YYYY" />
                </Form.Group>
              </Form.Row>
            </Form.Group>

            <Form.Group as={Col} controlId="formGridZip">
              <Form.Label>Gender*</Form.Label>
              <Form.Control as="select">
                <option selected disabled>
                  Select
                </option>
                <option>Male</option>
                <option>Female</option>
              </Form.Control>
            </Form.Group>
          </Form.Row>
          <Form.Group controlId="exampleForm.ControlTextarea1">
            <Form.Label>Goal</Form.Label>
            <Form.Control as="textarea" rows="3" />
          </Form.Group>
        </Form>
        <div className="text-center">
          <Link to="workout-detail">
            <Button
              color="primary"
              className="text-center"
              onClick={props.onHide}
              style={{ borderRadius: 25 }}
            >
              Create
            </Button>
          </Link>
        </div>
      </Modal.Body>
    </Modal>
  );
};

export default Profile;
