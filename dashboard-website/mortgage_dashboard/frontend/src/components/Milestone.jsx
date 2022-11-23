import * as React from "react";
import "./Milestone.css";
import Box from "@mui/material/Box";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import axios from "axios";
import { useState, useEffect } from "react";
import {
  faDotCircle,
  faCircle,
  faCheck,
} from "@fortawesome/free-solid-svg-icons";

function setActiveStep(score) {
  if (score <= 5) {
    return 0; //less than 5 scores
  } else if (score > 5 && score < 10) {
    return 1; //between 5 and 10 score
  } else if (score >= 10 && score < 15) {
    return 2; //between 10 and 15 score
  } else if (score >= 15 && score < 20) {
    return 3; //between 15 and 20 score
  } else if (score >= 20 && score < 25) {
    return 4; //between 20 and 25 score
  }
}
const renderActiveIcon = () => {
  return (
    <div>
      <FontAwesomeIcon
        style={{ color: "gray", fontSize: 25 }}
        icon={faCircle}
      />
    </div>
  );
};
const renderFutureIcon = () => {
  return (
    <div>
      <FontAwesomeIcon
        icon={faDotCircle}
        style={{
          color: "blue",
          fontSize: 25,
        }}
      />
    </div>
  );
};
const renderPreviousIcon = () => {
  return (
    <div>
      <FontAwesomeIcon
        icon={faCheck}
        style={{ color: "green", fontSize: 25 }}
      />
    </div>
  );
};
const steps = ["5 Deals", "10 Deals", "15 Deals", "20 Deals", "25 Deals"];

const Milestone = () => {
  const [deals, setDeals] = useState([]);
  useEffect(() => {
    getDeals();
  });

  function getDeals() {
    let api = "";
    axios({
      method: "GET",
      url: api,
    })
      .then((response) => {
        const data = response.data;
        setDeals(data);
        return 6;
      })
      .catch((error) => {
        if (error.response) {
          console.log(error.response);
          console.log(error.response.status);
          console.log(error.response.headers);
        }
      });
    return 6;
  }
  return (
    <Box className="Milestone" sx={{ width: "100%" }}>
      <h1>Deals Closed: {getDeals()}</h1>
      <br />
      <Stepper activeStep={setActiveStep(6)} alternativeLabel>
        {steps.map((label, index) => {
          if (index <= setActiveStep(6) - 1) {
            return (
              <Step key={label}>
                <StepLabel StepIconComponent={renderPreviousIcon}>
                  <h8 className="Milestone-Title">{label}</h8>
                </StepLabel>
              </Step>
            );
          } else if (index === setActiveStep(6)) {
            return (
              <Step key={label}>
                <StepLabel StepIconComponent={renderFutureIcon}>
                  <h8 className="Milestone-Title">{label}</h8>
                </StepLabel>
              </Step>
            );
          } else {
            return (
              <Step key={label}>
                <StepLabel StepIconComponent={renderActiveIcon}>
                  <h8 className="Milestone-Title">{label}</h8>
                </StepLabel>
              </Step>
            );
          }
        })}
      </Stepper>
    </Box>
  );
};

export default Milestone;
