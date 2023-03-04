import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import store from "./redux/store";
import ReduxContext from "./context/reduxContext";

store.subscribe(() => console.log(store.getState()));
// store.dispatch(addToDo("심심하다"));
// store.dispatch(completeTodo(0));
// store.dispatch(showComplete());
// store.dispatch(showAll());
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <ReduxContext.Provider value={store}>
    <App />
  </ReduxContext.Provider>
);
