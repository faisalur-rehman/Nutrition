import React from "react";
import Switches from "../Switch/Switch";
import "./NutritionPlan.css";
import { Form, Col } from "react-bootstrap";
import Meal from "./Meal";

const NutritionPlanDetail = () => {
  return (
    <>
      <div>
        <h4 className="name">Name</h4>
      </div>
      <div className="macro">
        <div className="top">
          <p>Macronutrients</p>
          <Switches />
        </div>
        <p>Client total daily calorie target</p>
        <div className="calory-total">32</div>
        <Form.Row>
          <Form.Group as={Col} controlId="formGridState">
            <Form.Label>Macro Type</Form.Label>
            <Form.Control as="select">
              <option value="select" disabled selected>
                Select
              </option>
              <option>Grams</option>
              <option>Percentage</option>
            </Form.Control>
          </Form.Group>
        </Form.Row>
        <Form.Row>
          <Form.Group as={Col} controlId="formGridState">
            <Form.Label>Protein (%)</Form.Label>
            <Form.Control type="number" />
          </Form.Group>
          <Form.Group as={Col} controlId="formGridState">
            <Form.Label>Carbs (%)</Form.Label>
            <Form.Control type="number" />
          </Form.Group>
          <Form.Group as={Col} controlId="formGridState">
            <Form.Label>Fat (%)</Form.Label>
            <Form.Control type="number" />
          </Form.Group>
          <Form.Group as={Col} controlId="formGridState">
            <Form.Label>Fibre (g)</Form.Label>
            <Form.Control type="number" />
          </Form.Group>
          <Form.Group as={Col} controlId="formGridState">
            <Form.Label>Sodium (mg)</Form.Label>
            <Form.Control type="number" />
          </Form.Group>
          <Form.Group as={Col} controlId="formGridState">
            <Form.Label>Sugar(g)</Form.Label>
            <Form.Control type="number" />
          </Form.Group>
        </Form.Row>
      </div>
      <Meal mealTime="Breakfast" />
    </>
  );
};

export default NutritionPlanDetail;
