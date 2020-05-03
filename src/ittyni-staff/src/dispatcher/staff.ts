import { store } from "../../../index";
import { StaffActions } from "../store/actions";
import { SettingActions } from "../../../ittyni-labsetting/src/store/actions";

class Staff {
  private accountName: string = "Centrale du CHU Hassan II";

  constructor() {}

  test = () =>
    store.dispatch({
      type: StaffActions.ADD_EMPLOYER,
      payload: {
        query: `mutation{employerAddNew(employer : {
                  civility : "Mr",
                  addedBy : "weiuyeuiryueiw234234",
                  firstName : "mohammed"
                  lastName : "khmalech"
                  ppr : 1432343
                  departementId : "biochimie"
                })
              }`,
      },
      path: "labos/staff",
    });
  /**
   * Add new employers
   */
  addNewEmployers = (employer: any) => {
    store.dispatch({
      type: StaffActions.ADD_EMPLOYER,
      payload: {
        query: `mutation{employerAddNew(employer :{
          civility : "${employer.civility}"  firstName : "${employer.firstName}"
          lastName : "${employer.lastName}"  ppr : ${employer.ppr}
          departementName : "${employer.departementName}" accountName: "${this.accountName}"})}`,
      },
      path: "labos/staff",
    });
  };
  /**
   * fetch departements to use
   * in staff
   */
  fetchDepartement = () =>
    store.dispatch({
      type: SettingActions.LAB_LABO_SETTING_LIST_DEPARTEMENT,
      payload: {
        query: `mutation {setting{listDepartement(accountName:"${this.accountName}"){name}}}`,
      },
      path: "labos",
    });

  /**
   * add new departement
   */
  addNewDepartement = (departement: any) =>
    store.dispatch({
      type: SettingActions.LAB_LABO_SETTING_ADD_NEW_DEPARTEMENT,
      payload: {
        query: `mutation{setting{addDepartement(departement:{name:"${departement}",accountName : "${this.accountName}"})}}`,
      },
      path: "labos",
    });
}

export const staff = new Staff();
