
import React from 'react';
import HeroSection from '../HeroSection/HeroSection';
import Pricing from '../Pricing/Pricing';
import { homeObjOne } from '../HomePage/Data';

const Services = () => {
    return (
        <>
            <Pricing></Pricing>
            <HeroSection {...homeObjOne}></HeroSection>
            
        </>
    );
};

export default Services;