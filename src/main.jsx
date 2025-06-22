import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
// import App from "./src/App.jsx";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "react-toastify/dist/ReactToastify.css";
import { Provider } from "react-redux";
import store from "./redux/store.js";
// import store from "./src/redux/store.js";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider store={store}>
      {" "}
      {/*Provider is a component that makes the Redux store available to any nested components that have been wrapped in the connect() function. */}
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  </StrictMode>
);
