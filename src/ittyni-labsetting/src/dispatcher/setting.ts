import { store } from '../../../index';
import { SettingActions } from '../store/actions';
class Setting {

    private accountName : string = "Centrale du CHU Hassan II";

    // get labo Departements
    fetchDepartement = ()=>store.dispatch({
        type : SettingActions.LAB_LABO_SETTING_LIST_DEPARTEMENT,
        payload : {
            query : `mutation {setting{listDepartement(accountName:"Centrale du CHU Hassan II"){name}}}`
        },
        path : 'labos'
    })

    // add departement
    addDepartement = (departement : any)=>store.dispatch({
        type : SettingActions.LAB_LABO_SETTING_ADD_NEW_DEPARTEMENT,
        payload : {
            query:`mutation{setting{addDepartement(departement:{name:"${departement}",accountName : "${this.accountName}"})}}`
        },
        path : 'labos'
    })

    // add departement
    addHoliday = (holiday : any)=>console.log(holiday)
    
    // add Leave
    addLeave = (leave : any)=>console.log(leave)

    // add automate
    addAutomate = (automate : any)=>console.log(automate)
}

export default new Setting();