import { Reducer, AnyAction } from 'redux';

export const settingReducer : Reducer = (state={}, action : AnyAction) => {
    switch (action.type) {
        case "":
            return {...state}
    
        default:
            return {...state}
    }
}