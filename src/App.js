import React from 'react';
import './App.css';
import {Switch , Route} from 'react-router-dom';
import NavBar from './components/navbar/navbar.component';

import Footer from './components/footer/footer.component';
import HomePage from './pages/homepage/homepage.component';
import ContactPage from './pages/contact/contact.component';
import AboutPage from './pages/about/about.component'
import PortofolioPage from './pages/portofolio/portofolio.component';
import SinglePage from './pages/single/single.component';



function App() {
  return (
    <div className="App">
      <NavBar />
      <Switch>
        <Route exact path='/photography-portfolio' component={HomePage}></Route>
        <Route exact path='/contact' component={ContactPage}></Route>
        <Route exact path='/about-me' component={AboutPage}></Route>
        <Route exact path='/portofolio' component={PortofolioPage}></Route>
        <Route exact path='/portofolio/:id' component={PortofolioPage}></Route>
        <Route exact path='/portofolio/:id/:id1' component={SinglePage}></Route>
      </Switch>
      <Footer />
      
    </div>
  );
}

export default App;
