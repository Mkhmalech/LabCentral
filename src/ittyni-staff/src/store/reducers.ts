import { AnyAction } from "redux";
import {ADD_EMPLOYER} from './actions'
const initialState : LabStaffState = {

}

export const staffReducer = (state=initialState, action: AnyAction) =>{
   const {payload, type} = action;
    switch (type) {
        case ADD_EMPLOYER:
            console.log("dispatched")
            return {
            ...state
            // employer: payload
            };
    
        default:
            return {...state};
    }
}
