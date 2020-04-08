import * as React from "react";
import * as Wrapper from "../commons/wrappers";
export const AdminLayout = () => {
  return (
    <Wrapper.Container>
      {/**
      header goes here
    */}
      <Wrapper.Header>header </Wrapper.Header>

      <Wrapper.BodyContainer>
        <Wrapper.Sidebar>sidebar</Wrapper.Sidebar>
        <Wrapper.Body>body</Wrapper.Body>
      </Wrapper.BodyContainer>
    </Wrapper.Container>
  );
};

