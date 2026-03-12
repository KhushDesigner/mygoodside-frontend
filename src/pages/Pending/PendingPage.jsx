import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, UserPlus, Plus, MoreHorizontal } from 'lucide-react';
import './PendingPage.scss';

// Components
import AddFriendModal from '../../components/AddFriendModal/AddFriendModal';

// Mock Assets
import userAvatar from '../../assets/images/user-avatar.png';
import albumImg1 from '../../assets/images/photo-1.png';
import albumImg2 from '../../assets/images/photo-2.png';
import albumImg3 from '../../assets/images/photo-3.png';
import Warning from '../../assets/images/Warning.svg';
import Sparkle from '../../assets/images/Sparkle.svg';

const MOCK_STACKS = [
    {
        id: 1,
        title: "SARAH'S FRIENDS",
        status: "Pending", // 'Pending' | 'Generated'
        coverImage: albumImg1,
        photoCount: 4,
    },
    {
        id: 2,
        title: "SARAH'S COUSINS",
        status: "Generated",
        coverImage: albumImg2,
        photoCount: 5,
    },
    {
        id: 3,
        title: "SARAH'S NEIGHBORS",
        status: "Generated",
        coverImage: albumImg3,
        photoCount: 3,
    }
];

const PendingPage = () => {
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
                                    <h1 className="profilePage__author-name">SARAH'S BIRTHDAY BRUNCH</h1>
                                    <p className="profilePage__author-stats">3 stacks • 12 photos</p>
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
                            <div className='profilePage__list'>
                                <div className="albumsGrid">
                                    {MOCK_STACKS.map(stack => (
                                        <div
                                            className="albumCard"
                                            key={stack.id}
                                            onClick={() => navigate('/profile/generated')}
                                            style={{ cursor: 'pointer' }}
                                        >
                                            <div className="albumCard__stack">
                                                <div className="albumCard__main">
                                                    <img src={stack.coverImage} alt={stack.title} className="albumImg" />

                                                    {stack.status === 'Pending' && (
                                                        <div className="statusBadge statusBadge--pending">
                                                            <span><img src={Warning} alt="Warning" /> Pending</span>
                                                        </div>
                                                    )}
                                                    {stack.status === 'Generated' && (
                                                        <div className="statusBadge statusBadge--generated">
                                                            <span><img src={Sparkle} alt="Sparkle" /> Generated</span>
                                                        </div>
                                                    )}

                                                    <div className="albumOverlay">
                                                        <h3 className="albumTitle">{stack.title}</h3>
                                                    </div>
                                                </div>
                                                <div className="albumCard__main">
                                                    <img src={stack.coverImage} alt={stack.title} className="albumImg" />

                                                    {stack.status === 'Pending' && (
                                                        <div className="statusBadge statusBadge--pending">
                                                            <span><img src={Warning} alt="Warning" /> Pending</span>
                                                        </div>
                                                    )}
                                                    {stack.status === 'Generated' && (
                                                        <div className="statusBadge statusBadge--generated">
                                                            <span><img src={Sparkle} alt="Sparkle" /> Generated</span>
                                                        </div>
                                                    )}

                                                    <div className="albumOverlay">
                                                        <h3 className="albumTitle">{stack.title}</h3>
                                                    </div>
                                                </div>
                                                <div className="albumCard__main">
                                                    <img src={stack.coverImage} alt={stack.title} className="albumImg" />

                                                    {stack.status === 'Pending' && (
                                                        <div className="statusBadge statusBadge--pending">
                                                            <span><img src={Warning} alt="Warning" /> Pending</span>
                                                        </div>
                                                    )}
                                                    {stack.status === 'Generated' && (
                                                        <div className="statusBadge statusBadge--generated">
                                                            <span><img src={Sparkle} alt="Sparkle" /> Generated</span>
                                                        </div>
                                                    )}

                                                    <div className="albumOverlay">
                                                        <h3 className="albumTitle">{stack.title}</h3>
                                                    </div>
                                                </div>
                                                <div className="albumCard__main">
                                                    <img src={stack.coverImage} alt={stack.title} className="albumImg" />

                                                    {stack.status === 'Pending' && (
                                                        <div className="statusBadge statusBadge--pending">
                                                            <span><img src={Warning} alt="Warning" /> Pending</span>
                                                        </div>
                                                    )}
                                                    {stack.status === 'Generated' && (
                                                        <div className="statusBadge statusBadge--generated">
                                                            <span><img src={Sparkle} alt="Sparkle" /> Generated</span>
                                                        </div>
                                                    )}

                                                    <div className="albumOverlay">
                                                        <h3 className="albumTitle">{stack.title}</h3>
                                                    </div>
                                                </div>
                                            </div>
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

export default PendingPage;
