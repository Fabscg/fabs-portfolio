
import React from "react";


import projects from "../projects"


function Portfolio(projects) {
    return (
        <div>
            <div>
                <h2 className="name">{projects.title}</h2>
                <a ><i class="fa-brands fa-github"></i></a>
                <img
                    className="project-img"
                    src={projects.imgURL}
                    alt='project'
                />
            </div>
            <div className="">
                <p className="description">{projects.description}</p>
            </div>
        </div>
    )
}

export default Portfolio
