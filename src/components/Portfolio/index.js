
import React from "react";
import { projects } from './projects'

const cardStyle = {
    width: '70%',
    margin:'30px auto 30px auto',
    paddingBottom:'20px'
};

function Portfolio() {
    console.log(projects);
    return (


        <div className="card mb-3" style={cardStyle}>
            {
                projects.map((projects) => (
                    <div className="row g-0 bg-light text-dark">
                        <div className="col-md-4">
                            <img src={projects.imgURL} className="img-fluid rounded-start" alt="project" />
                        </div>
                        <div className="col-md-8">
                            <div className="card-body">
                                <h5 className="card-title">{projects.title}</h5>
                                <p className="card-text">{projects.description}</p>
                                <a href="https://github.com/Fabscg/${}"><i class="fa-brands fa-github"></i></a>
                            </div>
                        </div>
                    </div>
                ))
            }
        </div>
    )
}


export default Portfolio
