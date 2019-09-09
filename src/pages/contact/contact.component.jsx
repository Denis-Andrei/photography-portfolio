import React from 'react';
import './contact.styles.scss';
import Jumbotron from '../../components/jumbotron/jumbotron.component';
import Contact from '../../components/contact/contact.component';
import JumboImg from '../../assets/images/jumbo-contact.jpg'

const ContactPage = () =>{
    window.scrollTo(0, 0);
    return(
        <div className='contact-page'>
            <Jumbotron image={JumboImg} title={'get in touch'}/>
            <Contact title={''} email={'example@example.com'} phone={'0077 077 077'}/>
        </div>
    )
}

export default ContactPage;