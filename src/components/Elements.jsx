import styled from "styled-components";

export const H12 = styled.h1`
  font-size: 5rem;
  color: #ffffff;
`;
export const H1 = styled.h1`
  color: #ffffff;
`;
export const H2 = styled.h2`
  color: #ffffff;
`;
export const H3 = styled.h3`
  color: #ffffff;
`;
export const H4 = styled.h4`
  color: #ffffff;
`;
export const H5 = styled.h5`
  color: #ffffff;
`;
export const H6 = styled.h6`
  color: #ffffff;
`;

export const P = styled.p`
  color: #c4c4c4;
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
`;

export const AppContainer = styled.div`
  display: flex;
  justify-content: center;
  min-height: 100vh;
  height: fit-content;
  flex-direction: column;
`;

export const Button = styled.button`
  padding: 5px 10px;
  font-size: 1.2rem;
  transition: all 0.3s ease-in-out;

  &:hover {
    scale: 1.1;
    cursor: pointer;
    background-color: #000000;
    color: #fffdfd;
  }
`;