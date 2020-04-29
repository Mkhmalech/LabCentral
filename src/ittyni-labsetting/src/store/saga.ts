import { all, fork, takeEvery } from 'redux-saga/effects'
import { AnyAction } from 'redux';
import { tryFetching } from '../../../Store/config'
import {SettingActions} from '../store/actions'


/**
 * labo fetch setting departement
 */
function* fetchDepartements({path, payload} : AnyAction){
    yield tryFetching(
        path,
        payload,
        SettingActions.LAB_LABO_SETTING_LIST_DEPARTEMENT_ERROR,
        SettingActions.LAB_LABO_SETTING_LIST_DEPARTEMENT_SUCCESS
    )
}
//watcher func dispatcher
function* watchLabLaboSetting(){

    // fetch tests form server 
    yield takeEvery(SettingActions.LAB_LABO_SETTING_LIST_DEPARTEMENT, fetchDepartements)
}

export function* LabLaboSettingSaga(){
    yield all([fork(watchLabLaboSetting)])
}