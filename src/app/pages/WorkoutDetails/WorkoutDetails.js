import React, { useState } from "react";
import { Button } from "react-bootstrap";
import NavTabs from "../NutritionPlan/Tabs";

const WorkoutDetails = () => {
  const [clicked, setClicked] = useState(false);
  return (
    <div>
      <h2 className="text-center">Name</h2>
      <div>
        <div className={`${clicked ? "none" : "text-center"}`}>
          <Button
            variant="outline-primary"
            className="my-6"
            onClick={() => setClicked(true)}
          >
            Add exercise
          </Button>
        </div>
        <div
          className={`${clicked ? "" : "none"}`}
          style={{ backgroundColor: "white", padding: 20 }}
        >
          <div className="item-header">
            <h2>Add Exercise</h2>
            <i
              className="fas fa-times"
              onClick={() => setClicked(!clicked)}
            ></i>
          </div>
          <NavTabs workout={true} />
          <div className="text-center">
            <Button variant="outline-primary">Add exercise to workout</Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WorkoutDetails;
