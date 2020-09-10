import React from "react";
import ReactDOM from "react-dom";

import { Provider } from "react-redux";
import store from "./redux/store";

import TodoApp from "./TodoApp";

const rootElement = document.getElementById("root");
//<TodoApp /> is now wrapped with the <Provider /> with store passed in as a prop.
ReactDOM.render(
  <Provider store={store}>
    <TodoApp />
  </Provider>,
  rootElement
);
