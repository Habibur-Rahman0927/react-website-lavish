import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '../../Button';
import './HeroSection.css';

const HeroSection = ({
    lightBg, topLine, LightText,lightTextDesc, headline, description, buttonLabel, img, alt, imgStart
}) => {
    return (
        <>
            <div className={lightBg?'home_hero-section':'home_hero-section darkBg'}>
                <div className="container">
                    <div className="row home__hero-row" style={{display:'flex',flexDirection: imgStart === 'start' ? 'row-reverse': 'row'}}>
                        <div className="col">
                            <div className="home__hero-text-wrapper">
                                <div className="top-line">{topLine}</div>
                                <h1 className={LightText? 'heading dark' : 'heading '}>{headline}</h1>
                                <p className={lightTextDesc ? 'home__hero-subtitle': 'home__hero-subtitle dark'}>{description}</p>
                                <Link to="/sign-up"><Button buttonSize="btn-wide" buttonColor="blue">{buttonLabel}</Button></Link>
                            </div>
                        </div>
                        <div className="col">
                            <div className="home__hero-img-wrapper">
                                <img src={img} className="home__hero-img" alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default HeroSection;