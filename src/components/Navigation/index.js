
import React, { useEffect } from "react";
import { capitalizeFirstLetter } from "../../utils/helpers"




function Navigation(props) {

    return (
        <header>
            <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
                <div class="container-fluid">
                    <a class="navbar-brand" href="/">Fab's Portfolio</a>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
                        <div class="navbar-nav">
                            <a className="nav-link" href="#about">About Me</a>
                            <a className="nav-link" href="#project">Projects</a>
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