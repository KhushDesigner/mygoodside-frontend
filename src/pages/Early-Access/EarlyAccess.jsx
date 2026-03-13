import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './EarlyAccess.scss';
import logo from '../../assets/images/logo-icon.svg';

const EarlyAccess = () => {
    const [email, setEmail] = useState('');
    const [name, setName] = useState('');
    const [isSubmitted, setIsSubmitted] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        // In a real app, you would send this to your backend
        console.log('Early Access Request:', { name, email });
        setIsSubmitted(true);
    };

    return (
        <div className="earlyAccessPage">
            {/* Animated Background Blobs */}
            <div className="bgBlobs">
                <div className="blob blob1"></div>
                <div className="blob blob2"></div>
            </div>

            <header className="header">
                <Link to="/" className="logo">
                    <img src={logo} alt="MyGoodSide" />
                    MyGoodSide.Co
                </Link>
            </header>

            <main className="contentContainer">
                <div className="accessCard">
                    {!isSubmitted ? (
                        <>
                            <span className="badge">Limited Spots</span>
                            <h1>Join the <span>Early Access</span> List</h1>
                            <p>Be the first to know when we launch and get exclusive early bird benefits. No more “wait, delete that!”</p>
                            
                            <form className="accessForm" onSubmit={handleSubmit}>
                                <div className="inputGroup">
                                    <label htmlFor="name">Full Name</label>
                                    <input 
                                        type="text" 
                                        id="name" 
                                        placeholder="Enter your name" 
                                        value={name}
                                        onChange={(e) => setName(e.target.value)}
                                        required 
                                    />
                                </div>
                                <div className="inputGroup">
                                    <label htmlFor="email">Email Address</label>
                                    <input 
                                        type="email" 
                                        id="email" 
                                        placeholder="Enter your email" 
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                        required 
                                    />
                                </div>
                                <button type="submit" className="submitBtn">Keep me in the loop</button>
                            </form>
                            
                            <div className="footerInfo">
                                <p>Already have an account? <Link to="/signin">Sign in</Link></p>
                            </div>
                        </>
                    ) : (
                        <div className="successState">
                            <div className="successIcon">✨</div>
                            <h1>You're on the list!</h1>
                            <p>Thanks for joining, <strong>{name}</strong>. We've sent a confirmation to <strong>{email}</strong>. Stay tuned for updates!</p>
                            <Link to="/" className="submitBtn" style={{ textDecoration: 'none', display: 'block', marginTop: '20px' }}>
                                Back to Home
                            </Link>
                        </div>
                    )}
                </div>
            </main>
        </div>
    );
};

export default EarlyAccess;
