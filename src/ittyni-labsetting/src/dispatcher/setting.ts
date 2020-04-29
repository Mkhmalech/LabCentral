import { store } from '../../../index';
import { SettingActions } from '../store/actions';
class Setting {

    private accountName : string = "Centrale du CHU Hassan II";

    // get labo Departements
    fetchDepartement = ()=>store.dispatch({
        type : SettingActions.LAB_LABO_SETTING_LIST_DEPARTEMENT,
        payload : {
            query : `mutation {setting{listDepartement(accountName:"${this.accountName}"){name}}}`
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
    
    // fetch holiday
    fetchHoliday = ()=>store.dispatch({
        type : SettingActions.LAB_LABO_SETTING_LIST_HOLIDAY,
        payload : {
            query : `mutation {setting{listHoliday(accountName:"${this.accountName}"){holiday from to}}}`
        },
        path : 'labos'
    })
    // add holiday
    addHoliday = (holiday : any)=>store.dispatch({
        type : SettingActions.LAB_LABO_SETTING_ADD_NEW_HOLIDAY
    })
    
    // fetch Leave
    fetchLeave = ()=>store.dispatch({
        type : SettingActions.LAB_LABO_SETTING_LIST_LEAVE,
        payload : {
            query : `mutation {setting{listLeave(accountName:"${this.accountName}"){leave duration}}}`
        },
        path : 'labos'
    })

    // add Leave
    addLeave = (leave : any)=>store.dispatch({
        type : SettingActions.LAB_LABO_SETTING_ADD_NEW_LEAVE,
        
    })

    // add automate
    fetchAutomate = ()=>store.dispatch({
        type : SettingActions.LAB_LABO_SETTING_LIST_AUTOMATE,
        payload : {
            query : `mutation {setting{listAutonate(accountName:"${this.accountName}"){brand analyzer entryDate}}}`
        },
        path : 'labos'
    })

    // add automate
    addAutomate = (automate : any)=>store.dispatch({
        type : SettingActions.LAB_LABO_SETTING_ADD_NEW_AUTOMATE
    })
}

export default new Setting();