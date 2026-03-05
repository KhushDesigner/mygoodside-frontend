import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Eye, EyeOff, ArrowRight } from 'lucide-react';
import './Sign-in.scss';

const SignIn = () => {
    const [showPassword, setShowPassword] = useState(false);
    const [formData, setFormData] = useState({
        email: '',
        password: '',
        rememberMe: false,
    });

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: type === 'checkbox' ? checked : value,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Form data:', formData);
    };

    return (
        <div className="authContainer">
            <div className="siteContainer">
                <div className="authContainer__inner">
                    <div className="authCard">
                        <header className="authCard__header">
                            <h1 className="authCard__header-title">WELCOME BACK</h1>
                            <p className="authCard__header-subtitle">
                                Pick up where you left off and create photos everyone can agree on.
                            </p>
                        </header>

                        <form className="authCard__form" onSubmit={handleSubmit}>
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
                                        placeholder="Enter your password"
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

                            <div className="formOptions">
                                <label className="checkboxContainer">
                                    <input
                                        type="checkbox"
                                        name="rememberMe"
                                        checked={formData.rememberMe}
                                        onChange={handleChange}
                                    />
                                    <span className="checkboxContainer__checkmark"></span>
                                    Remember me
                                </label>
                                <Link to="/forgot-password" className="forgotLink">Forgot password?</Link>
                            </div>

                            <button type="submit" className="button">
                                Sign in <ArrowRight size={24} />
                            </button>
                        </form>

                        <p className="authCard__bottomText">
                            Don't have an account? <a href="/signup" title="Create one">Create one</a>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SignIn;
