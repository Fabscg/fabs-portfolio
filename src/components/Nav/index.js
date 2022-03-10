import React from "react";

const categories = [
    {
      name: "Drum Kit",
      description:
        "This is just a simple page with some keys that can be used from your keyboard to create music. When the the user types the given keys, they will hear the sound from the drums as displayed in the page. This is a fun page that I developed in 2020 while studying independently, and was one of my first works. Developing this page got me even more interested coding, and more than anything, helped me to get into JavaScript. There is HTML, CSS and JavaScript.",
    },
    { name: "Run Buddy", description: "Run buddy was a design from my bootcamp. This was one of the first projects that I worked on, and as such, I found it to be a big challenge at the time. It was created for a gym company, and provides information about their trainers and the location, while also allowing people to sign up for newsletters. Languages used here are HTML and CSS style." },
    { name: "food", description: "Delicious delicacies" },
   
  ];

function Nav() {
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
                            <a class="nav-link" href="/">About Me</a>
                            <a class="nav-link" href="#">Portfolio</a>
                            <a class="nav-link" href="#">Contact Me</a>
                            <a class="nav-link" href="#">Resume</a>
                        </div>
                    </div>
                </div>
            </nav>
        </header>
    )
}

export default Nav;