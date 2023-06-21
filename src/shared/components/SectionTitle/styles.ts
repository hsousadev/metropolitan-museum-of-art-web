import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;

  margin-bottom: 48px;
  width: 100%;

  h4 {
    color: var(--Orange);
  }

  @media (max-width: 540px) {
    margin-bottom: 24px;
  }
`;
