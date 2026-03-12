import React, { useState, useRef, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import './Verification.scss';

const OTP_LENGTH = 6;

const Verification = () => {
    const navigate = useNavigate();
    const [otp, setOtp] = useState(Array(OTP_LENGTH).fill(''));
    const [timer, setTimer] = useState(30);
    const [canResend, setCanResend] = useState(false);
    const inputRefs = useRef([]);

    // Countdown timer
    useEffect(() => {
        if (timer === 0) {
            setCanResend(true);
            return;
        }
        const interval = setInterval(() => {
            setTimer((prev) => prev - 1);
        }, 1000);
        return () => clearInterval(interval);
    }, [timer]);

    const handleResend = () => {
        setOtp(Array(OTP_LENGTH).fill(''));
        setTimer(30);
        setCanResend(false);
        inputRefs.current[0]?.focus();
        console.log('OTP resent');
    };

    const handleChange = (e, index) => {
        const val = e.target.value.replace(/\D/g, '');
        if (!val) return;

        const newOtp = [...otp];
        newOtp[index] = val.slice(-1);
        setOtp(newOtp);

        // Move focus to next box
        if (index < OTP_LENGTH - 1) {
            inputRefs.current[index + 1]?.focus();
        }
    };

    const handleKeyDown = (e, index) => {
        if (e.key === 'Backspace') {
            const newOtp = [...otp];
            if (otp[index]) {
                newOtp[index] = '';
                setOtp(newOtp);
            } else if (index > 0) {
                newOtp[index - 1] = '';
                setOtp(newOtp);
                inputRefs.current[index - 1]?.focus();
            }
        } else if (e.key === 'ArrowLeft' && index > 0) {
            inputRefs.current[index - 1]?.focus();
        } else if (e.key === 'ArrowRight' && index < OTP_LENGTH - 1) {
            inputRefs.current[index + 1]?.focus();
        }
    };

    const handlePaste = (e) => {
        e.preventDefault();
        const pasted = e.clipboardData.getData('text').replace(/\D/g, '').slice(0, OTP_LENGTH);
        const newOtp = [...otp];
        pasted.split('').forEach((char, i) => {
            newOtp[i] = char;
        });
        setOtp(newOtp);
        const focusIndex = Math.min(pasted.length, OTP_LENGTH - 1);
        inputRefs.current[focusIndex]?.focus();
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const code = otp.join('');
        console.log('Verifying OTP:', code);
    };

    return (
        <div className="authContainer authBG">
            <div className="siteContainer">
                <div className="authContainer__inner">
                    <button className="backButton" onClick={() => navigate(-1)}>
                        <ArrowLeft size={18} />
                        <span className="backButton__text">Back</span>
                    </button>

                    <div className="authContainer__inner-content">
                        <div className="authCard">
                            <header className="authCard__header">
                                <h1 className="authCard__header-title">VERIFY YOUR EMAIL</h1>
                                <p className="authCard__header-subtitle">
                                    We've sent a 6-digit code to your email. Enter it below to continue.
                                </p>
                            </header>

                            <form className="authCard__form" onSubmit={handleSubmit}>
                                <div className="otpGroup" onPaste={handlePaste}>
                                    {otp.map((digit, index) => (
                                        <input
                                            key={index}
                                            ref={(el) => (inputRefs.current[index] = el)}
                                            className={`otpInput${digit ? ' otpInput--filled' : ''}`}
                                            type="text"
                                            inputMode="numeric"
                                            maxLength={1}
                                            value={digit}
                                            onChange={(e) => handleChange(e, index)}
                                            onKeyDown={(e) => handleKeyDown(e, index)}
                                            autoFocus={index === 0}
                                            id={`otp-${index}`}
                                        />
                                    ))}
                                </div>

                                <div className="resendBlock">
                                    <p className="resendBlock__text">
                                        Didn't receive the code?{' '}
                                        <button
                                            type="button"
                                            className={`resendBlock__btn`}
                                            onClick={handleResend}
                                        >
                                            Resend code
                                        </button>
                                    </p>
                                    {!canResend && (
                                        <p className="resendBlock__timer">
                                            You can request a new code in {timer} seconds.
                                        </p>
                                    )}
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Verification;
