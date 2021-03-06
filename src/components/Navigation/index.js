import React from "react";




function Navigation({ currentPage, handlePageChange }) {
    return (
        <header>

            <nav className="navbar navbar-expand-lg navbar-dark ">
                <div className="container-fluid">
                    <a className="navbar-brand" href="/">Fab's Portfolio</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
                        <div class="navbar-nav">

                            <a
                                href="#about" className={currentPage === 'About' ? 'nav-link active' : 'nav-link'}

                                onClick={() => handlePageChange('About')}>About Me</a>
                            <a href="#portfolio" className={currentPage === 'Portfolio' ? 'nav-link active' : 'nav-link'}

                                onClick={() => handlePageChange('Portfolio')}>Portfolio</a>
                            <a href="#contact" className={currentPage === 'Contact' ? 'nav-link active' : 'nav-link'}

                                onClick={() => handlePageChange('Contact')}>Contact Me</a>

                            <a className="nav-link" href="https://drive.google.com/file/d/1kvbXQaYdkMTpmI_2ESDmQCqmOX-gEDej/view?usp=sharing">Resume</a>
                        </div>
                    </div>
                </div>
            </nav>
        </header>
    )
}

export default Navigation;