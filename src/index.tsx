import * as React from "react";
import { render } from "react-dom";

import Main from "./main";
import { createBrowserHistory } from "history";

const history = createBrowserHistory();

const rootElement = document.getElementById("root");
render(<Main history={history} />, rootElement);
