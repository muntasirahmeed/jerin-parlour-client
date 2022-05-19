import React from 'react';
import AwesomeServices from './AwesomeServices';
import Banner from './Banner';
import SkinCarebanner from './SkinCarebanner';
import Testimonial from './Testimonial';

const Home = () => {
    return (
        <div className=''>
            <Banner/>
            <AwesomeServices />
            <SkinCarebanner />
            <Testimonial/>
        </div>
    );
};

export default Home;