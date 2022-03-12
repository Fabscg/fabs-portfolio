import React, { useState } from 'react';
import About from './components/About'
import Navigation from './components/Navigation'
import Footer from './components/Footer';
import ContactForm from './components/Contact';
import Portfolio from './components/Portfolio'


import './index.css'
import './App.css';


function App() {


  // use state for currentPage setCurrnetpage
  const [currentPage, setCurrentPage] = useState("");

  // TODO: Add a comment describing the functionality of this method
  const renderPage = () => {
    if (currentPage === 'About') {
      return <About />;
    }
    if (currentPage === 'Portfolio') {
      return <Portfolio />;
    }
    return <ContactForm />;
  };

  const handlePageChange = (page) => setCurrentPage(page)

  return (
    <div>
      <Navigation currentPage={currentPage} handlePageChange={handlePageChange} />
      {renderPage}



      <div>
        <main>

          {renderPage()}

          <About></About>
          <Portfolio></Portfolio>

        </main> 
        <Footer></Footer>
      </div>
    </div>
  )
}

export default App;
