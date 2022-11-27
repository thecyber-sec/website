import React from 'react';
import {
    ContactFormCard,
    ContactFormContainer,
    ContactFormInput, ContactFormLabel, ContactFormSection, ContactFormSelect, ContactFormSelectOption,
    ContactFormSubmit,
    ContactFormTextArea
} from "./ContactFormElements.jsx";

const ContactForm = () => {
    return (
        <ContactFormContainer>
            See How We Can Secure Your Assets

            Let’s talk about how Thecyber Security can solve your cybersecurity needs. Send us an e-mail, or fill out
            the contact form below to get started
            email: info@thecyber-sec.com
            <ContactFormCard>
                <ContactFormSection action="">
                    <ContactFormLabel htmlFor="name">Name:</ContactFormLabel>
                    <ContactFormInput type="text" name="name" id="name"/>
                    <ContactFormLabel htmlFor="email">Email:</ContactFormLabel>
                    <ContactFormInput type="text" name="email" id="email"/>
                    <ContactFormLabel htmlFor="number">Phone number:</ContactFormLabel>
                    <ContactFormInput type="text" name="number" id="number"/>
                    <ContactFormLabel htmlFor="reason">Reason for contact:</ContactFormLabel>
                    <ContactFormSelect name="reason" id="reason">
                        <ContactFormSelectOption value="php">PHP</ContactFormSelectOption>
                    </ContactFormSelect>
                    <ContactFormLabel htmlFor="message">Message:</ContactFormLabel>
                    <ContactFormTextArea name="message" id="message" cols="30" rows="10"></ContactFormTextArea>
                    <ContactFormSubmit type="submit" value="Submit"/>
                </ContactFormSection>
            </ContactFormCard>

        </ContactFormContainer>
    );
};

export default ContactForm;