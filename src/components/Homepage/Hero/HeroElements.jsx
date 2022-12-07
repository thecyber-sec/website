import styled from "styled-components";
import img from "/src/assets/herobg.png";

export const HeroContainer = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  max-width: 1200px;
  height: 40em;
  padding: 20px;
  flex-direction: row;
  margin: 50px auto;
  
  @media screen and (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    height: 80em;
  }
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
  display: flex;
  justify-content: end;

  width: 40%;
  align-items: center;

  @media screen and (max-width: 850px) {
    margin: 50px 0 0 0;
    justify-content: center;
    align-items: center;
    text-align: center;

  }
`;

export const HeroLogo = styled.img`
  width: 300px;
  height: 300px;
  border-radius: 5px;
`;