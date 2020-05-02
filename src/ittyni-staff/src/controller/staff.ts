import { store } from '../../../index';
import { StaffActions } from '../store/actions';
import { SettingActions } from '../../../ittyni-labsetting/src/store/actions';

class Staff {

    private accountName : string = "Centrale du CHU Hassan II";

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
    };
    /**
     * fetch departements to use
     * in staff
     */
    fetchDepartement = ()=>store.dispatch({
        type : SettingActions.LAB_LABO_SETTING_LIST_DEPARTEMENT,
        payload : {
            query : `mutation {setting{listDepartement(accountName:"${this.accountName}"){name}}}`
        },
        path : 'labos'
    })
}

export const staff = new Staff();