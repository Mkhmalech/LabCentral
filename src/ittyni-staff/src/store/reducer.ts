import { AnyAction } from "redux";
import { StaffActions } from './actions';
const initialState : LabStaffState = {

}

export const staffReducer = (state=initialState, action: AnyAction) =>{
   const {payload, type} = action;
    switch (type) {
        case StaffActions.ADD_EMPLOYER_SUCCESS:
            return {
            ...state
            // employer: payload
            };
        case StaffActions.LIST_ALL_EMPLOYERS_SUCCESS : 
            console.log(payload)
            return { ...state, staff : payload.employerListAll };
        default:
            return {...state};
    }
}
