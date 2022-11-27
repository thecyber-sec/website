import styled from "styled-components";

export const ServicesContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  background: #000;
  padding: 0 30px;
  height: 40em;
  width: 100%;
`;

export const ServicesCard = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  border-radius: 10px;
  margin: 20px;

  height: 300px;
  width: 300px;

  max-height: 340px;
  padding: 30px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);
  transition: all 0.2s ease-in-out;

  border: #343434 1px solid;

  &:hover {
    transform: scale(1.02);
    transition: all 0.2s ease-in-out;
    cursor: pointer;
  }
`;

export const ServicesImg = styled.img`
    height: 160px;
    width: 160px;
    margin-bottom: 50px;
`;
export const ServicesTxt = styled.p`
`;