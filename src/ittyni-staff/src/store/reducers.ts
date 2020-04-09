import { AnyAction } from "redux";

const initialState : LabStaffState = {}

export const staffReducer = (state=initialState, action : AnyAction) =>{
    switch (action.type) {
        case "staff":
            console.log("dispatched")
            return {...state};
    
        default:
            return {...state};
    }
}
