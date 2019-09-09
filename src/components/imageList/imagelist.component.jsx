
import React from 'react';
import './imagelist.styles.scss';
import Image from '../image/image.component';


const ImageList = ({data, open}) =>{
    
    return(
        <div className='image-list'>
            {
               data[0].listImages.map(imgTitle =>
                    <Image id={imgTitle} image={imgTitle}  open={open} /> 
               )
            }
        </div>
    )
}

export default ImageList; 