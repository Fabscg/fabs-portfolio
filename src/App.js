// import React, { useState } from 'react';
import About from './components/About'
import Navigation from './components/Navigation'
import Footer from './components/Footer';
import ContactForm from './components/Contact';
import Portfolio from './components/Portfolio'


import './index.css'
import './App.css';


function App(props) {

 
  return (
    <div>
    <Navigation></Navigation>
     
      <main>
      
        <ContactForm></ContactForm>
        <About></About>
        <Portfolio></Portfolio>

      </main>
      <Footer></Footer>
    </div>
  )
}

export default App;
