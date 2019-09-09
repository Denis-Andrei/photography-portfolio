import React from 'react';
import './jumbotron.styles.scss';


const Jumbotron = ({image, title}) =>{
    return(
        <div className='jumbotron-box'>
            
            <img src={image} alt=""/>
            <h1 className='jumbotron-h1'>{title.toUpperCase()}</h1>
            
        </div>
    )
}

export default Jumbotron;