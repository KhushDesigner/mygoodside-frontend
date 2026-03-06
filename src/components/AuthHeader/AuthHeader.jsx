import React from 'react'
import './authHeader.scss'
import logo from '../../assets/images/logo-icon.svg';
import Bell from '../../assets/images/Bell.svg';
import userAvatar from '../../assets/images/user-avatar.png'; // Assuming this exists or will be added

const AuthHeader = ({ isDashboard }) => {
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
                            <div className="authHeader__userProfile">
                                <img src={userAvatar} alt="User" />
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </section>
    );
};

export default AuthHeader