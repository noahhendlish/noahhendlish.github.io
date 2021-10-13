import React from 'react';
import styled from 'styled-components';

//import FixedNavBar from './nav/fixed-navbar';
const FooterWrapper = styled.footer `
    position: fixed;
    left: 0;
    bottom: 0;
    width: 100% ;
    height: 40px;
    background-color:${props => props.theme.color.darkblue || "darkblue"};
    color: ${props => props.theme.color.white || "white"};
    text-align: center;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: 0 10px;
`;

const Copyright = styled.div `
    font-size: 10px;

`;
const FooterLinks = styled.div `
    display: flex;
    flex-direction: row;
    justify-content: space-between;
`;
const FooterLink = styled.a `
    padding: 0 10px;
    color: white;
    &:hover {
        color: ${props => props.theme.color.lightblue || "lightblue"};
    }
`;
const Footer = function(){

    return(
        <div className = ''>
            <FooterWrapper>
                    <Copyright>
                        Copyright(c) 2020 Noah Hendlish
                    </Copyright>
                    <FooterLinks>
                        <FooterLink href ="https://www.linkedin.com/in/noahhendlish" target="_blank" rel="noopener noreferrer"><i className="fab fa-linkedin"></i></FooterLink>
                        <FooterLink href ="https://github.com/noahhendlish" target="_blank" rel="noopener noreferrer"><i className="fab fa-github"></i></FooterLink>
                        <FooterLink href ="https://stackoverflow.com/users/15286870/noah-hendlish" target="_blank" rel="noopener noreferrer"><i className="fab fa-stack-overflow"></i></FooterLink>
                        <FooterLink href ="mailto:noahsjhendlish@gmail.com" target="_blank" rel="noopener noreferrer"><i className="fas fa-envelope"></i></FooterLink>
                    </FooterLinks>
            </FooterWrapper>
        </div>

    );
};
export default Footer;
