import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, Camera } from 'lucide-react';
import './AccountSettings.scss';

import userAvatar from '../../assets/images/user-avatar.png';

const AccountSettings = () => {
    const navigate = useNavigate();
    const [isEditing, setIsEditing] = useState(false);

    const [formData, setFormData] = useState({
        fullName: 'ADAM SMITH',
        email: 'adamsmith@gmail.com',
        password: 'Adam123@#',
    });

    const [draft, setDraft] = useState({ ...formData });

    const handleEdit = () => {
        setDraft({ ...formData });
        setIsEditing(true);
    };

    const handleCancel = () => {
        setDraft({ ...formData });
        setIsEditing(false);
    };

    const handleSave = () => {
        setFormData({ ...draft });
        setIsEditing(false);
    };

    const handleChange = (field) => (e) => {
        setDraft(prev => ({ ...prev, [field]: e.target.value }));
    };

    return (
        <div className="accountSettingsPage profileBG">
            <div className="siteContainer">
                <div className="accountSettingsPage__inner">
                    <button className="backButton" onClick={() => navigate(-1)}>
                        <ArrowLeft size={18} />
                        <span className="backButton__text">Back</span>
                    </button>

                    <div className="settingsCard">

                        <div className="settingsCard__content">
                            {/* Header */}
                            <div className="settingsCard__header">
                                <h1 className="settingsCard__title">ACCOUNT SETTINGS</h1>
                                <p className="settingsCard__subtitle">Update your details and control how your account works.</p>
                            </div>

                            {/* Avatar */}
                            <div className="settingsCard__avatar">
                                <div className="settingsCard__avatar-wrapper">
                                    <img src={userAvatar} alt="Profile" className="settingsCard__avatar-img" />
                                    <button className="cameraBtn" aria-label="Change photo">
                                        <Camera size={20} />
                                    </button>
                                </div>
                                <p className="settingsCard__avatar-name">ADAM SMITH</p>
                            </div>

                            {/* Form */}
                            <div className="settingsCard__form">
                                {/* Full Name */}
                                <div className="inputGroup">
                                    <div className="labelRow">
                                        <label className="formField__label">Full Name</label>
                                        {!isEditing && (
                                            <button className="editBtn" onClick={handleEdit}>Edit</button>
                                        )}
                                    </div>
                                    <div className="inputFieldWrapper">
                                        <input
                                            type="text"
                                            className={`${isEditing ? 'editable' : 'readonly'}`}
                                            value={isEditing ? draft.fullName : formData.fullName}
                                            onChange={handleChange('fullName')}
                                            readOnly={!isEditing}
                                        />
                                    </div>
                                </div>

                                {/* Email */}
                                <div className="inputGroup">
                                    <label>Email Address</label>
                                    <div className="inputFieldWrapper">
                                        <input
                                            type="email"
                                            className={`${isEditing ? 'editable' : 'readonly'}`}
                                            value={isEditing ? draft.email : formData.email}
                                            onChange={handleChange('email')}
                                            readOnly={!isEditing}
                                        />
                                    </div>
                                </div>

                                {/* Password */}
                                <div className="inputGroup">
                                    <label>Change Password</label>
                                    <div className="inputFieldWrapper">
                                        <input
                                            type={isEditing ? 'text' : 'password'}
                                            className={`${isEditing ? 'editable' : 'readonly'}`}
                                            value={isEditing ? draft.password : formData.password}
                                            onChange={handleChange('password')}
                                            readOnly={!isEditing}
                                        />
                                    </div>
                                </div>

                                {/* Actions */}
                                {isEditing && (
                                    <div className="formActions">
                                        <button className="button button--outline" onClick={handleCancel}>
                                            Cancel
                                        </button>
                                        <button className="button" onClick={handleSave}>
                                            Save changes
                                        </button>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AccountSettings;
