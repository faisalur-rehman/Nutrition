import React from "react";
import "./Workout.css";
const Exercise = () => {
  return (
    <div className="exercise">
      <div className="exercise-image">
        <img
          src="https://img.youtube.com/vi/AFWRIzDA5zI/hqdefault.jpg"
          alt=""
        />
      </div>
      <div className="exercise-detail">
        <h3>Seated Alternating Hammer Curls</h3>
        <p>Biceps</p>
      </div>
    </div>
  );
};

export default Exercise;
