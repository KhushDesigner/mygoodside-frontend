import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, ArrowRight, Copy, Clock, Search, Facebook, Instagram, MessageCircle, Phone, Ghost, Link as LinkIcon } from 'lucide-react';
import { Modal } from '@mui/material';
import './InviteGroup.scss';

import userAvatar from '../../assets/images/user-avatar.png';
import qrCode from '../../assets/images/code.png';
import snap from '../../assets/images/snap.png';
import whatsapp from '../../assets/images/whatsapp.png';
import fb from '../../assets/images/fb.png';
import messenger from '../../assets/images/messenger.png';
import insta from '../../assets/images/insta.png';
import magnifyingGlass from '../../assets/images/MagnifyingGlass.svg';

const InviteGroup = () => {
    const navigate = useNavigate();
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [deadline, setDeadline] = useState(24);

    const handleCopy = () => {
        navigator.clipboard.writeText('mygoodside.co/join/sarah-bday-2026');
        // Toast or notification could be added here
    };

    return (
        <div className="inviteGroupPage">
            <div className="siteContainer">
                <div className="inviteGroupPage__inner">
                    <button className="backButton" onClick={() => navigate(-1)}>
                        <ArrowLeft size={18} />
                        <span className="backButton__text">Back</span>
                    </button>

                    <div className="sectionHeader">
                        <h1 className="sectionHeader__title">
                            INVITE YOUR GROUP
                        </h1>
                        <p className="sectionHeader__subtitle">
                            Share this link with everyone in the photo. They'll each privately choose their <strong>Good Side</strong>, and we bring them all together into one beautiful moment.
                        </p>
                    </div>

                    <div className="inviteGroupPage__content">
                        {/* Invite Link Block */}
                        <div className="cardBlock linkBlock">
                            <div className='copyLinkBlock'>
                                <h3 className="copyLinkBlock__title">Your invite link</h3>
                                <div className="copyLinkBlock__inputWrapper">
                                    <div className="linkInput">
                                        <LinkIcon size={16} className="linkInput__icon" />
                                        <span>mygoodside.co/join/sarah-bday-2026</span>
                                    </div>
                                    <button className="copyBtn" onClick={handleCopy}>
                                        <Copy size={18} /> Copy link
                                    </button>
                                </div>
                            </div>

                            <div className="linkBlock__qrWrapper">
                                <img src={qrCode} className="linkBlock__qrImg" />
                                <p className="linkBlock__qrText">QR code for easy sharing</p>
                            </div>
                        </div>

                        {/* Deadline Block */}
                        <div className="cardBlock deadlineBlock">
                            <Clock size={24} className="deadlineBlock__icon" />

                            <div className="deadlineBlock__content">
                                <h3 className="deadlineBlock__title">Response deadline</h3>
                                <p className="deadlineBlock__subtitle">
                                    If someone doesn't respond in time, the base photo will be used.
                                </p>
                                <div className="deadlineBlock__inputWrapper">
                                    <input
                                        type="number"
                                        className="deadlineBlock__input"
                                        value={deadline}
                                        onChange={(e) => setDeadline(e.target.value)}
                                    />
                                    <span className="deadlineBlock__inputUnit">hours</span>
                                </div>
                            </div>
                        </div>

                        <button
                            className="button continueBtn"
                            onClick={() => setIsModalOpen(true)}
                        >
                            Send invite <ArrowRight size={24} />
                        </button>
                    </div>

                    {/* Share Modal */}
                    <Modal
                        className="mainModal shareModal"
                        open={isModalOpen}
                        onClose={() => setIsModalOpen(false)}
                        aria-labelledby="share-modal-title"
                        aria-describedby="share-modal-description"
                    >
                        <div className="modalContent">
                            <div className="modalheader">
                                <h2 className="modalTitle" id="share-modal-title">Share your invite</h2>
                                <p className="modalText" id="share-modal-description">
                                    Send this link so everyone can choose their <strong>Good Side</strong>.
                                </p>
                            </div>

                            <div className="modalBody">
                                <div className='copyLinkBlock'>
                                    <h3 className="copyLinkBlock__title">Your invite link</h3>
                                    <div className="copyLinkBlock__inputWrapper">
                                        <div className="linkInput">
                                            <LinkIcon size={16} className="linkInput__icon" />
                                            <span>mygoodside.co/join/sarah-bday-2026</span>
                                        </div>
                                        <button className="copyBtn" onClick={handleCopy}>
                                            <Copy size={18} /> Copy link
                                        </button>
                                    </div>
                                </div>

                                <div className="socialIcons">
                                    <div className="socialItem">
                                        <div className="socialIcon"><img src={fb} alt='Facebook' /></div>
                                        <span>Facebook</span>
                                    </div>
                                    <div className="socialItem">
                                        <div className="socialIcon"><img src={insta} alt='Instagram' /></div>
                                        <span>Instagram</span>
                                    </div>
                                    <div className="socialItem">
                                        <div className="socialIcon"><img src={messenger} alt='Messenger' /></div>
                                        <span>Messenger</span>
                                    </div>
                                    <div className="socialItem">
                                        <div className="socialIcon"><img src={whatsapp} alt='WhatsApp' /></div>
                                        <span>WhatsApp</span>
                                    </div>
                                    <div className="socialItem">
                                        <div className="socialIcon"><img src={snap} alt='Snapchat' /></div>
                                        <span>Snapchat</span>
                                    </div>
                                </div>
                                <div className='inviteUser'>
                                    <div className="searchWrapper">
                                        <img src={magnifyingGlass} alt='MagnifyingGlass' className="searchIcon" />
                                        <input type="email" placeholder="Search by email" className="searchInput" />
                                    </div>

                                    <div className="inviteUserList">
                                        <div className="inviteUserItem">
                                            <div className="inviteUserItem__inner">
                                                <img src={userAvatar} alt="Emma Watson" className="inviteUserItem__avatar" />
                                                <div className="inviteUserItem__info">
                                                    <h4 className="inviteUserItem__name">Emmawatson</h4>
                                                    <p className="inviteUserItem__email">emmawatson23@gmail.com</p>
                                                </div>
                                            </div>
                                            <button className="button button--outline">Send</button>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="modalActions">
                                <button
                                    className="button w-full"
                                    onClick={() => {
                                        setIsModalOpen(false);
                                        navigate('/status');
                                    }}
                                >
                                    Continue
                                </button>
                            </div>
                        </div>
                    </Modal>

                </div>
            </div>
        </div>
    );
};

export default InviteGroup;
