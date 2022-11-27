import React from "react";
import {
    FooterContainer,
    FooterWrap,
    FooterLinksContainer,
    FooterLinksWrapper,
    FooterLinkItems,
    FooterLinkTitle,
    FooterRouterLink,
    FooterRedirectLink,
    FooterBottom,
    SocialMediaWrap,
    WebsiteLogo,
    WebsiteRights,
    SocialIcons,
    SocialIconLinkTwitter,
    SocialIconLinkGithub,
    SocialIconLinkDiscord,
    SocialIconLinkInstagram,
} from "./FooterElements";

import {FaTwitter, FaGithub, FaInstagram, FaDiscord, FaLinkedin} from "react-icons/fa";
// import { animateScroll as scroll } from "react-scroll";

const SocialLinks = {
    twitter: "https://www.twitter.com/thecyber_sec",
    instagram: "https://www.instagram.com/thecyber_sec",
    linkedIn: "https://linkedin.com/thecyber-sec",
    github: "https://www.github.com/thecyber-sec",
    linktree: "https://linktr.ee/thecybersec",
    community: "https://thecyberhub.org",
    // discord: "https://discord.gg/QHBPq6xP5p",
    // youtube: "https://www.youtube.com/c/thecyberworld",
};

// const toggleHome = () => {
//     scroll.scrollToTop();
// };

const Footer = () => {
    return (
        <FooterContainer>
            <FooterWrap>
                <FooterLinksContainer>
                    <FooterLinksWrapper>
                        {/*<FooterLinkItems>*/}
                        {/*    <FooterLinkTitle>About Us</FooterLinkTitle>*/}
                        {/*    {[*/}
                        {/*        {to: "about", title: "About"},*/}
                        {/*        {to: "services", title: "Services"},*/}
                        {/*        {to: "community", title: "Community"},*/}
                        {/*        {to: "contribute", title: "Contribute"},*/}
                        {/*    ].map(({to, title}) => (*/}
                        {/*        <FooterScrollLink*/}
                        {/*            key={to}*/}
                        {/*            to={to}*/}
                        {/*            smooth={true}*/}
                        {/*            duration={500}*/}
                        {/*            spy={true}*/}
                        {/*            exact="true"*/}
                        {/*            offset={-80}*/}
                        {/*        >*/}
                        {/*            {title}*/}
                        {/*        </FooterScrollLink>*/}
                        {/*    ))}*/}
                        {/*</FooterLinkItems>*/}
                        <FooterLinkItems>
                            <FooterLinkTitle>Pages</FooterLinkTitle>
                            <FooterRouterLink to="#"> About Us </FooterRouterLink>
                            <FooterRouterLink to="#"> Our Terms </FooterRouterLink>
                            <FooterRouterLink to="#"> Services </FooterRouterLink>
                            <FooterRouterLink to="#"> Faq </FooterRouterLink>
                            <FooterRouterLink to="#"> Price & Plan </FooterRouterLink>

                        </FooterLinkItems>
                        <FooterLinkItems>
                            <FooterLinkTitle>Pages</FooterLinkTitle>
                            <FooterRouterLink to="#"> News </FooterRouterLink>
                            <FooterRouterLink to="#"> Case Study </FooterRouterLink>
                            <FooterRouterLink to="#"> Contact </FooterRouterLink>
                            <FooterRouterLink to="#"> 404 Page </FooterRouterLink>
                            <FooterRouterLink to="#"> Membership </FooterRouterLink>
                        </FooterLinkItems>
                        <FooterLinkItems>
                            <FooterLinkTitle>Our Services</FooterLinkTitle>
                            <FooterRouterLink to="#"> Web App Penetration Testing </FooterRouterLink>
                            <FooterRouterLink to="#"> Mobile App Penetration Testing </FooterRouterLink>
                            <FooterRouterLink to="#"> API Penetration Testing </FooterRouterLink>
                            <FooterRouterLink to="#"> 24/7 Online Support </FooterRouterLink>
                        </FooterLinkItems>
                    </FooterLinksWrapper>
                </FooterLinksContainer>
                <FooterBottom>
                    <SocialMediaWrap>
                        <WebsiteLogo to="/">
                            Thecyber Security
                        </WebsiteLogo>
                        <WebsiteRights> © {new Date().getFullYear()} All rights reserved.</WebsiteRights>
                        <SocialIcons>
                            <SocialIconLinkTwitter href={SocialLinks.twitter} target="_blank" aria-label="Twitter">
                                <FaTwitter/>
                            </SocialIconLinkTwitter>
                            <SocialIconLinkTwitter href={SocialLinks.linkedIn} target="_blank" aria-label="Twitter">
                                <FaLinkedin/>
                            </SocialIconLinkTwitter>
                            {/*<SocialIconLinkGithub href={SocialLinks.github} target="_blank" aria-label="Github">*/}
                            {/*    <FaGithub/>*/}
                            {/*</SocialIconLinkGithub>*/}
                            {/*<SocialIconLinkDiscord href={SocialLinks.discord} target="_blank" aria-label="Discord">*/}
                            {/*    <FaDiscord/>*/}
                            {/*</SocialIconLinkDiscord>*/}
                            <SocialIconLinkInstagram href={SocialLinks.instagram} target="_blank"
                                                     aria-label="Instagram">
                                <FaInstagram/>
                            </SocialIconLinkInstagram>
                        </SocialIcons>
                    </SocialMediaWrap>
                </FooterBottom>
            </FooterWrap>
        </FooterContainer>
    );
};

export default Footer;
