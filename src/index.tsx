import React from "react";
import ReactDOM from "react-dom";
import { applyMiddleware, createStore, Store } from "redux";
import { Provider } from "react-redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";

import "./index.css";
import App from "./App";
import appReducer from "./store/reducer";
const store: Store<LocationsState, LocationAction> & {
  dispatch: DispatchType;
} = createStore(appReducer, composeWithDevTools(applyMiddleware(thunk)));

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
