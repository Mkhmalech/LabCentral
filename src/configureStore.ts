import { Store, createStore, applyMiddleware } from "redux";
import { History } from "history";

import { createRootReducer, rootSaga } from "./Store";
import createSagaMiddleware from "redux-saga";
import { routerMiddleware } from "connected-react-router";

export const configureStore = (
  history: History,
  initialState: LabCentral
): Store<LabCentral> => {
  const sagaMiddleware = createSagaMiddleware();

  const store = createStore(
    createRootReducer(history),
    initialState, // mochkil howa route makaynch fe state dyal application
    applyMiddleware(routerMiddleware(history), sagaMiddleware)
  );

  sagaMiddleware.run(rootSaga);

  return store;
};
