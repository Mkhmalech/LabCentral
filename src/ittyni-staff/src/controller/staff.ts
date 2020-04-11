import { Dispatch } from "redux";
import { store } from '../../../index';
import {ADD_EMPLOYER} from '../store/actions'

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
            type : ADD_EMPLOYER
        })
    }
}