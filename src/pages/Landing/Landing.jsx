import React from 'react';
import './Landing.scss';
import logo from '../../assets/images/logo-icon.svg';

import heroHandPhone from '../../assets/images/hero-hand-phone.png';
import heroBlobs from '../../assets/images/hero-blobs.png';

import work1 from '../../assets/images/work-1.png';
import work2_1 from '../../assets/images/work-2_1.png';
import work2_2 from '../../assets/images/work-2_2.png';
import work3_1 from '../../assets/images/work-3_1.png';
import work3_2 from '../../assets/images/work-3_2.png';
import work4_1 from '../../assets/images/work-4_1.png';
import work4_2 from '../../assets/images/work-4_2.png';
import work5 from '../../assets/images/work-5.png';
import workBgBlobs from '../../assets/images/work-bg-blobs.png';
import naturalBgBlobs from '../../assets/images/natural-bg-blobs.png';
import naturalChat from '../../assets/images/natural-chat.png';

import CtaSection from '../../components/CtaSection/CtaSection';
import NaturalResults from '../../components/NaturalResults/NaturalResults';

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
                    <button className="primaryBtn dark">Keep me in the loop</button>
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
                        <button className="primaryBtn dark">Keep me in the loop</button>
                        <button className="secondaryBtn outline">How It Works</button>
                    </div>
                    <div className="heroImage">
                        <img src={heroHandPhone} alt="App Mockup" />
                    </div>
                </div>
            </section>

            {/* How it Works Section */}
            <section id="how-it-works" className="howItWorks">
                <div className="workBlobs">
                    <img src={workBgBlobs} alt="background" />
                </div>
                <h2 className="sectionTitle">
                    HOW IT <span className="pill">Works</span>
                </h2>
                <p className="sectionSubtitle">A simple flow that keeps everyone in control.</p>

                <div className="stepsContainer">
                    <svg className="stepConnector" viewBox="0 0 1000 2400" fill="none" preserveAspectRatio="none">
                        <path d="M250 200 C 600 400, 800 600, 200 800 S 200 1200, 200 1500 S 800 1800, 800 2200" stroke="#1A1A1A" strokeWidth="2" strokeDasharray="10 10" />
                    </svg>

                    <div className="step step1">
                        <div className="stepImages">
                            <img src={work1} alt="Take a Few Shots" />
                        </div>
                        <div className="stepContent">
                            <div className="stepNumber">1</div>
                            <h3>Take a Few Shots</h3>
                            <p>Capture a quick series of the group—no pressure for <b>perfection</b> yet.</p>
                        </div>
                    </div>

                    <div className="step step2">
                        <div className="stepContent">
                            <div className="stepNumber">2</div>
                            <h3><span className="pill">Identify yourself</span>, set the Base Photo and choose your <span className="pill">Good Side</span></h3>
                            <p>Photographer sets the Base Photo and choses their <b>Good Side</b> first.</p>
                        </div>
                        <div className="stepImages dual">
                            <img src={work2_1} alt="Identify yourself" className="mainImg" />
                            <img src={work2_2} alt="Set Base Photo" className="subImg" />
                        </div>
                    </div>

                    <div className="step step3">
                        <div className="stepContent">
                            <div className="stepNumber">3</div>
                            <h3>Invite Your Friends</h3>
                            <p>Protect your friends' peace by sending a private link so they can choose their <b>Good Side</b> from their own phone.</p>
                        </div>
                        <div className="stepImages dual">
                            <img src={work3_1} alt="Invite friends" className="mainImg" />
                            <img src={work3_2} alt="QR Code" className="subImg qrImg" />
                        </div>
                    </div>

                    <div className="step step4">
                        <div className="stepImages dual">
                            <img src={work4_1} alt="Step 4 Main" className="mainImg" />
                            <img src={work4_2} alt="Step 4 Sub" className="subImg" />
                        </div>
                        <div className="stepContent">
                            <div className="stepNumber">4</div>
                            <h3>Individual Selection</h3>
                            <p>Each invited persons <b>privately</b> selects the version of themselves they like the most.</p>
                        </div>
                    </div>

                    <div className="step step5">
                        <div className="stepImages">
                            <img src={work5} alt="Everyone's Best Side" />
                        </div>
                        <div className="stepContent">
                            <div className="stepNumber">5</div>
                            <h3>Everyone's <span className="pill">Best Side</span></h3>
                            <p>Our “invisible” technology merges everyone's favorite version into one <b>natural-looking</b> photo and notifies the group when the <b>final image</b> has been created.</p>
                        </div>
                    </div>
                </div>
            </section>


            <NaturalResults />

            <CtaSection />
        </div>
    );
};

export default Landing;
