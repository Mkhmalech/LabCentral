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
/**
 * labo add new setting departement
 */
function* addDepartement({path, payload} : AnyAction){
    yield tryFetching(
        path,
        payload,
        SettingActions.LAB_LABO_SETTING_ADD_NEW_DEPARTEMENT_ERROR,
        SettingActions.LAB_LABO_SETTING_ADD_NEW_DEPARTEMENT_SUCCESS
    )
}
//watcher func dispatcher
function* watchLabLaboSetting(){

    // fetch tests form server 
    yield takeEvery(SettingActions.LAB_LABO_SETTING_LIST_DEPARTEMENT, fetchDepartements)
    yield takeEvery(SettingActions.LAB_LABO_SETTING_ADD_NEW_DEPARTEMENT, addDepartement)
}

export function* LabLaboSettingSaga(){
    yield all([fork(watchLabLaboSetting)])
}