import * as React from "react";
import { Router } from "react-router";
import { History } from "history";
import { SideApp } from "./sidebar";

import App from "./App";

interface MainProps {
  history: History;
}
const Main: React.FC<MainProps> = ({ history }) => (
  <Router history={history}>
    <SideApp />
    <App />
  </Router>
);

export default Main;
