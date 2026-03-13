import React from 'react';
import { Link } from 'react-router-dom';
import './Landing.scss';
import logo from '../../assets/images/logo-icon.svg';

import heroHandPhone from '../../assets/images/hero-hand-phone.png';
import heroBlobs from '../../assets/images/hero-blobs.png';

import HowItWorks from '../../components/HowItWorks/HowItWorks';
import NaturalResults from '../../components/NaturalResults/NaturalResults';
import CtaSection from '../../components/CtaSection/CtaSection';

const Landing = () => {
    return (
        <div className="landingPage">
            {/* Hero Section */}
            <section className="hero">
                <header className="landingHeader">
                    <div className="mainLogo">
                        <img src={logo} alt="MyGoodSide.co" className="mainLogo__icon" />
                        MyGoodSide.Co
                    </div>
                    <nav className="navLinks">
                        <a href="#how-it-works">How It Works</a>
                        <a href="#promise">Our Promise</a>
                        <a href="#faq">FAQ</a>
                    </nav>
                    <Link to="/early-access" className="primaryBtn dark">Keep me in the loop</Link>
                </header>

                <div className="heroContent">
                    <div className="heroBlobs">
                        <img src={heroBlobs} alt="background" />
                    </div>
                    <h1 className="heroTitle">
                        MyGoodSide.Co
                    </h1>
                    <div className="heroTagline">
                        <span className="serif">No more</span> “WAIT, DELETE THAT!” IN THE GROUP CHAT.
                    </div>
                    <div className="heroButtons">
                        <Link to="/early-access" className="primaryBtn dark">Keep me in the loop</Link>
                        <a href="#how-it-works" className="secondaryBtn outline">How It Works</a>
                    </div>
                    <div className="heroImage">
                        <img src={heroHandPhone} alt="App Mockup" />
                    </div>
                </div>
            </section>

            <HowItWorks />

            <NaturalResults />

            <CtaSection />
        </div>
    );
};

export default Landing;
