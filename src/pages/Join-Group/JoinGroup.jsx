import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Link2 } from 'lucide-react';
import './JoinGroup.scss';
import onboarding from '../../assets/images/onboarding-bg.png'
import link from '../../assets/images/Link.png'
import arrowRight from '../../assets/images/ArrowRight.svg'

const JoinGroup = () => {
    const navigate = useNavigate();
    const [inviteLink, setInviteLink] = useState('');

    const handleJoin = () => {
        if (inviteLink.trim()) {
            navigate('/identify-yourself');
        }
    };

    return (
        <div className="joinGroupPage">
            <div className="siteContainer">

                <div className="joinGroupPage__content">
                    {/* Headline */}
                    <div className="joinGroupPage__header">
                        <h1 className="joinGroupPage__title">THE GROUP PHOTO, <span>Perfected.</span></h1>
                        <div className="joinGroupPage__image">
                            <img src={onboarding} alt="Heads Logo" className="onboarding image" />
                        </div>
                    </div>

                    {/* Join card */}
                    <div className="joinCard">
                        <div className="joinCard__header">
                            <h2 className="joinCard__title">JOIN A GROUP PHOTO</h2>
                            <p className="joinCard__subtitle">Enter your invite link to join and create account</p>
                        </div>
                        <div className="joinCard__inputWrapper">
                            <img src={link} alt="Link" className="joinCard__inputWrapper-icon" />
                            <input
                                type="text"
                                className="joinCard__input"
                                placeholder="Paste invite link"
                                value={inviteLink}
                                onChange={e => setInviteLink(e.target.value)}
                            />
                        </div>

                        <button className="button button--sm" onClick={handleJoin}>
                            Join group photo <img src={arrowRight} alt="Arrow Right" />
                        </button>


                        <p className="joinCard__footer">Want to create your own group photo?</p>
                        <button
                            className="joinCard__signIn"
                            onClick={() => navigate('/signup')}
                        >
                            Sign in or create a new account
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default JoinGroup;
