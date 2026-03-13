import React from 'react'
import { Link } from 'react-router-dom';
import ctaGallery from '../../assets/images/cta-gallery.png';
import './ctaSection.scss'

const CtaSection = () => {
    return (
        <section className="ctaSection">
            <div className='siteContainer'>
                <div className="ctaSection__inner">
                    <h2 className="ctaSection__title">
                        THE GROUP PHOTO, <span>perfected.</span>
                    </h2>

                    <Link to="/early-access" className="button button--sm">Keep me in the loop</Link>

                    <div className="ctaSection__image">
                        <img src={ctaGallery} alt="Group Photos" />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default CtaSection