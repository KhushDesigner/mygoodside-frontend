import React from 'react'
import './authHeader.scss'
import logo from '../../assets/images/logo-icon.svg'

const AuthHeader = () => {
    return (
        <section className="authHeader">
            <div className="siteContainer">
                <div className="authHeader__inner">
                    <div className="mainLogo"><img src={logo} alt="MyGoodSide.co" className="mainLogo__icon" />MyGoodSide.Co</div>
                </div>
            </div>
        </section>
    )
}

export default AuthHeader