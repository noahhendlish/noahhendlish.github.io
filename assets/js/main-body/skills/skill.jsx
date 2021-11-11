import React from 'react';
import parse from 'html-react-parser';
import {
    Flex,
    Box,
    Text,
} from 'theme-ui';
import PropTypes from "prop-types";
import SkillDetails from './skill-details';
//import { useSpring, animated } from 'react-spring';
//import {Collapse} from 'react-collapse';

//const fadeIn = keyframes({ from: { opacity: 0 }, to: { opacity: 1 } });
// <Box sx={{ animationName: fadeIn, animationDuration: '1s',animationFillMode: 'backwards',}}>Hello</Box>
import { darken, lighten} from '@theme-ui/color'

const Skill = function (props) {
     //{props.displayDetails ? : ''}
     //const [contentStatus, displayContent] = React.useState(false);
    /*const contentProps = useSpring({
         //opacity: props.displayDetails ? 1 : 0,
         //display: props.displayDetails ? 'flex' : 'none',
        reset: true,
         //delay: 200,
        reverse: props.displayDetails,
         //y: props.displayDetails ? 0 : 100,
    });*/
    //<animated.div style={ contentProps }> </animated.div>
    let hexColor = `#${props.skill.hex}`;

    let title = props.skill.title;

    let svg = parse(props.skill.svg);
        return (
            <Flex sx={{bg: lighten('background', 0.025), color: darken('text', 0.025), display: 'flex', flexDirection: 'column', width: '100%', alignItems: 'center', justifyContent: 'center', padding: 1, borderWidth: 1, borderColor: 'secondary', borderStyle: "solid", borderRadius: 3}}>
                <Text sx={{flexWrap:'nowrap', whiteSpace: 'nowrap', width: '100%', textAlign: 'center'}}>
                    {title}
                </Text>
                <Box sx={{width:'5em', height:'5em', fill: 'secondary', padding: 1, '&:hover': {fill: hexColor}}}>
                    {svg}
                </Box>
                    <SkillDetails skill ={props.skill} displayDetails= {props.displayDetails} />

            </Flex>
    );
};
Skill.propTypes = {
        displayDetails: PropTypes.bool.isRequired,
        skill: PropTypes.object.isRequired,
};
export default Skill;