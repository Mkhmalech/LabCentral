import { Reducer, AnyAction } from 'redux';
import { SettingActions } from './actions';

export const settingReducer : Reducer = (state={}, action : AnyAction) => {
    switch (action.type) {
        
        case SettingActions.LAB_LABO_SETTING_LIST_DEPARTEMENT_SUCCESS:
            return {...state, departements : action.payload.setting.listDepartement}
    
        default:
            return {...state}
    }
}