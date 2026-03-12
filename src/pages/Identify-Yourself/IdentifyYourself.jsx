import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import './IdentifyYourself.scss';

// Temporary import. You might want to pass the selected photo via state or a global store later.
import basePhoto from '../../assets/images/selectImage.png';

const IdentifyYourself = () => {
    const navigate = useNavigate();
    // Default selected circle id (or null)
    const [selectedFace, setSelectedFace] = useState(null);

    return (
        <div className="identifyYourselfPage templateBG">
            <div className="siteContainer">
                <div className="identifyYourselfPage__inner">
                    <button className="backButton" onClick={() => navigate(-1)}>
                        <ArrowLeft size={18} />
                        <span className="backButton__text">Back</span>
                    </button>

                    <header className="sectionHeader">
                        <h1 className="sectionHeader__title">IDENTIFY YOURSELF</h1>
                        <p className="sectionHeader__subtitle">
                            Identify yourself in this base photo so we know who you are.
                        </p>
                    </header>

                    <div className="identifyYourselfPage__content">
                        <div className="identifyYourselfPage__content-img">
                            <img src={basePhoto} alt="Base Photo" className="basePhotoImg" />
                        </div>
                        <button
                            className="button"
                            onClick={() => navigate('/upload-photo')}
                        >
                            This is me <ArrowRight size={24} />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default IdentifyYourself;
