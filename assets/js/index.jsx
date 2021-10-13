import React from 'react';
import ReactDOM from 'react-dom';
import Footer from './footer'
import Nav from './nav/fixed-navbar';


//import NavBar from './navbar';
//import Alert from './alerts/alert';
//import ContactForm from './contact-forms/contact-form'
//import ProjectsModule from './portfolio/projects-module';
import TempFrontPage from './temp-front-page';
//import "tailwindcss/tailwind.css"
import {ThemeProvider} from 'styled-components';
//https://getbootstrap.com/docs/5.0/customize/color/
import Theme from './../styled-components/theme';
function Root() {
    return(
        <div className = 'root-component' >
            <ThemeProvider theme={Theme}>

                <main role="main" className="">
                    <TempFrontPage/>
                </main>
                <Footer/>
            </ThemeProvider>
        </div>
    );
}

document.addEventListener("DOMContentLoaded", () => {
    const main = document.getElementById("main");
    ReactDOM.render(<Root/>, main);
});

