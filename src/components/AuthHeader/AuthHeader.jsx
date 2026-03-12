import React from 'react'
import './authHeader.scss'
import logo from '../../assets/images/logo-icon.svg';
import Bell from '../../assets/images/Bell.svg';
import userAvatar from '../../assets/images/user-avatar.png'; // Assuming this exists or will be added
import { useNavigate } from 'react-router-dom';

const AuthHeader = ({ isDashboard }) => {
    const navigate = useNavigate();
    return (
        <section className="authHeader">
            <div className="siteContainer">
                <div className="authHeader__inner">
                    <div className="mainLogo">
                        <img src={logo} alt="MyGoodSide.co" className="mainLogo__icon" />
                        MyGoodSide.Co
                    </div>
                    {isDashboard && (
                        <div className="authHeader__userActions">
                            <button className="authHeader__notificationBtn">
                                <img src={Bell} alt="Bell" />
                            </button>
                            <button className="authHeader__userProfile" onClick={() => navigate('/profile')}>
                                <img src={userAvatar} alt="User" />
                            </button>
                        </div>
                    )}
                </div>
            </div>
        </section>
    );
};

export default AuthHeader