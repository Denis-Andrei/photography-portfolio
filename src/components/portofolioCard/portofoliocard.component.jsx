import React from 'react';
import './portofoliocard.styles.scss';
import Btn from '../btn/btn.component';
import {withRouter, Link} from 'react-router-dom';





const PortofolioCard = ({img, name, title, match}) =>{
    
    return(
        <div className='portofolio-card'>
            <img className='portofolio-card-img' src={require(`../../assets/images/${img}.jpg`)} alt={`${name}`}/>
           
            <Link to={`${match.params.id ?  `${match.url}/${name}` : `${match.url}/${title}/${name}` }`} target='_blank'> 
                <Btn name={name.toUpperCase()}/>
            </Link>
            
        </div>
    )
}

export default withRouter(PortofolioCard);


