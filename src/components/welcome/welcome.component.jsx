import React from 'react';
import './welcome.styles.scss';


const Welcome = ({title}) =>{
    return(
        <div className='welcome-box'>

            <h1>&nbsp;{title.toUpperCase()}&nbsp;</h1>
            <h3>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Mollitia ducimus, labore quae repellat voluptate architecto nihil, assumenda laboriosam, accusantium et minima dignissimos deleniti vitae totam optio eaque magni id commodi.</h3>
            
        </div>
    )
}

export default Welcome;