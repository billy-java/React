import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { legacy_createStore as createStore } from "redux";
import { Provider } from "react-redux";
import modalsReducer from "./Reducers/modalsReducer";
import { BrowserRouter } from "react-router-dom";

const store = createStore(modalsReducer);

ReactDOM.render(
  <BrowserRouter>
    <Provider store={store}>
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </Provider>
  </BrowserRouter>,

  document.getElementById("root")
);
