import React from 'react';
import './aboutme.styles.scss';
import MeImg from '../../assets/images/me.jpg';

const AboutMe = ({title}) =>{
    return(
        <div className='about-me'>
            <h1>{title ? title.toUpperCase() : title}</h1>
            <div className="img-box">
                <img src={MeImg} alt=""/>
            </div>
            

            <h3>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Deleniti impedit beatae consequuntur neque minima optio cupiditate vel facilis, quaerat enim nostrum delectus deserunt iste! Quia ea alias provident aliquam aspernatur.</h3>

        </div>
    )
}

export default AboutMe;