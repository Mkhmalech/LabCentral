import { AnyAction } from "redux";
import { StaffActions } from './actions';
const initialState : LabStaffState = {

}

export const staffReducer = (state=initialState, action: AnyAction) =>{
   const {payload, type} = action;
    switch (type) {
        case "SUCCESS":
            console.log("SUCCESS")
            return {
            ...state
            // employer: payload
            };
        case "ERROR" : 
            console.log("ERROR")
            return { ...state };
        default:
            return {...state};
    }
}
