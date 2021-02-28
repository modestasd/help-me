import React from "react";
import ReactDOM from "react-dom";
import { Router } from 'react-router-dom';

import App from "./App";
import { browserHistory } from "./routes/utils";

ReactDOM.render(
  <Router history={browserHistory}>
    <App />
  </Router>
  ,
  document.getElementById("root")
);