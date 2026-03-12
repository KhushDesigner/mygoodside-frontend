import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import './Onboarding.scss';

// Import assets
import onboarding from '../../assets/images/onboarding-bg.png';

const Onboarding = () => {
    const navigate = useNavigate();

    return (
        <div className="onboardingModule authBG">
            <div className="siteContainer">
                <div className="onboardingModule__content">
                    <div className="onboardingModule__header">
                        <h1 className="onboardingModule__title">MyGoodSide.Co</h1>
                        <p className="onboardingModule__subtitle">
                            Each person privately picks their good side, and we bring them all
                            together into one group photo everyone actually loves.
                        </p>
                        <div className="onboardingModule__image">
                            <img src={onboarding} alt="Heads Logo" className="onboarding image" />
                        </div>
                    </div>

                    <div className="onboardingModule__actions">
                        <button className="button" onClick={() => navigate('/upload')}>
                            Create a group photo <ArrowRight size={20} />
                        </button>
                        <button className="button button--outline" onClick={() => console.log('Joining group')}>
                            Join via invite link
                        </button>
                    </div>

                    <p className="onboardingModule__footerText">
                        The Group Photo, <span>Perfected.</span>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Onboarding;
