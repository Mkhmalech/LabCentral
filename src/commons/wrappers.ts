import styled from "styled-components";

export const Container = styled.div`
  margin-left: 300px;
  @media (max-width: 700px) {
    margin-left: 0px;
  }

  transition: all 0.3s cubic-bezier(0.075, 0.82, 0.165, 1);
`;
