import { all, fork, takeEvery } from 'redux-saga/effects'
import { AnyAction } from 'redux';
import { tryFetching } from '../../../Store/config'
import { StaffActions } from './actions';




/**
 * labo fetch details
 */
function* StaffFetchAll({path, payload} : AnyAction){
    yield tryFetching(
        path,
        payload,
        "ERROR",
        "SUCCESS"
    )
}
//watcher func dispatcher
function* watchLabLaboStaff(){

    // fetch tests form server 
    yield takeEvery(StaffActions.ADD_EMPLOYER, StaffFetchAll)
}

export function* LabLaboStaffSaga(){
    yield all([fork(watchLabLaboStaff)])
}