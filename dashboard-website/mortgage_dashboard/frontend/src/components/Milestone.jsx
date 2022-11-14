import * as React from "react";
import "./Milestone.css";

const Milestone = () => {
  return (
    <div className="Milestone">
      <div className="Milestone-Title">Deals Closed</div>
      <ol className="Milestone-Progress-Tracker">
        <li className="Milestone-Circle-Content">
          <div className="Circle Completed"></div>
          <p id="text">Goal 1</p>
        </li>
        <li className="Milestone-Circle-Content">
          <div className="Circle Completed"></div>
          <p id="text">Goal 2</p>
        </li>
        <li className="Milestone-Circle-Content">
          <div className="Circle Active"></div>
          <p id="text">Goal 3</p>
        </li>
      </ol>
      <div className="Milestone-Progress-Meter"></div>
    </div>
  );
};

export default Milestone;
