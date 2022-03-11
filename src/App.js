import React from 'react';
import About from './components/About'
import Navigation from './components/Navigation'
// import Project from './components/Project'
import Footer from './components/Footer';
import Header from './components/Header';
import './index.css'

import './App.css';

function App() {
  return (
    <div>
      <Navigation></Navigation>
      <main>
      <Header></Header>
        {/* <Project></Project> */}
        <About></About>
      </main>
      <Footer></Footer>

    </div>
  )
}



export default App;
