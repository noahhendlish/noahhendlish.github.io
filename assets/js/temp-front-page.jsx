import React from 'react';
import ContactForm from './contact-forms/contact-form'
import styled from 'styled-components';
import {
    withTheme
} from 'styled-components';
//import FixedNavBar from './nav/fixed-navbar';
const Title = styled.h1 `
  font-size: 80px;
  text-align: center;
  color: ${props => props.theme.color.blue || "blue"};
`;

const TempFrontPage = function () {
    //container text-center cover-container d-flex h-100 p-3 mx-auto flex-column justify-center
    return(
        <div>

            <div className = 'test' >
                <Title>Noah Hendlish </Title>
            </div>



            <div className = 'center'>
                <ContactForm/>
            </div>
        </div>
    );
};
export default TempFrontPage;
//withTheme
//https://www.elian.codes/blog/using-tailwind-with-sass-preprocessor/
let stack = {
    frontend:{},
    backend:{},
}

