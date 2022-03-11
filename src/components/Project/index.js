import React from "react";
import projects from '../../projects'



function createCard(props) {

    const project = props
    return <Card
        key={project.id}
        name={project.title}
        img={project.imgURL}
        github={project.github}
        text={project.description}
    ></Card>
}


function Project(props) {
    return (
        <div>
            <h1>Project</h1>
            {projects.map(createCard)}
        </div>
    )
}


export default Project;