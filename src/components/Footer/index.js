import React from "react";


const currentYear = new Date().getFullYear()

function Footer() {
    return (
    
        <footer d-flex justify-content-center align-items-center>
            <div className="icons-bottom">
                <a href="tel:647-888-4713"><i className="icon fa-solid fa-envelope fa-2x"></i></a>
                <a href="https://github.com/Fabscg"><i className="icon fa-brands fa-github fa-2x"></i></a>
                <a href="www.linkedin.com/in/fabicastaneda"><i className="icon fa-brands fa-linkedin fa-2x"></i></a>
                <a href="mailto:fabiscg79@gmail.com"><i class="icon fa-solid fa-phone fa-2x"></i></a>

            </div>

            
                <p>Copyright by <i className="icon-terminal fa-solid fa-terminal"></i> Fabiola C. Gamboa {currentYear}</p>
            </footer>
       

    )
}

export default Footer;