import * as React from "react";
import * as Wrapper from "../commons/wrappers";
import {SideApp} from './sidebar'
export const AdminLayout = () => {
  return (
    <Wrapper.Container>
      {/**
      header goes here
    */}
      <Wrapper.Header>header </Wrapper.Header>

       {/* main container  */}
      <Wrapper.BodyContainer>

        {/* sidebar wrapper */}
        <Wrapper.Sidebar>
          <SideApp />
        </Wrapper.Sidebar>

        {/* body wrapper */}
        <Wrapper.Body>body</Wrapper.Body>

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

