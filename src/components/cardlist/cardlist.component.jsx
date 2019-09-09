import React from 'react';
import './cardlist.styles.scss';

import Card from '../card/card.component';




const CardList = ({cards}) =>{
    return(
        <div>
        {   
            cards.map( user =>{

                if((user.id % 2 !== 0) && (user.id <= 5)){
                    return <Card id={user.id} title={user.title} description={user.description} side={'left'} sideImg={user.image}/>
                }else if((user.id % 2 === 0) && (user.id <= 5)){
                    return <Card id={user.id} title={user.title}  description={user.description} side={'right'} sideImg={user.image}/>
                }
                return;
            })
        }
        </div>
    )
}

export default CardList;


