import React from 'react';
import './filterbox.styles.scss';
import Btn from '../btn/btn.component';

import { Link } from 'react-router-dom';

const FilterBox = ({onClick, active, name, props}) =>{
   
    return(
        <div className='filter-box'>
            
            <h1 className='filter-heading'>Select Category:</h1>

            <div className='filter-btn-box'>
                {
                    
                    name.map(cat=> {
                       return (
                       <Link to={`${props.match.url}/${cat}`}>
                            <Btn 
                                id={name}
                                name={cat.toUpperCase()} 
                                onClickFunc={onClick} 
                                activeClass={active}
                            />
                        </Link>
                            )
                        } 
                    )
                }
            </div>
        </div>
    )
}
export default FilterBox;

