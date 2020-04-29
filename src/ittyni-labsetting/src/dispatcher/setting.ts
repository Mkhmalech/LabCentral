import { store } from '../../../index';
import { SettingActions } from '../store/actions';
class Setting {

    // get labo Departements
    fetchDepartement = ()=>store.dispatch({
        type : SettingActions.LAB_LABO_SETTING_LIST_DEPARTEMENT,
        payload : {
            query : `mutation {setting{listDepartement(accountName:"Centrale du CHU Hassan II"){name}}}`
        },
        path : 'labos'
    })

    // add departement
    addDepartement = (departement : any)=>console.log(departement)

    // add departement
    addHoliday = (holiday : any)=>console.log(holiday)
    
    // add Leave
    addLeave = (leave : any)=>console.log(leave)

    // add automate
    addAutomate = (automate : any)=>console.log(automate)
}

export default new Setting();