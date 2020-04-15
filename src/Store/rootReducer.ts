import { combineReducers } from "redux";
import { connectRouter } from "connected-react-router";
import { History } from "history";

//===> from saga middleware
import { fork, all } from "redux-saga/effects";
// import { AuthReducer } from '../components/authentification-redux-lib/src';
// import { AuthSaga } from '../components/authentification-redux-lib/src';
// import { AuthState } from '../components/authentification-redux-lib/src/types';

// personal module
// import { personalReducer } from "../labpersonal-ittyni/src/store/reducer";
import { staffReducer } from '../ittyni-staff/src/store/reducers';

export const createRootReducer = (history: History) =>
  combineReducers({
    // auth   : AuthReducer,
    garde : (state : any)=>({...state}),
    staff: staffReducer /* reducer khfifff */,
    router: connectRouter(history) //hada makaynch fe state
  });
// mazian daba
export function* rootSaga() {
  yield all([
    //  Auth
    //  fork(AuthSaga),
    //  Personal
    //  Gards
    // Tickets
  ]);
}
