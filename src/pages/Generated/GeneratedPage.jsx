import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, UserPlus, Plus, MoreHorizontal } from 'lucide-react';
import './GeneratedPage.scss';

import AddFriendModal from '../../components/AddFriendModal/AddFriendModal';

// Mock Assets
import userAvatar from '../../assets/images/user-avatar.png';
import photo1 from '../../assets/images/photo-1.png';
import photo2 from '../../assets/images/photo-2.png';
import photo3 from '../../assets/images/photo-3.png';
import photo4 from '../../assets/images/photo-4.png';
import Sparkle from '../../assets/images/Sparkle.svg';

const MOCK_PHOTOS = [
    { id: 1, image: photo1, isGenerated: true },
    { id: 2, image: photo2, isGenerated: false },
    { id: 3, image: photo3, isGenerated: false },
    { id: 4, image: photo4, isGenerated: false },
];

const GeneratedPage = () => {
    const navigate = useNavigate();
    const [isAddFriendModalOpen, setIsAddFriendModalOpen] = useState(false);

    return (
        <div className="profilePage profileBG">
            <div className="siteContainer">
                <div className="profilePage__inner">
                    <button className="backButton" onClick={() => navigate(-1)}>
                        <ArrowLeft size={18} />
                        <span className="backButton__text">Back</span>
                    </button>

                    <div className="profilePage__info">
                        <div className="profilePage__header">
                            <div className="profilePage__author">
                                <img src={userAvatar} alt="User Profile" className="profilePage__author-img" />
                                <div className="profilePage__author-details">
                                    <h1 className="profilePage__author-name">SARAH'S COUSINS</h1>
                                    <p className="profilePage__author-stats">4 photos</p>
                                </div>
                            </div>
                            <div className="profilePage__actions">
                                <button
                                    className="button button--outline"
                                    onClick={() => setIsAddFriendModalOpen(true)}
                                >
                                    <UserPlus size={18} /> Add friend
                                </button>
                                <button
                                    className="button"
                                    onClick={() => navigate('/upload')}
                                >
                                    <Plus size={18} /> Create photo
                                </button>
                            </div>
                        </div>

                        <div className="profilePage__content">
                            <div className="profilePage__list">
                                <div className="generatedGrid">
                                    {MOCK_PHOTOS.map(photo => (
                                        <div className="generatedCard" key={photo.id}>
                                            {photo.isGenerated && (
                                                <div className="statusBadge statusBadge--generated">
                                                    <img src={Sparkle} alt="" />
                                                    <span>Generated</span>
                                                </div>
                                            )}
                                            <img src={photo.image} alt="photo" className="generatedCard__img" />
                                        </div>
                                    ))}
                                </div>
                                <button className="moreBtn">
                                    <MoreHorizontal size={24} />
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <AddFriendModal
                isOpen={isAddFriendModalOpen}
                onClose={() => setIsAddFriendModalOpen(false)}
            />
        </div>
    );
};

export default GeneratedPage;
