import React from 'react';
import HeroSection from '../HeroSection/HeroSection';
import {homeObjFour, homeObjOne, homeObjThree, homeObjTwo} from './Data';
import Pricing from '../Pricing/Pricing';

const Home = () => {
    return (
        <>
            <HeroSection {...homeObjOne}></HeroSection>
            <HeroSection {...homeObjThree}></HeroSection>
            <HeroSection {...homeObjTwo}></HeroSection>
            <Pricing></Pricing>
            <HeroSection {...homeObjFour}></HeroSection>
            
        </>
    );
};

export default Home;