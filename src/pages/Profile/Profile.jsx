import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, UserPlus, Plus, LayoutGrid, User, Calendar, MoreHorizontal } from 'lucide-react';
import './Profile.scss';

// Mock Assets
import userAvatar from '../../assets/images/user-avatar.png';
import albumImg1 from '../../assets/images/photo-1.png';
import albumImg2 from '../../assets/images/photo-3.png';

const MOCK_ALBUMS = [
    {
        id: 1,
        title: "SARAH'S BIRTHDAY BRUNCH",
        date: "Jan 16, 2026",
        coverImage: albumImg1,
        photoCount: 5,
    },
    {
        id: 2,
        title: "HOLIDAY GATHERING",
        date: "Feb 27, 2025",
        coverImage: albumImg2,
        photoCount: 3,
    }
];

const Profile = () => {
    const navigate = useNavigate();
    const [activeTab, setActiveTab] = useState('albums'); // 'albums' | 'photos'

    return (
        <div className="profilePage">
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
                                    <h1 className="profilePage__author-name">YOUR MEMORIES</h1>
                                    <p className="profilePage__author-stats">2 events • 8 photos</p>
                                </div>
                            </div>
                            <div className="profilePage__actions">
                                <button className="button button--outline">
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

                        <div className="profilePage__tabs">
                            <button
                                className={`tabBtn ${activeTab === 'albums' ? 'active' : ''}`}
                                onClick={() => setActiveTab('albums')}
                            >
                                <LayoutGrid size={18} /> My albums
                            </button>
                            <button
                                className={`tabBtn ${activeTab === 'photos' ? 'active' : ''}`}
                                onClick={() => setActiveTab('photos')}
                            >
                                <User size={18} /> Photos of me
                            </button>
                        </div>

                        <div className="profilePage__content">
                            {activeTab === 'albums' && (
                                <div className='profilePage__list'>
                                    <div className="albumsGrid">
                                        {MOCK_ALBUMS.map(album => (
                                            <div className="albumCard" key={album.id}>
                                                <div className="albumCard__stack">
                                                    <div className="albumCard__stackLayer layer3"></div>
                                                    <div className="albumCard__stackLayer layer2"></div>
                                                    <div className="albumCard__stackLayer layer1"></div>

                                                    <div className="albumCard__main">
                                                        <img src={album.coverImage} alt={album.title} className="albumImg" />
                                                        <div className="albumOverlay">
                                                            <h3 className="albumTitle">{album.title}</h3>
                                                            <div className="albumDate">
                                                                <Calendar size={14} />
                                                                <span>{album.date}</span>
                                                            </div>
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
                            )}

                            {activeTab === 'photos' && (
                                <div className="photosGrid">
                                    {/* Photos grid placeholder */}
                                    <p style={{ color: '#4F4F4F' }}>No individual photos available right now.</p>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Profile;
