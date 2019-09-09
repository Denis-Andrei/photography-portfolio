import React from 'react';
import data from '../../assets/data/data';
import DemoCarousel from '../../components/carousel/carousel.component';
import Welcome from '../../components/welcome/welcome.component';
import AboutMe from '../../components/aboutme/aboutme.component';
import Contact from '../../components/contact/contact.component';
import CardList from '../../components/cardlist/cardlist.component';




const  HomePage = () => {
  window.scrollTo(0, 0);
  return (
    <div className="homepage">
      
      <DemoCarousel />
      <Welcome title={'welcome'} />
      <CardList cards={data}/>
      <AboutMe title={'about me'}/>
      <Contact title={'contact'}/>
      
    </div>
  );
}

export default HomePage;
