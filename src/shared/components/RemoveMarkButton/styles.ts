import styled from "styled-components";

export const Container = styled.button`
  .content {
    transition: all 0.2s ease-in-out;

    display: flex;
    align-items: center;
    justify-content: center;

    background-color: rgba(224, 164, 73, 0.3);
    border-radius: 100%;

    width: 60px;
    height: 60px;
  }

  .content:hover {
    background-color: rgba(224, 164, 73, 0.3);
  }
`;
