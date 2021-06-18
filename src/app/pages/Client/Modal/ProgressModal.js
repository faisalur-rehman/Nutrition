import React from "react";
import {
  Button,
  Modal,
  Form,
  ButtonGroup,
  ButtonToolbar,
} from "react-bootstrap";
import "../Profile.css";
const ProgressModal = (props) => {
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
        <div className="d-flex justify-content-center">
          <ButtonToolbar aria-label="Toolbar with button groups">
            <ButtonGroup size="sm" className="mr-2">
              <Button variant="outline-primary">Front</Button>
              <Button variant="outline-primary">Side</Button>
              <Button variant="outline-primary">Back</Button>
            </ButtonGroup>
          </ButtonToolbar>
        </div>
        <div className="file-upload profile-file">
          <i className="fas fa-file-upload" style={{}}></i>
          <br />
          <input type="file" name="file" />
        </div>
        <div className="text-center">
          <Button variant="outline-primary">Upload</Button>
        </div>
      </Modal.Body>
    </Modal>
  );
};

export default ProgressModal;
