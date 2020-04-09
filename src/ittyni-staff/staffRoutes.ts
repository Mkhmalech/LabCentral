import { StaffListALL } from "./admin/staffListAll";
import { StaffAddEmployer } from './admin/staffAddEmployer';

export const staffRoutes = {
    StaffListAll : {
        admin : {
            path : '/admin/:user/staff/list-all-employers',
            component : StaffListALL 
        },
        web : {}
    },
    StaffAddEmployer : {
        admin : {
            path : '/admin/:user/staff/add-new-employer',
            component : StaffAddEmployer
        },
        web : {}
    }
}