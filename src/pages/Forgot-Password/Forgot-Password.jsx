import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import './Forgot-Password.scss';

const ForgotPassword = () => {
    const [email, setEmail] = useState('');
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Reset link sent to:', email);
        navigate('/verification');
    };

    return (
        <div className="authContainer authBG">
            <div className="siteContainer">
                <div className="authContainer__inner">
                    <button className="backButton" onClick={() => navigate(-1)}>
                        <ArrowLeft size={18} />
                        <span className='backButton__text'>Back</span>
                    </button>
                    <div className="authContainer__inner-content">
                        <div className="authCard">
                            <header className="authCard__header">
                                <h1 className="authCard__header-title">RESET YOUR PASSWORD</h1>
                                <p className="authCard__header-subtitle">
                                    Enter your email and we'll send you a reset link.
                                </p>
                            </header>

                            <form className="authCard__form" onSubmit={handleSubmit}>
                                <div className="inputGroup">
                                    <div className="inputFieldWrapper">
                                        <input
                                            type="email"
                                            id="email"
                                            name="email"
                                            placeholder="Enter your email"
                                            value={email}
                                            onChange={(e) => setEmail(e.target.value)}
                                            required
                                        />
                                    </div>
                                </div>

                                <button type="submit" className="button">
                                    Send reset link <ArrowRight size={20} />
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ForgotPassword;
