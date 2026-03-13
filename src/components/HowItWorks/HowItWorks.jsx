import React from 'react';
import './HowItWorks.scss';

// Import images
import work1 from '../../assets/images/work-1.png';
import work2_1 from '../../assets/images/work-2_1.png';
import work2_2 from '../../assets/images/work-2_2.png';
import work3_1 from '../../assets/images/work-3_1.png';
import work3_2 from '../../assets/images/work-3_2.png';
import work4_1 from '../../assets/images/work-4_1.png';
import work4_2 from '../../assets/images/work-4_2.png';
import work5 from '../../assets/images/work-5.png';

const HowItWorks = () => {
    return (
        <section id="how-it-works" className="howItWorks">
            {/* Background Colorful Glows */}
            <div className="bgBlobs">
                <div className="blob blob1"></div>
                <div className="blob blob2"></div>
                <div className="blob blob3"></div>
                <div className="blob blob4"></div>
                <div className="blob blob5"></div>
            </div>

            <div className="sectionHeader">
                <h2 className="sectionTitle">
                    <span>HOW IT</span> <span className="pill">Works</span>
                </h2>
                <p className="sectionSubtitle">A simple flow that keeps everyone in control.</p>
            </div>

            <div className="stepsContainer">
                {/* Connector SVG Line */}
                <svg className="stepConnector" viewBox="0 0 1000 2000" fill="none" preserveAspectRatio="none">
                    <path 
                        d="M250 150 C 600 350, 750 500, 750 700 S 250 1000, 250 1300 S 750 1600, 750 1850" 
                        stroke="#212121" 
                    />
                </svg>

                {/* Step 1 */}
                <div className="step step1 leftStep">
                    <div className="stepImages stack">
                        <img src={work1} alt="Take a Few Shots" />
                    </div>
                    <div className="stepContent">
                        <div className="stepNumber">1</div>
                        <h3>Take a Few Shots</h3>
                        <p>Capture a quick series of the group—no pressure for <strong>perfection</strong> yet.</p>
                    </div>
                </div>

                {/* Step 2 */}
                <div className="step step2 rightStep">
                    <div className="stepImages dual">
                        <img src={work2_1} alt="Mobile Mockup" className="mainImg" />
                        <img src={work2_2} alt="Mobile Mockup" className="subImg" />
                    </div>
                    <div className="stepContent">
                        <div className="stepNumber">2</div>
                        <h3>
                            <span className="pill">Identify yourself</span>, set the Base Photo and choose your <span className="pill">Good Side</span>
                        </h3>
                        <p>Photographer sets the Base Photo and choses their <strong>Good Side</strong> first.</p>
                    </div>
                </div>

                {/* Step 3 */}
                <div className="step step3 rightStep">
                    <div className="stepImages dual step3Images">
                        <img src={work3_1} alt="Invite Friends" className="mainImg" />
                        <img src={work3_2} alt="QR Link" className="subImg" />
                    </div>
                    <div className="stepContent">
                        <div className="stepNumber">3</div>
                        <h3>Invite Your Friends</h3>
                        <p>Protect your friends' peace by sending a private link so they can choose their <strong>Good Side</strong> from their own phone.</p>
                    </div>
                </div>

                {/* Step 4 */}
                <div className="step step4 leftStep">
                    <div className="stepImages dual">
                        <img src={work4_1} alt="Individual Selection" className="mainImg" />
                        <img src={work4_2} alt="Individual Selection" className="subImg" />
                    </div>
                    <div className="stepContent">
                        <div className="stepNumber">4</div>
                        <h3>Individual Selection</h3>
                        <p>Each invited persons <strong>privately</strong> selects the version of themselves they like the most.</p>
                    </div>
                </div>

                {/* Step 5 */}
                <div className="step step5 leftStep">
                    <div className="stepImages">
                        <img src={work5} alt="Everyone's Best Side" />
                    </div>
                    <div className="stepContent">
                        <div className="stepNumber">5</div>
                        <h3>Everyone's <span className="pill">Best Side</span></h3>
                        <p>Our “invisible” technology merges everyone's favorite version into one <strong>natural-looking</strong> photo and notifies the group when the <strong>final image</strong> has been created.</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HowItWorks;
