import React from "react";


const currentYear = new Date().getFullYear()

function Footer(){
    return(
        <footer>
            <p>Copyrigth by <i className="fa-solid fa-terminal"></i> Fabiola C. Gamboa {currentYear}</p>
        </footer>
    )
}

export default Footer;