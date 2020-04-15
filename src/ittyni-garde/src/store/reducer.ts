import { Reducer, AnyAction } from 'redux';

const initState : LaboShiftState = {}

export const shiftReducer : Reducer = (state=initState, action : AnyAction) =>{
    switch (action.type) {
        case "":
            return {...state};
    
        default:
            return {...state};
    }

}