import React from 'react'
import naturalChat from '../../assets/images/natural-chat.png'
import './naturalResults.scss'

const NaturalResults = () => {
    return (
        <section id="natural-results" className="naturalResults">
            <div className='siteContainer'>
                <div className='naturalResults__inner'>
                    <div className="naturalResults__card">
                        <div className="naturalResults__chatSection">
                            <div className="chatGlass">
                                <div className="chatHeader">Friday Night Fun.</div>
                                <div className="chatContent">
                                    <img src={naturalChat} alt="Chat interaction" className="chatImage" />
                                </div>
                            </div>
                        </div>

                        <div className="naturalResults__textCard">
                            <div className="naturalResults__textCard-text">
                                <h5>
                                    <span>Confidence</span>
                                    AND</h5>
                                <h5> <span>harmony</span>
                                    , BUILT-IN</h5>
                                <h5> WITH OUR
                                    <span>consent</span></h5>
                                <h5> <span>forward</span>
                                    DESIGN.</h5>
                            </div>

                            <h5>
                                CHOICE
                                <b className="bold-alt">is</b>
                                YOURS.
                            </h5>
                        </div>
                    </div>


                    <div className="naturalResults__footer">
                        <div className="naturalResults__footer-badge">
                            Natural <span>Results</span>
                        </div>
                        <p className="naturalResults__footer-text">
                            We only use the photos you just took. No AI-generates faces here-just your actual best side.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default NaturalResults