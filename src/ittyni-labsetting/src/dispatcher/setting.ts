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
    
    // fetch holiday
    fetchHoliday = ()=>store.dispatch({
        type : SettingActions.LAB_LABO_SETTING_LIST_HOLIDAY
    })
    // add holiday
    addHoliday = (holiday : any)=>store.dispatch({
        type : SettingActions.LAB_LABO_SETTING_ADD_NEW_HOLIDAY
    })
    
    // fetch Leave
    fetchLeave = (leave : any)=>store.dispatch({
        type : SettingActions.LAB_LABO_SETTING_LIST_LEAVE
    })

    // add Leave
    addLeave = (leave : any)=>store.dispatch({
        type : SettingActions.LAB_LABO_SETTING_ADD_NEW_LEAVE
    })

    // add automate
    fetchAutomate = (automate : any)=>store.dispatch({
        type : SettingActions.LAB_LABO_SETTING_LIST_AUTOMATE
    })

    // add automate
    addAutomate = (automate : any)=>store.dispatch({
        type : SettingActions.LAB_LABO_SETTING_ADD_NEW_AOUTOMATE
    })
}

export default new Setting();