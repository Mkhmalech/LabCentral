import * as React from "react";
import * as Wrapper from "../commons/wrappers";
import {SideApp} from './sidebar'
import { staffRoutes } from '../ittyni-staff/src/staffRoutes';
import { settingRoutes } from '../ittyni-labsetting/src/settingRoutes';

import { Route, Redirect } from "react-router-dom";
import { gardeRoutes } from '../ittyni-garde/src/gardeRoutes';
import { ticketsRoutes } from '../ittyni-tickets/src/ticketsRoutes';

const username = 'mohammed';

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
          {/* staff Component */}
          <Route path={staffRoutes.StaffListAll.admin.path} 
                 component={staffRoutes.StaffListAll.admin.component} 
          />
          <Route path={staffRoutes.StaffAddEmployer.admin.path} 
                 component={staffRoutes.StaffAddEmployer.admin.component} 
          />
          <Route path={staffRoutes.StaffUpdateEmployer.admin.path} 
                 component={staffRoutes.StaffUpdateEmployer.admin.component} 
          />
          {/* setting Component */}
          <Route path={settingRoutes.admin.laboSetting.path} 
                 component={settingRoutes.admin.laboSetting.component}
          />
          {/* garde routes */}
          <Route path={gardeRoutes.admin.GardeViewAll.path} 
                 component={gardeRoutes.admin.GardeViewAll.component} 
          />
          <Route path={gardeRoutes.admin.GardeCreateNew.path} 
                 component={gardeRoutes.admin.GardeCreateNew.component} 
          />
          {/*  tickets routes */}
          <Route path={ticketsRoutes.admin.TicketsViewAll.path}
                 component={ticketsRoutes.admin.TicketsViewAll.component}
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

