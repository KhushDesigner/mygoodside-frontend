import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, ArrowRight, Info } from 'lucide-react';
import './UploadPhoto.scss';

// Import images
import photo1 from '../../assets/images/photo-1.png';
import photo2 from '../../assets/images/photo-2.png';
import photo3 from '../../assets/images/photo-3.png';
import photo4 from '../../assets/images/photo-4.png';
import photo5 from '../../assets/images/photo-5.png';
import photo6 from '../../assets/images/photo-6.jpg';

const MOCK_PHOTOS = [
    { id: 1, url: photo1 },
    { id: 2, url: photo2 },
    { id: 3, url: photo3 },
    { id: 4, url: photo4 },
    { id: 5, url: photo5 },
    { id: 6, url: photo6 },
];

const UploadPhoto = () => {
    const navigate = useNavigate();
    const [selectedId, setSelectedId] = useState(5); // Default selection as per design

    return (
        <div className="selectBasePage uploadPhoto">
            <div className="siteContainer">
                <div className="selectBasePage__inner">
                    <button className="backButton" onClick={() => navigate(-1)}>
                        <ArrowLeft size={18} />
                        <span className="backButton__text">Back</span>
                    </button>

                    <div className="sectionHeader">
                        <h1 className="sectionHeader__title">
                            TAP TO SELECT YOUR <span className="highlight">Good Side</span>
                        </h1>
                        <p className="sectionHeader__subtitle">
                            Scroll through the options below and pick your favorite photo of yourself. We only use the real you from the photos you just took. No AI-generated faces here—just your actual best moment.
                        </p>
                    </div>

                    <div className="selectBasePage__content">
                        <div className="selectBasePage__gridHeader">
                            <h4 className="photosCount">{MOCK_PHOTOS.length} photos uploaded</h4>
                        </div>

                        <div className="photoGrid">
                            {MOCK_PHOTOS.map(photo => (
                                <div
                                    key={photo.id}
                                    className={`photoItem ${selectedId === photo.id ? 'selected' : ''}`}
                                    onClick={() => setSelectedId(photo.id)}
                                >
                                    <div className="photoItem__imageWrapper">
                                        <img src={photo.url} alt={`Selection ${photo.id}`} />
                                        {selectedId === photo.id && (
                                            <span className="goodSideBadge">My good side</span>
                                        )}
                                    </div>
                                </div>
                            ))}
                        </div>

                        <button
                            className="button continueBtn"
                            onClick={() => {
                                navigate('/invite-group');
                            }}
                        >
                            Continue to invite <ArrowRight size={24} />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default UploadPhoto;
