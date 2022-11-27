import React from 'react';
import {ServicesCard, ServicesContainer, ServicesImg, ServicesTxt} from "./ServicesElements.jsx";

const Services = () => {
    return (
        <ServicesContainer>
            <ServicesCard>
                <ServicesImg src={"/src/assets/Services/webapp.png"}/>
                <ServicesTxt> Web App Penetration Testing </ServicesTxt>
            </ServicesCard>
            <ServicesCard>
                <ServicesImg src={"/src/assets/Services/mobile.png"}/>
                <ServicesTxt> Mobile App Penetration Testing </ServicesTxt>
            </ServicesCard>
            <ServicesCard>
                <ServicesImg src={"/src/assets/Services/api.png"}/>
                <ServicesTxt> API Penetration Testing </ServicesTxt>
            </ServicesCard>
        </ServicesContainer>
    );
};

export default Services;