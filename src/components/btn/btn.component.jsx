import React from 'react';
import './btn.styles.scss';



const Btn = ({name, onClickFunc, activeClass})=>{
    
    return(
    
        <button 
            className={`button   ${activeClass === name ? 'active' : ''}`}
            onClick= {onClickFunc}
            value={name}
        > 
            {name}
        </button>
       
    )
    
}

export default Btn;