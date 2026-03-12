import React, { useState } from 'react';
import { X, Check } from 'lucide-react';
import { Modal } from '@mui/material';
import './AddFriendModal.scss';

// Mock avatars
import userAvatar from '../../assets/images/user-avatar.png';
import photo1 from '../../assets/images/photo-1.png';
import photo2 from '../../assets/images/photo-2.png';
import photo3 from '../../assets/images/photo-3.png';

const MOCK_FRIENDS = [
    { id: 1, name: 'Chris', avatar: userAvatar },
    { id: 2, name: 'Emma', avatar: photo1 },
    { id: 3, name: 'Sara', avatar: photo2 },
    { id: 4, name: 'Jake', avatar: photo3 },
    { id: 5, name: 'Kathy', avatar: userAvatar },
    { id: 6, name: 'Emma', avatar: photo1 },
    { id: 7, name: 'Jerry', avatar: photo2 },
    { id: 8, name: 'Patricia', avatar: photo3 },
    { id: 9, name: 'Alex', avatar: userAvatar },
    { id: 10, name: 'Judith', avatar: photo1 },
];

const AddFriendModal = ({ isOpen, onClose }) => {
    const [email, setEmail] = useState('');
    const [selectedFriends, setSelectedFriends] = useState([2, 4, 6, 9]); // Pre-select some to match mock

    if (!isOpen) return null;

    const toggleFriendSelection = (id) => {
        setSelectedFriends(prev =>
            prev.includes(id) ? prev.filter(fId => fId !== id) : [...prev, id]
        );
    };

    return (
        <Modal
            className="mainModal addFriendModal"
            open={isOpen}
            onClose={onClose}
        >
            <div className="modalContent">

                <button className="closeBtn" onClick={onClose}>
                    <X size={20} />
                </button>

                <div className="modalHeader">
                    <h2 className="modalTitle">Add Friends</h2>
                    <p className="modalSubtitle">
                        Choose friends to share your memories with.
                        Once they accept, you'll both see each other's albums.
                    </p>
                </div>

                <div className="inviteSection">
                    <label className="sectionLabel inputLabel">Invite friend</label>
                    <div className="inviteInputGroup">
                        <input
                            type="email"
                            placeholder="Enter en email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                        <button className="doneBtn">Done</button>
                    </div>
                </div>

                <div className="friendsSection">
                    <label className="sectionLabel">Friends on MyGoodSide</label>
                    <div className="friendsGrid">
                        {MOCK_FRIENDS.map(friend => {
                            const isSelected = selectedFriends.includes(friend.id);
                            return (
                                <div
                                    key={friend.id}
                                    className={`friendItem ${isSelected ? 'selected' : ''}`}
                                    onClick={() => toggleFriendSelection(friend.id)}
                                >
                                    <div className="avatarWrapper">
                                        <img src={friend.avatar} alt={friend.name} className="friendAvatar" />
                                        {isSelected && (
                                            <div className="checkBadge">
                                                <Check size={12} strokeWidth={3} />
                                            </div>
                                        )}
                                    </div>
                                    <span className="friendName">{friend.name}</span>
                                </div>
                            );
                        })}
                    </div>
                </div>

                <div className="modalFooter">
                    <button className="button w-full" onClick={onClose}>
                        Send Request
                    </button>
                </div>
            </div>
        </Modal>
    );
};

export default AddFriendModal;
