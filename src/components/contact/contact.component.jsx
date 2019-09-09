import React from 'react';
import './contact.styles.scss';
import Btn from '../btn/btn.component';


import Fb from 'assets/social-icons/facebook.svg';
import Twitter from 'assets/social-icons/twitter.svg';
import Insta from 'assets/social-icons/instagram.svg';
import GoogleP from 'assets/social-icons/google-plus.svg';
import Snap from 'assets/social-icons/snapchat.svg';


const Contact = ({title}) =>{
    
    return(
        <div className='contact-box' id='#contact'>
            
                <h1>{title ? title.toUpperCase() : title}</h1>
                
                <div className='form-box'>
                    <form>
                        <input type="text" placeholder='Your name...'/>
                        <input type="email" placeholder='Your email...'/>
                        <textarea name="" id="" cols="30" rows="10" placeholder='Your message...'></textarea>
                        <Btn name='Submit' />
                    </form>
                    
                </div>

                <div className="contact-info">
                    <div className="email">
                        <h3>Email: example@example.com</h3>
                        <h3>Phone: 075454464564</h3>
                    </div>
                    
                    <div className='social-icons'>
                        <a href='https://www.facebook.com' target='_blank' rel="noopener noreferrer"><img className='fb' src={Fb} alt=""/></a>
                        <a href='https://www.twitter.com' target='_blank' rel="noopener noreferrer"><img className='twitter' src={Twitter} alt=""/></a>
                        <a href='https://www.instagram.com' target='_blank' rel="noopener noreferrer"><img className='insta' src={Insta} alt=""/></a>
                        <a href='https://www.google.com' target='_blank' rel="noopener noreferrer"><img className='google' src={GoogleP} alt=""/></a>
                        <a href='https://www.snapchat.com' target='_blank' rel="noopener noreferrer"><img className='snap' src={Snap} alt=""/></a>
                    </div>
                </div>
            
        </div>
    )
}

export default Contact;