import React, { useState } from 'react';
import About from './components/About'
import Navigation from './components/Navigation'
import Footer from './components/Footer';
import ContactForm from './components/Contact';
import Portfolio from './components/Portfolio';



import './index.css'
import './App.css';



function App() {

  const [currentPage, setCurrentPage] = useState('About');

  function RenderPage({ currentPage }) {

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

  //Method to check value of 'currentPage => return value of currentPage, corresponding to compent to render 
  const handlePageChange = (page) => setCurrentPage(page);

  return (
    <div>
      {/* Passing the currentPage from state and the function to update it */}
      <Navigation currentPage={currentPage} handlePageChange={handlePageChange} />
      
      <RenderPage currentPage={currentPage} />
      <Footer></Footer>
    </div>
  );
}

export default App;


