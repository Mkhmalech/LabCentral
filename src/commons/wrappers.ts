import styled from "styled-components";

// Container
export const Container = styled("div")`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

//header wrapper
export const Header = styled("div")``;

// sidebar wrapper
export const Sidebar = styled("div")`
  main-width : 250px;
`;

// body wrapper
export const Body = styled("main")`
  display : flex;
  flex-direction : row;
`;
export const BodyContainer = styled.div`
  margin-left: 300px;
  @media (max-width: 700px) {
    margin-left: 0px;
  }

  transition: all 0.3s cubic-bezier(0.075, 0.82, 0.165, 1);
`;

// footer wrapper
export const Footer = styled("div")``;
