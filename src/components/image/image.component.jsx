import React from 'react';
import './image.styles.scss';


const Image = ({image, open}) =>{
    
    return(
        <div className='image-component'>
            
                <img className='image' id={image} src={require(`assets/images/${image}.JPG`)} alt={image} onClick={open}/>
                <h3 className='h3-description'>Lorem ipsum dolor.</h3>
        </div>
    )
}

export default Image;