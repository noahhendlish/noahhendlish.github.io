import React from 'react';
//import {useState} from 'react';
import ReactDOM from 'react-dom';
import Footer from './footer'
import MobileSideNavBar from './nav/mobile-side-navbar';
import SideNavBar from './nav/side-navbar';
import { Box,
        Flex,
        //Container
    } from 'theme-ui';
//import { css } from '@emotion/core';
//import styled from 'styled-components';
//import { reset, fluid } from 'satchel-css';
//import NavBar from './navbar';
//import Alert from './alerts/alert';
//import ContactForm from './contact-forms/contact-form'
//import ProjectsModule from './portfolio/projects-module';
import TempFrontPage from './temp-front-page';
//import { Link, Button, Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'
//import "tailwindcss/tailwind.css"
//https://getbootstrap.com/docs/5.0/customize/color/
//import Offcanvas from 'react-bootstrap/Offcanvas';

//import theme from './theme-ui/theme';
import theme from './theme-ui/theme2';
import { ThemeProvider} from 'theme-ui';


//import {ThemeProvider as StyledComponentsThemeProvider} from 'styled-components';
//import StyledComonentsTheme from './styled-components/theme';
const Root = function(){//
    /*componentDidMount(){
        console.log('mounted');
        Events.scrollEvent.register('begin', function (to, element) {
            console.log('begin', arguments);
        });
        this.scrollToBottom();
        Events.scrollEvent.register('end', function (to, element) {
            console.log('end', arguments);
        });

        scrollSpy.update();
        console.log(scrollSpy);
    }
    componentWillUnmount(){
            Events.scrollEvent.remove('begin');
            Events.scrollEvent.remove('end');
    }
    scrollToBottom(){
        scroll.scrollToBottom();
    }*/
    //<Box sx={{bg:'yellow'}}></Box>
    //</Grid>
    //<Flex sx={{flexWrap: 'wrap'}}></Flex>
    //<Box sx={{flexGrow: 0, flexBasis: 'auto'}}>
     //<Grid gap={0} columns={[2, '1fr 3fr']} sx={{ height: "95vh", width:'100%'}}>
    return(
        <div className = 'root-component' id = "outer-container">
            <ThemeProvider theme={theme}>
                <Flex id="home" sx={{flexWrap: 'wrap', flexDirection: 'row'}}>
                        <Box sx={{display: "none",
                        '@media screen and (min-width: 870px)': {
                                display: 'flex',
                                width: '25%',
                                position: 'fixed',
                                top: 0,
                                left: 0,
                            }}}>
                            <SideNavBar/>
                        </Box>
                        <Box sx={{
                            '@media screen and (min-width: 870px)': {
                                display: "none"
                            }}}>
                            <MobileSideNavBar />
                        </Box>

                        <Box sx={{width:"100%", px:"40px", py: "10px", paddingTop:'50px', paddingBottom: "5vh",
                        marginBottom:"45px", justifySelf: 'center', display: 'flex', justifyContent:'center', alignItems: 'center',
                        '@media screen and (min-width: 870px)': {
                            marginLeft: "25%"
                        }
                        }} id="page-wrap">
                            <TempFrontPage/>
                        </Box>
                </Flex>
                <Footer theme={theme} sx={{ marginTop:"1vh", height: "5vh"}} />

            </ThemeProvider>
        </div>
    );

}

document.addEventListener("DOMContentLoaded", () => {
    const main = document.getElementById("main");
    ReactDOM.render(<Root/>, main);
});


