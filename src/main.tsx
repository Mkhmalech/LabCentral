import * as React from "react";
import { Router, Switch, Route, Redirect } from "react-router";
import { Provider } from "react-redux";
import { History } from "history";

import { Store } from "redux";

import { routes } from "./routes";

interface MainProps {
  history: History;
  store: Store<LabCentralState>;
}

const Main: React.FC<MainProps> = ({ history, store }) => (
  <Provider store={store}>
    <Router history={history}>
      <Switch>
        <Route
          path={routes.webpages.path}
          component={routes.webpages.component}
        />
        <Route
          path={routes.adminpages.path}
          component={routes.adminpages.component}
        />
        <Redirect from="/*" to={routes.adminpages.path} />{" "}
        {/* nkhaliweha fe admin 7ta nssaliw o 3ad n9adouha: ok */}
      </Switch>
    </Router>
  </Provider>
);
// dkhol daba deer /admin/ :OK
export default Main;
