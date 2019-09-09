import React from 'react';
import './about.styles.scss';
import AboutMe from '../../components/aboutme/aboutme.component';
import Jumbotron from '../../components/jumbotron/jumbotron.component';
import JumboImg from '../../assets/images/jumbo-about.jpg';

const AboutPage = () => {
    window.scrollTo(0, 0);
    return(
        <div className='about-page'>
            <Jumbotron title={'About me'} image={JumboImg}/>
            <AboutMe />
            
        </div>
    )   
}

export default AboutPage;