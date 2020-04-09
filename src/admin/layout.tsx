import * as React from "react";
import * as Wrapper from "../commons/wrappers";
import {SideApp} from './sidebar'
import { staffRoutes } from '../ittyni-staff/staffRoutes';
import { Route } from "react-router-dom";
export const AdminLayout = () => {
  return (
    <Wrapper.Container>
      {/**
      header goes here
    */}
      <Wrapper.Header>Laboratoire Centrale de CHU Hassan II - Fes -</Wrapper.Header>

       {/* main container  */}
      <Wrapper.BodyContainer>

        {/* sidebar wrapper */}
        <Wrapper.Sidebar>
          <SideApp />
        </Wrapper.Sidebar>

        {/* body wrapper */}
        <Wrapper.Body>
          <Route path={staffRoutes.StaffListAll.admin.path} 
                 component={staffRoutes.StaffListAll.admin.component} 
          />
        </Wrapper.Body>

        {/* end of body container  */}
      </Wrapper.BodyContainer>

      {/* footer wrapper */}
      <Wrapper.Footer>
        footer
      </Wrapper.Footer>
      {/* end of admin layout Container */}
    </Wrapper.Container>
  );
};

