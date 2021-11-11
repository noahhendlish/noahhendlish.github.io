import React from 'react';
//import {Offcanvas} from 'react-bootstrap';
//import styled from 'styled-components';
//import { StyledOffCanvas, Menu, Overlay } from 'styled-off-canvas';
import { slide as SlideMenu } from 'react-burger-menu';
//import { reveal as RevealMenu } from 'react-burger-menu';
//import { push as PushMenu } from 'react-burger-menu';
//import Headroom from 'react-headroom';
//import * as Scroll from 'react-scroll';
import SideNavBar from './side-navbar';

import {
    Container,
} from 'theme-ui'
let styles ={
        bmBurgerButton: {
            position: 'fixed',
            width: '18px',
            height: '15px',
            left: '15px',
            top: '15px',

        },
        bmBurgerBars: {
            //
            background: '#878A98'
        },
        bmBurgerBarsHover: {
            //
            background: '#7d7d82'
        },
        bmCrossButton: {
            //height: '15px',
            //width: '15px'
            transform:"scale(0.75)",

            position: 'absolute',
            top: "3px",
            right: "3px"
        },
        bmCross: {
            // 7d7d82, 878A98
            background: 'var(--theme-ui-colors-text)',


            //height: '15px',
            //width: '15px'
        },
        bmMenuWrap: {
            position: 'fixed',
            height: '100%',
            display: 'flex'
        },
        bmMenu: {
            //background: '#373a47',
            //paddingTop: '30px',
            //padding: '2.5em 1.5em 0',
            //fontSize: '1.15em',
        },
        bmMorphShape: {
            //
            //fill: '#373a47'
        },
        bmItemList: {
            //color: '#b8b7ad',
            //padding: '0.8em',
            //flexDirection: 'row'
        },
        bmItem: {

        },
        bmOverlay: {
            background: 'rgba(0, 0, 0, 0.3)'
        },
}
class MobileSideNavBar extends React.Component{
    constructor(props){
        super(props);
        this.state={isOpen: false, overlay: true};
        this.isMenuOpen = this.isMenuOpen.bind(this);
        this.open = this.open.bind(this);
        this.close = this.close.bind(this);
        this.shouldDisableOverlayClick = this.shouldDisableOverlayClick.bind(this);
    }

    open(){
        this.setState({isOpen: true});
    }
    close() {
        this.setState({
            isOpen: false
        });
    }
    shouldDisableOverlayClick(){
        return false;
    }
    isMenuOpen(state){
        this.setState({isOpen: state.isOpen});
    }
    //active navlink add:
    render(){

         //<Headroom onPin={()=>(console.log('pinned'))} onUnpin={()=>(console.log('unpinned'))} onUnfix={()=>(console.log('unfixed'))} upTolerance={5} downTolerance={5} >
         // <a className = 'menu-item' href = "/assets/resume/noah_hendlish_resume.pdf" download>Download Resume</a>
         //position: 'fixed'
    return(

        <Container as={'header'} sx={{
                                        display: 'flex',
                                        variant: 'styles.header',
                                        position: "fixed",
                                        top: 0,
                                        width: "0%",
                                        height: "31px",
                                        //bg: 'primary',
                                        zIndex: 1000,
                                        fontSize: 2,
                                    }}>

            <SlideMenu
                className = "menu burger-menu"
                styles={ styles }
                onStateChange = { this.isMenuOpen }
                //noOverlay={(true)}
                width={'auto'}
                isOpen={ this.state.isOpen }
                outerContainerId={ "outer-container" }
                pageWrapId={ "page-wrap" }
                disableOverlayClick={false}
                disableAutoFocus
                disableCloseOnEsc>
                    <SideNavBar/>
                </SlideMenu>
            </Container>
    );
    }
}

export default MobileSideNavBar;