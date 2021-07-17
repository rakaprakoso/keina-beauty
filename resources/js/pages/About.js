import React from 'react';
import Page from '../page';
import Hero from '../components/Hero/Hero1'

function About(props) {
    return (
        <Page title="About">
            <Hero/>
            <div className="container">
                About
            </div>
        </Page>
    );
}

export default About;
