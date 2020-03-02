import * as React from "react";
import "./styles.css";
import styled from "styled-components";
import { Switch, Route } from "react-router";
import { Personal } from "./Personal/src";
import { Garde } from "./Garde/src/garde";

export default function App() {
  // const date = new Date().toISOString();
  return (
    <div className="App">
      <Container>
        <Switch>
          <Route path="/gardes" component={Garde} />
          <Route path="/" component={Personal} exact />
        </Switch>
      </Container>
    </div>
  );
}
const Container = styled.div`
  margin-left: 300px;
  @media (max-width: 700px) {
    margin-left: 0px;
  }

  transition: all 0.3s cubic-bezier(0.075, 0.82, 0.165, 1);
`;
