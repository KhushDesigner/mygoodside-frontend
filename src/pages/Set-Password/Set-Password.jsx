import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, ArrowRight, Eye, EyeOff } from 'lucide-react';
import './Set-Password.scss';

const SetPassword = () => {
    const navigate = useNavigate();
    const [showNew, setShowNew] = useState(false);
    const [showConfirm, setShowConfirm] = useState(false);
    const [formData, setFormData] = useState({
        newPassword: '',
        confirmPassword: '',
    });
    const [error, setError] = useState('');

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
        if (error) setError('');
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (formData.newPassword !== formData.confirmPassword) {
            setError('Passwords do not match.');
            return;
        }
        if (formData.newPassword.length < 8) {
            setError('Password must be at least 8 characters.');
            return;
        }
        console.log('Password set successfully');
        navigate('/success');
    };

    return (
        <div className="authContainer">
            <div className="siteContainer">
                <div className="authContainer__inner">
                    <button className="backButton" onClick={() => navigate(-1)}>
                        <ArrowLeft size={18} />
                        <span className="backButton__text">Back</span>
                    </button>

                    <div className="authContainer__inner-content">
                        <div className="authCard">
                            <header className="authCard__header">
                                <h1 className="authCard__header-title">CREATE A NEW PASSWORD</h1>
                                <p className="authCard__header-subtitle">
                                    Make it strong and easy to remember.
                                </p>
                            </header>

                            <form className="authCard__form" onSubmit={handleSubmit}>
                                <div className="inputGroup">
                                    <label htmlFor="newPassword">New password</label>
                                    <div className="inputFieldWrapper">
                                        <input
                                            type={showNew ? 'text' : 'password'}
                                            id="newPassword"
                                            name="newPassword"
                                            placeholder="Enter new password"
                                            value={formData.newPassword}
                                            onChange={handleChange}
                                            required
                                        />
                                    </div>
                                </div>

                                <div className="inputGroup">
                                    <label htmlFor="confirmPassword">Confirm password</label>
                                    <div className="inputFieldWrapper">
                                        <input
                                            type={showConfirm ? 'text' : 'password'}
                                            id="confirmPassword"
                                            name="confirmPassword"
                                            placeholder="Re-enter password"
                                            value={formData.confirmPassword}
                                            onChange={handleChange}
                                            required
                                        />
                                        <button
                                            type="button"
                                            className="togglePassword"
                                            onClick={() => setShowConfirm(!showConfirm)}
                                            aria-label="Toggle confirm password visibility"
                                        >
                                            {showConfirm ? <EyeOff size={18} /> : <Eye size={18} />}
                                        </button>
                                    </div>
                                </div>

                                {error && <p className="formError">{error}</p>}

                                <button type="submit" className="button">
                                    Continue <ArrowRight size={20} />
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SetPassword;
