const initialState = {
  addStep: 0
};

const StepReducer = (state = initialState, action) => {
  console.log("action", action.type, state.addStep);
  switch (action.type) {
    case "ADD_STEPS":
      return {
        ...state,
        addStep: state.addStep + 2
      };
    case "RESET_STEPS":
      return {
        ...state,
        addStep: 0
      };
    default:
      return state;
  }
};

export default StepReducer;
