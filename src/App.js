import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch
} from 'react-router-dom';

import About from './pages/About/About';
import Contact from './pages/Contact/Contact';
import Principal from './pages/Principal/Principal';
import Services from './pages/Servicios/Servicios';
import Testimonial from './pages/Nosotros/Testimonial';
import Navbar from './Components/Navbar/Navbar';
import Footer from './Components/Footer/Footer';
import InternetServices from './pages/InternetServices/InternetServices';

const App = () => {
  return (
   <Router>
    <Navbar/>
    <main>
      <Switch>
        <Route path="/" exact>
          <Principal/>
        </Route>
        <Route path="/about" exact>
          <About/>
        </Route>
        <Route path="/service" exact>
          <Services/>
        </Route>
        <Route path="/testimonial" exact>
          <Testimonial/>
        </Route>
        <Route path="/contact" exact>
          <Contact/>
        </Route>
        <Route path="/ServiciosInternet" exact>
          <InternetServices/>
        </Route>
        <Redirect to="/" />
      </Switch>
    </main>
    <Footer/>
   </Router>
  );
}

export default App;
