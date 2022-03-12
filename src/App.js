import React, { useState } from 'react';
import About from './components/About'
import Navigation from './components/Navigation'
import Footer from './components/Footer';
import ContactForm from './components/Contact';
import Portfolio from './components/Portfolio'


import './index.css'
import './App.css';


function App() {


  const [currentPage, setCurrentPage] = useState("About");


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
          <ContactForm></ContactForm>
        </main>
        <Footer></Footer>
      </div>
    </div>

  )
}


export default App;
