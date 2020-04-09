import { Dispatch } from "redux";
import { store } from '../../../index';

export class Staff {

    private dispatch : Dispatch;

    constructor(){
        this.dispatch = store.dispatch;
    }

    /**
     * Add new employers
     */
    addNewEmployers = (employer : Employer) =>{
        this.dispatch({
            type : 'staff'
        })
    }
}