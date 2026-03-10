import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, Share2, Download, Facebook, Instagram, Phone, Ghost } from 'lucide-react';
import './PhotoGenerated.scss';

// Temporary mock final generated photo
import generatedPhoto from '../../assets/images/photo-1.png';

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
                            <img src={generatedPhoto} alt="Generated Good Side Photo" className="generatedImg" />
                        </div>

                        <h2 className="eventTitle">Sarah's birthday brunch</h2>

                        <div className="mainActions">
                            <button className="button button--outline shareBtn">
                                <Share2 size={18} /> Share with group
                            </button>
                            <button className="button downloadBtn">
                                <Download size={18} /> Download photo
                            </button>
                        </div>

                        <div className="socialShare">
                            <p className="socialShare__text">Or share with</p>
                            <div className="socialShare__icons">
                                <button className="socialIcon fb" title="Share to Facebook">
                                    <Facebook size={20} />
                                </button>
                                <button className="socialIcon ig" title="Share to Instagram">
                                    <Instagram size={20} />
                                </button>
                                <button className="socialIcon wa" title="Share to WhatsApp">
                                    <Phone size={20} />
                                </button>
                                <button className="socialIcon snap" title="Share to Snapchat">
                                    <Ghost size={20} />
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PhotoGenerated;
