import React from 'react';
import {HeroContainer, HeroLogo, HeroSectionLeft, HeroSectionRight} from "./HeroElements.jsx";
import {Button, H1, H12, H6, P} from "../../Elements.jsx";

const Hero = () => {
    return (
            <HeroContainer>
                <HeroSectionLeft>
                    <h4>We Provide Outsourced</h4>
                    <H12>IT Solution</H12>
                    <P>
                        We are a team of highly skilled and experienced IT professionals who are passionate about providing the best IT solutions to our clients.
                    </P>
                </HeroSectionLeft>
                <HeroSectionRight>
                    <HeroLogo src="/src/assets/ThecyberSecurity.png" alt=""/>
                </HeroSectionRight>
            </HeroContainer>
    );
};

export default Hero;