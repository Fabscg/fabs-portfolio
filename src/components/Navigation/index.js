
import React, { useEffect } from "react";
import { capitalizeFirstLetter } from "../../utils/helpers"



function Navigation({currentPage, handlePageChange}) {
    return (
        <header>

            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <div class="container-fluid">
                    <a class="navbar-brand" href="/">Fab's Portfolio</a>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
                        <div class="navbar-nav">
                            <a 
                            className={currentPage === 'About' ? 'nav-link active' : 'nav-link'}
                            href="#about"
                            onClick={() => handlePageChange('About')}>About Me</a>
                            <a className={currentPage === 'Portfolio' ? 'nav-link active' : 'nav-link'}
                             href="#portfolio"
                             onClick={() => handlePageChange('Portfolio')}>Portfolio</a>
                            <a className="nav-link" href="#contact">Contact Me</a>
                            <a className="nav-link" href="#resume">Resume</a>
                        </div>
                    </div>
                </div>
            </nav>
        </header>
    )
}

export default Navigation;