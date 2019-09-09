import React from 'react';
import './portofoliocard-list.styles.scss';

import PortofolioCard from '../portofolioCard/portofoliocard.component';

const PortofolioCardList = ({cards}) =>{

    return(
        <div className='portofolio-cardlist'>

           { 
               cards.map( user =>
                <PortofolioCard id={user.id} img={user.image} title={user.title} name={user.Ptitle}/> )
            }
        </div>
    )
}

export default PortofolioCardList;