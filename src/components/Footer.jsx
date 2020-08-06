import React from "react";


//4. Create a Footer.jsx component that renders a <footer> element
//to show a copyright message in a <p> with a dynamically updated year.
const year = new Date().getFullYear();

function Footer() {
    return ( 
        <footer>
            <p> &copy; Mihaela Florea {year} </p>
        </footer>
    );
}

export default Footer;