import React from "react";
import { Button, Modal, Form } from "react-bootstrap";
import { Link } from "react-router-dom";

const ProgramModal = (props) => {
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
        <Form>
          <Form.Group controlId="formBasicEmail">
            <Form.Label>Title</Form.Label>
            <Form.Control type="text" placeholder="Enter name" />
          </Form.Group>
        </Form>
        <div className="text-center">
          <Link to="program-detail">
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

export default ProgramModal;
