import React from 'react';

import {NavbarContainer, Nav, NavItems, NavLink, NavLogoSection, ThecyberSecurityLogo} from "./NavbarElements.jsx";


const Navbar = () => {
    return (
        <NavbarContainer>
            <Nav>
                <NavLogoSection>
                    <ThecyberSecurityLogo src="src/assets/6.png" alt="Thecyber Security Logo"/>
                </NavLogoSection>
                <NavItems>
                    {[
                        {title: "Home", to: "/"},
                        {title: "About", to: "about"},
                        {title: "Our Services", to: "services"},
                        {title: "Community", to: "community"},
                        {title: "Contact Us", to: "contact"},
                    ].map((item, id) => (
                        <NavLink to={item.to} key={id}> {item.title} </NavLink>
                    ))}
                </NavItems>
            </Nav>
        </NavbarContainer>
    );
};

export default Navbar;