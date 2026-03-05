import React, { useState } from 'react';
import { Eye, EyeOff, ArrowRight, User } from 'lucide-react';
import './LoginForm.css';

const LoginForm = () => {
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
    <div className="login-container">
      <div className="login-card">
        <header className="login-header">
          <h1 className="welcome-title">WELCOME BACK</h1>
          <p className="welcome-subtitle">
            Pick up where you left off and create photos everyone can agree on.
          </p>
        </header>

        <form className="login-form" onSubmit={handleSubmit}>
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
              <span className="checkmark"></span>
              Remember me
            </label>
            <a href="/forgot-password" title="Forgot password?">Forgot password?</a>
          </div>

          <button type="submit" className="signin-button">
            Sign in <ArrowRight size={20} />
          </button>
        </form>

        <div className="divider"></div>

        <p className="signup-text">
          Don't have an account? <a href="/signup" title="Create one">Create one</a>
        </p>
      </div>
    </div>
  );
};

export default LoginForm;
