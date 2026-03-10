import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, Bell } from 'lucide-react';
import './Status.scss';

// Mock Avatars
import avatar1 from '../../assets/images/user-avatar.png'; // Will reuse for Emma
// Could use the same or different placeholders for Jake and Sophie, using UI standard names
const mockUsers = [
    {
        id: 1,
        name: 'Emma Watson',
        statusText: 'Good Side selected',
        statusType: 'selected', // purple
        avatar: avatar1,
    },
    {
        id: 2,
        name: 'Jake Miller',
        statusText: 'Still deciding...',
        statusType: 'pending', // yellow
        avatar: avatar1,
    },
    {
        id: 3,
        name: 'Sophie Chen',
        statusText: 'Still deciding...',
        statusType: 'pending', // yellow
        avatar: avatar1,
    }
];

const Status = () => {
    const navigate = useNavigate();

    const selectedCount = mockUsers.filter(u => u.statusType === 'selected').length;
    const totalCount = mockUsers.length;

    return (
        <div className="statusPage">
            <div className="siteContainer">
                <div className="statusPage__inner">
                    <button className="backButton" onClick={() => navigate(-1)}>
                        <ArrowLeft size={18} />
                        <span className="backButton__text">Back</span>
                    </button>

                    <div className="sectionHeader">
                        <h1 className="sectionHeader__title">
                            WAITING FOR THE FINAL
                            'LOOKS' TO BE LOCKED IN...
                        </h1>
                        <p className="sectionHeader__subtitle">
                            Soon, everyone will be captured exactly as they wish to be seen.
                        </p>
                    </div>

                    <div className="statusPage__content">
                        {/* Progress Section */}
                        <div className="progressSection">
                            <div className="progressBar">
                                <div
                                    className="progressBar__fill"
                                    style={{ width: `${(selectedCount / totalCount) * 100}%` }}
                                ></div>
                            </div>
                            <p className="progressSection__text">
                                {selectedCount} of {totalCount} have chosen their <strong>Good Side</strong>
                            </p>
                        </div>

                        {/* Status Card Block */}
                        <div className="cardBlock statusCard">
                            <h3 className="statusCard__title">Invited to "Sarah's Birthday Brunch"</h3>

                            <div className="statusCard__userList">
                                {mockUsers.map(user => (
                                    <div className="userStatusItem" key={user.id}>
                                        <div className="userStatusItem__info">
                                            <img src={user.avatar} alt={user.name} className="userStatusItem__avtar" />
                                            <div className="userStatusItem__details">
                                                <h4 className="userStatusItem__name">{user.name}</h4>
                                                <p className={`userStatusItem__text ${user.statusType}`}>
                                                    {user.statusText}
                                                </p>
                                            </div>
                                        </div>
                                        <div className={`statusIndicator ${user.statusType}`}></div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Action Buttons */}
                        <div className="statusPage__actionButtons">
                            <button className="button button--outline">
                                <Bell size={18} /> Send a gentle reminder
                            </button>
                            <button
                                className="button"
                                onClick={() => navigate('/photo-generated')}
                            >
                                Create final photo
                            </button>
                        </div>

                        <p className="statusPage__notice">
                            If someone doesn't respond in time, the base photo
                            will be used for their selection.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Status;
