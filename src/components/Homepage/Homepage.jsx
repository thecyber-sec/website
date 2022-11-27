import React from 'react';
import {ContactForm, Hero, SampleReport, Services} from "../index.js";
import {Container} from "../Elements.jsx";

const Homepage = () => {
    return (
        <Container>
            <Hero /> <br/> <br/>
            <Services/> <br/> <br/>
            {/*Feedbacks <br/> <br/>*/}
            {/*News & Insights <br/> <br/>*/}
            {/*<SampleReport/>*/}
            {/*<ContactForm />*/}
        </Container>
    );
};

export default Homepage;