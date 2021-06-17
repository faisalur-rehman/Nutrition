import React from "react";
import { Button } from "react-bootstrap";

const Meal = (props) => {
  return (
    <div className="meal-card">
      <p>{props.mealTime}</p>
      <div className="meal-div">
        <i class="fas fa-utensils"></i>
        <h3>Meal looking empty?</h3>
        <p>Add an item using the button below</p>
        <Button variant="outline-primary" className="add-meal">
          Add food/Drink item
        </Button>
      </div>
    </div>
  );
};

export default Meal;
