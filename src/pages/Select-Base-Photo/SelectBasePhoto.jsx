import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, ArrowRight, Info } from 'lucide-react';
import { Modal } from '@mui/material';
import './SelectBasePhoto.scss';

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

const SelectBasePhoto = () => {
    const navigate = useNavigate();
    const [selectedId, setSelectedId] = useState(5); // Default selection as per design
    const [showInfo, setShowInfo] = useState(false);
    const [isModalOpen, setIsModalOpen] = useState(false);

    return (
        <div className="selectBasePage templateBG">
            <div className="siteContainer">
                <div className="selectBasePage__inner">
                    <button className="backButton" onClick={() => navigate(-1)}>
                        <ArrowLeft size={18} />
                        <span className="backButton__text">Back</span>
                    </button>

                    <div className="sectionHeader">
                        <h1 className="sectionHeader__title">SELECT YOUR BASE PHOTO</h1>
                        <p className="sectionHeader__subtitle">
                            This photo will be the starting point for building your final group image.
                        </p>
                    </div>

                    <div className="selectBasePage__content">
                        <div className="selectBasePage__gridHeader">
                            <h4 className="photosCount">{MOCK_PHOTOS.length} photos uploaded</h4>
                            <div className="infoWrapper">
                                <button
                                    className="infoTrigger"
                                    onMouseEnter={() => setShowInfo(true)}
                                    onMouseLeave={() => setShowInfo(false)}
                                    onClick={() => setShowInfo(!showInfo)}
                                >
                                    What is The Base Photo? <Info size={24} />
                                </button>
                                {showInfo && (
                                    <div className="infoPopover">
                                        <p>
                                            The Base Photo is the main image we build everything from.
                                            If someone in the photo doesn't choose their <strong>Good Side</strong>,
                                            we'll automatically use this image for them.
                                        </p>
                                    </div>
                                )}
                            </div>
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
                                            <span className="baseBadge">Base photo</span>
                                        )}
                                    </div>
                                </div>
                            ))}
                        </div>

                        <button
                            className="button continueBtn"
                            onClick={() => setIsModalOpen(true)}
                        >
                            Continue <ArrowRight size={24} />
                        </button>
                    </div>

                    <Modal className='modalIdentify mainModal'
                        open={isModalOpen}
                        onClose={() => setIsModalOpen(false)}
                        aria-labelledby="base-photo-modal-title"
                        aria-describedby="base-photo-modal-description"
                    >
                        <div className="modalContent">
                            <div className="modalheader">
                                <h2 className="modalTitle" id="base-photo-modal-title">Are you in this photo?</h2>
                                <p className="modalText" id="base-photo-modal-description">If yes, you'll be able to highlight yourself.</p>
                            </div>
                            <div className="modalActions">
                                <button
                                    className="button button--outline"
                                    onClick={() => {
                                        setIsModalOpen(false);
                                    }}
                                >
                                    No, I'm not
                                </button>
                                <button
                                    className="button"
                                    onClick={() => {
                                        setIsModalOpen(false);
                                        navigate('/identify-yourself');
                                    }}
                                >
                                    Yes, I'm in it
                                </button>
                            </div>
                        </div>
                    </Modal>
                </div>
            </div>
        </div>
    );
};

export default SelectBasePhoto;
