import * as React from "react";
import { Router } from "react-router";
import {Provider } from 'react-redux'
import { History } from "history";
import { SideApp } from "./sidebar";

import App from "./App";
import { Store } from "redux";

interface MainProps {
  history: History
  store: Store<LabCentral>;
}


const Main: React.FC<MainProps> = ({ history, store }) => (
  <Provider store={store}>
    <Router history={history}>
    <SideApp />
    <App />
  </Router>
  </Provider>
  
);

export default Main;
