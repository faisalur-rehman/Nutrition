import React from "react";

import { Form, Col, Button } from "react-bootstrap";

const WorkoutForm = () => {
  return (
    <div style={{ width: "100%", margin: "auto" }}>
      <Form>
        <Form.Row>
          <Form.Group as={Col} controlId="formGridState">
            <Form.Label>Exercise Name*</Form.Label>
            <Form.Control placeholder="Exercise Name" />
          </Form.Group>
        </Form.Row>

        <Form.Row>
          <Form.Group as={Col} controlId="formGridZip">
            <Form.Label>Type*</Form.Label>

            <Form.Control as="select">
              <option selected disabled>
                Select
              </option>

              <option>Strength</option>
              <option>Power Lifting</option>
              <option>Stretching</option>
              <option>Weight Lifting</option>
            </Form.Control>
          </Form.Group>
          <Form.Group as={Col} controlId="formGridZip">
            <Form.Label>Main Muscle Worked*</Form.Label>

            <Form.Control as="select">
              <option selected disabled>
                Select
              </option>

              <option>Biceps</option>
              <option>Triceps</option>
              <option>Chest</option>
              <option>Shoulders</option>
            </Form.Control>
          </Form.Group>
        </Form.Row>
        <Form.Row>
          <Form.Group as={Col} controlId="formGridZip">
            <Form.Label>Other Muscle Worked</Form.Label>

            <Form.Control as="select">
              <option selected disabled>
                Select
              </option>

              <option>Strength</option>
              <option>Power Lifting</option>
              <option>Stretching</option>
              <option>Weight Lifting</option>
            </Form.Control>
          </Form.Group>
          <Form.Group as={Col} controlId="formGridZip">
            <Form.Label>Equipment</Form.Label>

            <Form.Control as="select">
              <option selected disabled>
                Select
              </option>

              <option>Biceps</option>
              <option>Triceps</option>
              <option>Chest</option>
              <option>Shoulders</option>
            </Form.Control>
          </Form.Group>
        </Form.Row>
        <Form.Row>
          <Form.Group as={Col} controlId="formGridZip">
            <Form.Label>Mechanics Type</Form.Label>

            <Form.Control as="select">
              <option selected disabled>
                Select
              </option>

              <option>Strength</option>
              <option>Power Lifting</option>
              <option>Stretching</option>
              <option>Weight Lifting</option>
            </Form.Control>
          </Form.Group>
          <Form.Group as={Col} controlId="formGridZip">
            <Form.Label>Level</Form.Label>

            <Form.Control as="select">
              <option selected disabled>
                Select
              </option>

              <option>Biceps</option>
              <option>Triceps</option>
              <option>Chest</option>
              <option>Shoulders</option>
            </Form.Control>
          </Form.Group>
        </Form.Row>
        <Form.Row>
          <Form.Group as={Col} controlId="formGridZip">
            <Form.Label>Sport</Form.Label>

            <Form.Control as="select">
              <option selected disabled>
                Select
              </option>

              <option>Strength</option>
              <option>Power Lifting</option>
              <option>Stretching</option>
              <option>Weight Lifting</option>
            </Form.Control>
          </Form.Group>
          <Form.Group as={Col} controlId="formGridZip">
            <Form.Label>Force</Form.Label>

            <Form.Control as="select">
              <option selected disabled>
                Select
              </option>

              <option>Biceps</option>
              <option>Triceps</option>
              <option>Chest</option>
              <option>Shoulders</option>
            </Form.Control>
          </Form.Group>
        </Form.Row>
        <div className="text-center">
          <Button variant="outline-primary">Create</Button>
        </div>
        {/* <div className="text-center">
          <Button variant="outline-primary" className="my-3">
            Cancel
          </Button>
        </div> */}
      </Form>
    </div>
  );
};

export default WorkoutForm;
