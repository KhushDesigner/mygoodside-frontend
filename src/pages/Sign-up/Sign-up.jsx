import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Eye, EyeOff, ArrowRight } from 'lucide-react';
import './Sign-up.scss';

const SignUp = () => {
    const [showPassword, setShowPassword] = useState(false);
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Form data:', formData);
    };

    return (
        <div className="authContainer authBG">
            <div className="siteContainer">
                <div className="authContainer__inner">
                    <div className="authCard">
                        <header className="authCard__header">
                            <h1 className="authCard__header-title">CREATE YOUR ACCOUNT</h1>
                            <p className="authCard__header-subtitle">
                                Secure group photos everyone can agree on (finally!)
                            </p>
                        </header>

                        <form className="authCard__form" onSubmit={handleSubmit}>
                            <div className="inputGroup">
                                <label htmlFor="name">Name</label>
                                <div className="inputFieldWrapper">
                                    <input
                                        type="text"
                                        id="name"
                                        name="name"
                                        placeholder="How should we call you?"
                                        value={formData.name}
                                        onChange={handleChange}
                                        required
                                    />
                                </div>
                            </div>

                            <div className="inputGroup">
                                <label htmlFor="email">Email</label>
                                <div className="inputFieldWrapper">
                                    <input
                                        type="email"
                                        id="email"
                                        name="email"
                                        placeholder="Enter your email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        required
                                    />
                                </div>
                            </div>

                            <div className="inputGroup">
                                <label htmlFor="password">Password</label>
                                <div className="inputFieldWrapper">
                                    <input
                                        type={showPassword ? 'text' : 'password'}
                                        id="password"
                                        name="password"
                                        placeholder="Create a password"
                                        value={formData.password}
                                        onChange={handleChange}
                                        required
                                    />
                                    <button
                                        type="button"
                                        className="togglePassword"
                                        onClick={() => setShowPassword(!showPassword)}
                                    >
                                        {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                                    </button>
                                </div>
                            </div>

                            <button type="submit" className="button">
                                Create account <ArrowRight size={24} />
                            </button>
                        </form>

                        <p className="authCard__bottomText">
                            Already have an account? <Link to="/signin">Sign in</Link>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SignUp;
