import React from 'react';
import {ServicesCard, ServicesCardContainer, ServicesContainer, ServicesImg, ServicesTxt} from "./ServicesElements.jsx";

import webapp from "../../assets/Services/webapp.png";
import mobile from "../../assets/Services/mobile.png";
import api from "../../assets/Services/api.png";
import {H1} from "../Elements.jsx";

const Services = () => {
    return (
        <ServicesContainer>
            <H1> // Our Services // </H1>
            <ServicesCardContainer>
                <ServicesCard>
                    <ServicesImg src={webapp}/>
                    <ServicesTxt> Web App Penetration Testing </ServicesTxt>
                </ServicesCard>
                <ServicesCard>
                    <ServicesImg src={mobile}/>
                    <ServicesTxt> Mobile App Penetration Testing </ServicesTxt>
                </ServicesCard>
                <ServicesCard>
                    <ServicesImg src={api}/>
                    <ServicesTxt> API Penetration Testing </ServicesTxt>
                </ServicesCard>
            </ServicesCardContainer>
        </ServicesContainer>
    );
};

export default Services;