import React from 'react';
import {ServicesCard, ServicesContainer, ServicesImg, ServicesTxt} from "./ServicesElements.jsx";

import webapp from "../../assets/Services/webapp.png";
import mobile from "../../assets/Services/mobile.png";
import api from "../../assets/Services/api.png";
const Services = () => {
    return (
        <ServicesContainer>
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
        </ServicesContainer>
    );
};

export default Services;