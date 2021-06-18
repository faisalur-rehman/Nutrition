import React, { useState } from "react";
import { Button } from "react-bootstrap";
// import AddItem from "./AddItem";
import NavTabs from "./Tabs";

const Meal = (props) => {
  const [clicked, setClicked] = useState(false);
  return (
    <div className="meal-card">
      <p>{props.mealTime}</p>
      <div className="meal-div">
        <i class="fas fa-utensils"></i>
        <h3>Meal looking empty?</h3>
        <p>Add an item using the button below</p>
        <div className={`${clicked ? "none" : ""}`}>
          <Button
            className="add-meal"
            variant="outline-primary"
            onClick={() => setClicked(true)}
          >
            Add food/Drink item
          </Button>
        </div>
      </div>
      <div className={`${clicked ? "" : "none"}`}>
        <div className="item-header">
          <h2>Add Food / Drink Item</h2>
          <i className="fas fa-times" onClick={() => setClicked(!clicked)}></i>
        </div>
        <NavTabs workout={false} />
      </div>
    </div>
  );
};

export default Meal;
