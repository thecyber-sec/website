import React from 'react';

import {NavbarContainer, Nav, NavItems, NavLink, NavLogoSection, ThecyberSecurityLogo} from "./NavbarElements.jsx";

import logo from '../../assets/6.png';

const Navbar = () => {
    return (
        <NavbarContainer>
            <Nav>
                <NavLogoSection>
                    <ThecyberSecurityLogo src={logo} alt="Thecyber Security Logo"/>
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