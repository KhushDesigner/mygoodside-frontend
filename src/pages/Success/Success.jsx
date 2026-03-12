import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, ArrowRight, Check } from 'lucide-react';
import './Success.scss';

const Success = () => {
    const navigate = useNavigate();

    return (
        <div className="authContainer authBG authContainer--success">
            <div className="siteContainer">
                <div className="authContainer__inner">
                    <button className="backButton" onClick={() => navigate(-1)}>
                        <ArrowLeft size={18} />
                        <span className='backButton__text'>Back</span>
                    </button>
                    <div className="authContainer__inner-content">
                        <div className="authCard authCard--success">
                            <div className="successIcon">
                                <Check size={60} strokeWidth={2.5} />
                            </div>

                            <header className="authCard__header">
                                <h1 className="authCard__header-title">
                                    PASSWORD SUCCESSFULLY CHANGED!
                                </h1>
                                <p className="authCard__header-subtitle">
                                    Your password has been changed. You can now sign in with your new password.
                                </p>
                            </header>

                            <button className="button" onClick={() => navigate('/onboarding')}>
                                Sign in <ArrowRight size={20} />
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Success;
