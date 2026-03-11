import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, Share2, Download } from 'lucide-react';
import snap from '../../assets/images/snap.png';
import whatsapp from '../../assets/images/whatsapp.png';
import fb from '../../assets/images/fb.png';
import insta from '../../assets/images/insta.png';
import './PhotoGenerated.scss';

// Temporary mock final generated photo
import generatedPhoto from '../../assets/images/generated-img.png';

const PhotoGenerated = () => {
    const navigate = useNavigate();

    return (
        <div className="photoGeneratedPage">
            <div className="siteContainer">
                <div className="photoGeneratedPage__inner">
                    <button className="backButton" onClick={() => navigate(-1)}>
                        <ArrowLeft size={18} />
                        <span className="backButton__text">Back</span>
                    </button>

                    <div className="sectionHeader">
                        <h1 className="sectionHeader__title">
                            BEHOLD EVERYONE'S <span className="highlight">Good Side!</span>
                        </h1>
                    </div>

                    <div className="photoGeneratedPage__content">
                        <div className="photoContainer">
                            <img src={generatedPhoto} alt="Generated Good Side Photo" className="photoContainer__img" />
                        </div>

                        <h2 className="photoGeneratedPage__eventTitle">Sarah's birthday brunch</h2>
                        <div className="photoGeneratedPage__footer">
                            <div className="photoGeneratedPage__actions">
                                <button className="button button--outline">
                                    <Share2 size={18} /> Share with group
                                </button>
                                <button className="button">
                                    <Download size={18} /> Download photo
                                </button>
                            </div>

                            <div className="socialShare">
                                <p className="socialShare__text">Or share with</p>
                                <div className="socialShare__icons">
                                    <button className="socialShare__icon" title="Share to Facebook">
                                        <img src={fb} alt='Facebook' />
                                    </button>
                                    <button className="socialShare__icon" title="Share to Instagram">
                                        <img src={insta} alt='Instagram' />
                                    </button>
                                    <button className="socialShare__icon" title="Share to WhatsApp">
                                        <img src={whatsapp} alt='WhatsApp' />
                                    </button>
                                    <button className="socialShare__icon" title="Share to Snapchat">
                                        <img src={snap} alt='Snapchat' />
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PhotoGenerated;
