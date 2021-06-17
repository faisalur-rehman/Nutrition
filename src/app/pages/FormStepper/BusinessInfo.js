import React from "react";
import { Form, Col } from "react-bootstrap";

import "./Forms.css";

const BusinessInfo = () => {
  return (
    <>
      <h2>Now to add some style</h2>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <div style={{ width: "40%" }}>
          <Form.Row>
            <Form.Group as={Col} controlId="exampleForm.ControlSelect1">
              <Form.Label>Theme</Form.Label>
              <Form.Control as="select">
                <option>Original</option>
                <option>Torque</option>
                <option>Force</option>
              </Form.Control>
            </Form.Group>
          </Form.Row>
          <Form.Row>
            <Form.Group as={Col} controlId="formGridZip">
              <Form.Label>Main Color</Form.Label>
              <Form.Control type="color" value="#ff0000" />
            </Form.Group>
          </Form.Row>
          <Form.Row>
            <Form.Group as={Col} controlId="formGridZip">
              <Form.Label>Secondary Color</Form.Label>
              <Form.Control type="color" value="#fff" />
            </Form.Group>
          </Form.Row>
        </div>
        <div className="file-upload">
          <i class="fas fa-file-upload"></i>
          <br />
          <input type="file" name="file" />
        </div>
      </div>
    </>
  );
};

export default BusinessInfo;
