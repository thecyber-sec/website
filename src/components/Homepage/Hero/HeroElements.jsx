import styled from "styled-components";
import img from "/src/assets/herobg.png";

export const HeroContainer = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  max-width: 1200px;
  height: 40em;
  padding: 20px;
`;

export const BGImg = styled.div`
  background-image: url(${img});
  background-color: #000;
  margin-top: 0;
  background-position: top center;
  background-size: cover;
  background-repeat: no-repeat;
`;

export const HeroSectionLeft = styled.div`
  display: flex;
  width: 60%;
  max-width: 50%;
  flex-direction: column;
  justify-content: center;
  align-items: start;
  color: #fffdfd;
`;

export const HeroSectionRight = styled.div`
  width: 40%;
  display: flex;
  justify-content: end;
  align-items: center;
`;

export const HeroLogo = styled.img`
  width: 300px;
  height: 300px;
  border-radius: 5px;
`;