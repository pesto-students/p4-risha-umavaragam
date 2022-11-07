import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import { store } from "./Redux/Store";
import StepCounter from "./StepCounter";
import "bootstrap/dist/css/bootstrap.min.css";

export { AddSteps, ResetSteps } from "./Steps/StepAction";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <Provider store={store}>
    <StepCounter />
  </Provider>
);
