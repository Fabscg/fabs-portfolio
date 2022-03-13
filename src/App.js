import React, { useEffect, useState } from 'react';
import About from './components/About'
import Navigation from './components/Navigation'
import Footer from './components/Footer';
import ContactForm from './components/Contact';
import Portfolio from './components/Portfolio'


import './index.css'
import './App.css';

function RenderPage({ currentPage }) {

  if (currentPage === 'About') {
    return <About />;

  }
  if (currentPage === 'About') {
    return <About />;
  }
  if (currentPage === 'Portfolio') {
    return <Portfolio />;
  }

  if (currentPage === 'Contact') {
    return <ContactForm />;
  }

  return null;
}

function App() {

  const [currentPage, setCurrentPage] = useState(null);
  useEffect(function () {
    const splitUrl = window.location.href.split("/")
    if (splitUrl[splitUrl.length - 1] === '#home') {
      setCurrentPage('Home');
    }
    if (splitUrl[splitUrl.length - 1] === '#about') {
      setCurrentPage('About');
    }
    if (splitUrl[splitUrl.length - 1] === '#portfolio') {
      setCurrentPage('Portfolio');
    }
    if (splitUrl[splitUrl.length - 1] === '#contact') {
      setCurrentPage('Contact');
    }
  }, []


  )
  //MEthod to check value of 'currentPage => return value of currentPage, corresponding to compent to render 
  const handlePageChange = (page) => setCurrentPage(page);

  return (
    <div>
      {/* Passing the currentPage from state and the function to update it */}
      <Navigation currentPage={currentPage} handlePageChange={handlePageChange} />
      {/* Here we are calling the renderPage method which will return a component  */}
      <RenderPage currentPage={currentPage} />
      <Footer></Footer>
    </div>
  );
}

export default App;


