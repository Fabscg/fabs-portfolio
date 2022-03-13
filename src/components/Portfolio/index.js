
import React from "react";
import { projects } from './projects'

const cardStyle = {
    width: '70%',
    margin:'30px auto 30px auto',
    border:'none'
};

function Portfolio() {
    console.log(projects);
    return (


        <div className="card" style={cardStyle}>
            {
                projects.map((projects) => (
                    <div className="row g-0 bg-dark text-light">
                        <div className="col-md-4">
                        <a href={projects.URL}><img src={projects.imgURL} className="img-fluid rounded-start" alt="project" /></a>
                            
                        </div>
                        <div className="col-md-8">
                            <div className="card-body">
                                <h5 className="card-title text-center">{projects.title}</h5>
                                <a href={projects.github}><i class="icon-card fa-brands fa-github fa-2x"></i></a>
                                <p className="card-text">{projects.description}</p>
                            </div>
                            
                        </div>
                    </div>
                ))
            }
        </div>
    )
}


export default Portfolio
