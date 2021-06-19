import React from "react";

import { Form, Col, Button } from "react-bootstrap";

const NutritionForm = () => {
  return (
    <div style={{ width: "100%", margin: "auto" }}>
      <Form>
        <Form.Row>
          <Form.Group as={Col} controlId="formGridState">
            <Form.Label>Item Name*</Form.Label>
            <Form.Control placeholder="First Name" />
          </Form.Group>
        </Form.Row>

        <Form.Row>
          <Form.Group as={Col} controlId="formGridZip">
            <Form.Label>Serving Size*</Form.Label>

            <Form.Control type="number" placeholder="Date" />
          </Form.Group>
          <Form.Group as={Col} controlId="formGridZip">
            <Form.Label>Unit Measurement*</Form.Label>

            <Form.Control as="select">
              <option selected disabled>
                Select
              </option>

              <option>Gram</option>
              <option>KG</option>
              <option>Cup</option>
              <option>Gallon</option>
            </Form.Control>
          </Form.Group>
          <Form.Group as={Col} controlId="formGridZip">
            <Form.Label>Calories*</Form.Label>

            <Form.Control placeholder="Calories" />
          </Form.Group>
        </Form.Row>
        <div className="text-center">
          <Button variant="outline-primary">Create</Button>
        </div>
      </Form>
    </div>
  );
};

export default NutritionForm;
