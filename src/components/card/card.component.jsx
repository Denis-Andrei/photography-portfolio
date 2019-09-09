import React from 'react';
import './card.styles.scss';
import {Link} from 'react-router-dom';





const Card = ({side, title , sideImg, description}) =>{
    return(
        <div className={`card-box card-box-${side}`}>
            
            <Link to='/portofolio'><img src={require(`assets/images/${sideImg}.JPG`)} alt="wedding"/></Link>

            <div className={`card-info card-info-${side} ${title}`}>
                
                    <h1>{title.toUpperCase()}</h1>
                    <h3>{description}</h3>
                

            </div>
                
        </div>
    )
}

export default Card;

