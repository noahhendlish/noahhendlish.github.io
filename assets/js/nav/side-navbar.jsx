import React from 'react';
import { useColorMode } from 'theme-ui'

import {
    Flex,
    Box,
    //Container,
    //Text,
    Label, Switch,
    //Heading,
    NavLink,
    IconButton
} from 'theme-ui';
//import {darken,
    //desaturate, saturate, lighten, lightness, hue, rotate, shade, tint, alpha, transparentize, mix, complement, invert, greyscale} from '@theme-ui/color';



const SideNavBar =  function(){
    const [colorMode, setColorMode] = useColorMode();
     //<NavLink className = "menu-item" href = "#projects" >Projects </NavLink>
    //setColorMode(colorMode === 'light' ? 'dark' : 'light')

    return(
        <Box sx={{width: '100%'}}>
            <Flex as="nav" sx=
            {
                {
                    flex: 1,
                    flexDirection: 'column',
                    
                    bg: 'navBg',
            height: "100vh", justifyContent: "flex-start", paddingTop: 4,
            }}> 

                        <NavLink href="#home" >
                                Noah Hendlish
                        </NavLink>
                        <NavLink  href="#about" >
                                About
                        </NavLink>
                        <NavLink href="#skills">
                                Stack
                        </NavLink>
                        <NavLink href="#projects" >
                                Projects
                        </NavLink>
                        <NavLink href="#contact" >
                                Contact
                        </NavLink>
                        <Box sx={{ paddingTop: 1, marginTop: 3, width: 'fit-content', paddingLeft: 3}}>
                            <Label htmlFor="dark-mode-switch-x" sx={{ flex: 1, alignItems: 'center', display: 'flex'}}>
                                Toggle {colorMode === 'light' ? 'Dark Mode' : 'Light Mode'}
                            </Label>
                            <Box sx={{width: 'fit-content'}}>
                            <Switch
                                onChange = {() => {
                                setColorMode(colorMode === 'light' ? 'dark' : 'light')
                                }}
                                id="dark-mode-switch"
                                //label="Show Details"
                                //defaultChecked={true}
                                sx={{
                                    variant: 'forms.switch.modeSwitch',
                                    //backgroundColor: 'grayOutline',
                                    // This will not be visible since the input is hidden
                                    // '&:checked': {
                                    //   backgroundColor: 'primary'
                                    // },
                                    // This will be visible
                                    /*'input:checked ~ &': {
                                        backgroundColor: 'grayOutline',
                                    },*/
                                }}/>
                                <IconButton
                                sx={{display: 'none'}}
                                    onClick = {() => {
                                        setColorMode(colorMode === 'light' ? 'dark' : 'light')
                                        }}
                                >
                                    <i className="fas fa-adjust"></i>
                                </IconButton>
                            </Box>
                        </Box>
            </Flex>
        </Box>
    );
};

export default SideNavBar;