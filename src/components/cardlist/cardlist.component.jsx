import React from 'react';
import './cardlist.styles.scss';

import Card from '../card/card.component';
import PortofolioCard from '../portofolioCard/portofoliocard.component';



const CardList = ({cards}) =>{
    return(
        
        <div className={`${window.location.href === 'http://localhost:3000/portofolio' 
        || window.location.href === 'http://localhost:3000/portofolio/weddings' 
        || window.location.href === 'http://localhost:3000/portofolio/nature'
        || window.location.href === 'http://localhost:3000/portofolio/portraits' 
        || window.location.href === 'http://localhost:3000/portofolio/others' 
        || window.location.href === 'http://localhost:3000/portofolio/cars'  

        || window.location.href === 'https://denis-andrei.github.io/photography-portfolio/portofolio' 
        || window.location.href === 'https://denis-andrei.github.io/photography-portfolio/portofolio/weddings' 
        || window.location.href === 'https://denis-andrei.github.io/photography-portfolio/portofolio/nature'
        || window.location.href === 'https://denis-andrei.github.io/photography-portfolio/portofolio/portraits' 
        || window.location.href === 'https://denis-andrei.github.io/photography-portfolio/portofolio/others' 
        || window.location.href === 'https://denis-andrei.github.io/photography-portfolio/portofolio/cars' 
        ? 'cardlist-portofolio' 
        : 
        '' 
        }`}
        >


        {
            
            cards.map( user =>{
                
                if(window.location.href === 'http://localhost:3000/' || window.location.href === 'https://denis-andrei.github.io' ){
                    if((user.id % 2 !== 0) && (user.id <= 5)){
                        
                        return <Card id={user.id} title={user.title} description={user.description} side={'left'} sideImg={user.image}/>
                     }else if((user.id % 2 === 0) && (user.id <= 5)){
                        
                        return <Card id={user.id} title={user.title}  description={user.description} side={'right'} sideImg={user.image}/>
                     }
                }else if(window.location.href === 'http://localhost:3000/portofolio' || window.location.href === `http://localhost:3000/portofolio/${user.title.toLowerCase()}` || (window.location.href === 'https://denis-andrei.github.io/photography-portfolio/portofolio' || window.location.href === `https://denis-andrei.github.io/photography-portfolio/portofolio/${user.title.toLowerCase()}`)){
                   return <PortofolioCard id={user.id} img={user.image} title={user.title} name={user.Ptitle}/>
                }
                return;
            })
        }
        </div>
    )
}

export default CardList;
