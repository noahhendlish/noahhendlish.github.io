//import { darken } from '@theme-ui/color';
import React from 'react';
import {Text, Link, Flex, Container, IconButton} from 'theme-ui';


const Footer = function(props){
    const copyright = "Copyright(c) 2020 Noah Hendlish";
    const footerLinks = [
        {
            name: "LinkedIn",
            href: "https://www.linkedin.com/in/noahhendlish",
            icon: <i className="fab fa-linkedin"></i>
        },{
            name: "Github",
            href: "https://www.github.com/noahhendlish",
            icon: <i className="fab fa-github"></i>
        },
        {
            name: "StackOverflow",
            href: "https://www.stackoverflow.com/users/15286870/noah-hendlish",
            icon: <i className = "fab fa-stack-overflow"></i>
        },
        {
            name: "AngelList",
            href: "https://www.angel.co/u/noah-hendlish",
            icon: <i className="fab fa-angellist"></i>
        },
        {
            name: "Email",
            href: "mailto:noahsjhendlish@gmail.com",
            icon: <i className="fas fa-envelope"></i>
        }
    ];
    return(
            <Flex as = "footer" {...props} sx={{
                bg: 'var(--theme-ui-colors-footerBg)',
                color: "var(--theme-ui-colors-text)",
                //variant: 'styles.footer',
                position: "fixed",
                left: 0,
                bottom: 0,
                width: "100%",
                maxheight: "40px",
                textAlign: "center",
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
                px: 10,
                zIndex: 10000,
                marginTop: '40px'
                }}>

                        <Text sx={{
                            variant:'text.footer',
                            fontSize: 0,
                            fontWeight: 'light',
                            minWidth: 'fit-content'}}>
                            {copyright}
                        </Text>
                        <Container sx={{
                            display: "flex",
                            flexDirection: "row",
                            justifyContent: "flex-end",
                            alignItems: 'center',
                            py: 1
                        }}>
                        {footerLinks.map( (link) => (<IconButton key={link.name} sx={{variant: 'buttons.footer'}}><Link sx={{variant:'links.footer'}} href ={link.href} target="_blank" rel="noopener noreferrer" title = {link.name || ''}>{link.icon}</Link></IconButton>))}
                        </Container>
            </Flex>


    );
};
export default Footer;

