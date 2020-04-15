import { Reducer, AnyAction } from 'redux';
import { ShiftActions } from './actions';

const initState : LaboShiftState = {}

export const shiftReducer : Reducer = (state=initState, action : AnyAction) =>{
    switch (action.type) {
    
        case ShiftActions.SHIFT_DATE:
            return {...state, shiftDate : action.payload};
    
        default:
            return {...state};
    }

}