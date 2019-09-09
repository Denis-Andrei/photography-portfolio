import React from 'react';
import './carousel.styles.scss';
import Slide1 from '../../assets/images/slide-1.jpg';
import Slide2 from '../../assets/images/slide-2.jpg';
import Slide3 from '../../assets/images/slide-3.jpg';

import "../../../node_modules/react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel/';
      

const DemoCarousel = () => {
    
    
    
    return(
        <div className='header-carousel'>
            <Carousel>
            <div>
                <img  src={Slide1} alt='photographer'/>
                
            </div>
            <div>
                <img  src={Slide2} alt='wedding-couple'/>
            </div>
            <div>
                <img  src={Slide3} alt='landscape'/>
                </div>
            </Carousel>
            </div>
        
    )

}

export default DemoCarousel;