import React from 'react';
import './portfoliocard-list.styles.scss';

import PortfolioCard from '../portfolioCard/portfoliocard.component';

const PortfolioCardList = ({cards}) =>{

    return(
        <div className='portofolio-cardlist'>
           { 
               cards.map( user =>
                <PortfolioCard id={user.id} img={user.image} title={user.title} name={user.Ptitle}/> )
            }
        </div>
    )
}

export default PortfolioCardList;