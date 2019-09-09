import React from 'react';
import './btn.styles.scss';



const Btn = ({name, onClickFunc, activeClass})=>{
    
    return(
    
        <button 
            className={`button filter-btn ${activeClass === name ? 'active' : ''}`}
            onClick= {onClickFunc}
            value={name}
            
            >
                
            {name}
        </button>
       
    )
    
}

export default Btn;