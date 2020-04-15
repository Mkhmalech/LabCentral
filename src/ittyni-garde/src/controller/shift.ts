import { store } from '../../../index';
import { ShiftActions } from '../store/actions';
export class Shift {

    constructor(){
       
    }

    // dispatch date
    getShiftDate = (date : any) =>store.dispatch({
        type : ShiftActions.SHIFT_DATE,
        payload : date
    })
}