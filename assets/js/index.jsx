import React from 'react';
import ReactDOM from 'react-dom';
//import 'bootstrap';
//import 'bootstrap/dist/css/bootstrap.min.css';
//import "../../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js";
import NavBar from './navbar'
import ContactForm from './contact-form'
import ProjectsModule from './portfolio/projects-module';
require('dotenv').config();


function Root() {
    return(
        <div>
            <div className="py-4 px-5 mx-auto content">
            <h1 className = 'title'>Noah Hendlish</h1>
                <NavBar/>
                <ContactForm/>
                <ProjectsModule/>
            </div>
        </div>
    );
}

document.addEventListener("DOMContentLoaded", () => {
    const main = document.getElementById("main");
    ReactDOM.render(<Root/>, main);
});

/*

*/