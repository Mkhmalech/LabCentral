import { Dispatch } from "redux";
import { store } from '../../../index';
import { StaffActions } from '../store/actions';

class Staff {

    constructor(){}

    test = () =>store.dispatch({ 
        type : StaffActions.ADD_EMPLOYER,
        payload : {
            query : `mutation{employerAddNew(employer : {
                  civility : "Mr",
                  addedBy : "weiuyeuiryueiw234234",
                  firstName : "mohammed"
                  lastName : "khmalech"
                  ppr : 1432343
                  departementId : "biochimie"
                })
              }`
        },
        path : 'labos/staff'
    })
    /**
     * Add new employers
     */
    addNewEmployers = (employer : Employer) =>{
        store.dispatch({
            type : StaffActions.ADD_EMPLOYER,
            payload : {
                query : `mutation{employerAddNew(employer : {
                      civility : "Mr",
                      addedBy : "weiuyeuiryueiw234234",
                      firstName : "mohammed"
                      lastName : "khmalech"
                      ppr : 1432343
                      departementId : "biochimie"
                    })
                  }`
            },
            path : 'labos/staff'
        })
    }
}

export const staff = new Staff();