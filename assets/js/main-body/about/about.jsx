

import React from 'react';
import {Image, Container, Box, Heading, Text} from 'theme-ui';

const About = function () {

    return (
        <Container sx={{variant: 'layout.section'}}>
            <Heading sx={{variant: "text.sectionHeading"}}>About</Heading>
            <Box sx={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', alignItems: 'center', gap: 3 }}>
                <Image src={`assets/images/square_headshot_1.png`} variant="headshot" sx={{maxWidth: '150px', alignSelf: 'center', justifySelf: 'center'}}/>
                <Box sx={{display: 'flex', flexDirection:'column', alignSelf: 'center', gap: 1, lineHeight: 2}}> 
                <Text sx={{fontSize: 3}}>
                    Hello, my name is Noah Hendlish and I like to build computer things
                    </Text>
                <ul className="about-list">
                    <li><Text>
                    I am a full-stack software engineer and web developer
                    </Text></li>

                    <li><Text>
                    I studied computer science and finance at Tulane University in New Orleans, LA
                    </Text></li>
                    <li><Text>
                    I currently live in Los Angeles, CA
                    </Text></li>

                    <li><Text>
                    I have over 5 years of experience coding, using various technologies
                    </Text></li>
                    <li><Text>
                    I value good software design (both on the frontend and backend)
                    </Text></li>
                </ul>
                </Box>
            </Box>
        </Container>
    );

};
export default About;