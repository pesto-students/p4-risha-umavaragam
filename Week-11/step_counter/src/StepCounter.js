import React from "react";
import { connect } from "react-redux";
import { AddSteps, ResetSteps } from "./index";

function StepCounter(props) {
  return (
    <div className="card text-center border-primary d-flex justify-content-center m-2">
      <h5 className="card-header border-primary">
        You have walked {props.addStep} steps today
      </h5>
      <div className="card-body border-primary">
        <button onClick={props.AddSteps} className="btn btn-primary ">
          Add Steps
        </button>
        <hr className="border-primary border-2" />
        <button onClick={props.ResetSteps} className="btn btn-primary ml-1">
          Reset Steps
        </button>
      </div>
    </div>
  );
}

const mapStatetoProps = (state) => {
  console.log("map", state.addStep);
  return {
    addStep: state.addStep
  };
};

const mapDispatchtoProps = (dispatch) => {
  console.log("map-dispatch");
  return {
    AddSteps: () => dispatch(AddSteps()),
    ResetSteps: () => dispatch(ResetSteps())
  };
};

export default connect(mapStatetoProps, mapDispatchtoProps)(StepCounter);
