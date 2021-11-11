/** @jsx jsx */
import {
    Flex, Box, jsx, Divider
} from 'theme-ui'

//import React from 'react';
import ContactForm from './contact-forms/contact-form'
//import styled from 'styled-components';
//import TempSection from './temp-section';
import Skills from './main-body/skills/skills';
import About from './main-body/about/about';
//import SlidingAnimation from './slidingAnimation';
import TempArt from './temp-art';
//<TempSection name = "About"/>
import ProjectPortfolio from './main-body/portfolio/project-portfolio';
const TempFrontPage = function () {
    //
    return(
        <Flex sx={{flexDirection:'column', width: '100%', justifyContent: 'center'}} id="main-content-container">


            <TempArt/>
        
            <Divider/>

            <Box id = "about">
                <About/>

            </Box>

            <Divider/>

            <Box id = "skills">
                <Skills/>
            </Box>

            <Divider/>
        
            <Box id = "projects">
                <ProjectPortfolio/>
            </Box>

            <Divider/>
            <Box id = "experience">
            </Box>
            <Box id = "resume">
            </Box>

            <Box id = 'contact'>
                <ContactForm/>
            </Box>

        </Flex>
    );
};
export default TempFrontPage;
//withTheme
//https://www.elian.codes/blog/using-tailwind-with-sass-preprocessor/
/*let stack = {
    frontend:{},
    backend:{},
}*/

