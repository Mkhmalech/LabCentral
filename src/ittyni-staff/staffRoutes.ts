import { StaffListALL } from "./admin/staffListAll";

export const staffRoutes = {
    StaffListAll : {
        admin : {
            path : '/admin/:user/staff',
            component : StaffListALL 
        },
        web : ''
    }
}