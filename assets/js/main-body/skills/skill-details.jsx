import React from 'react';
import PropTypes from "prop-types";
import {
    Flex,
    Text,
    Box
} from 'theme-ui';
//import { useSpring, animated } from 'react-spring';

const SkillDetails = function (props) {
    //{props.displayDetails ? : ''}
        //const [contentStatus, displayContent] = React.useState(false);
        /*const contentProps = useSpring({
            opacity: props.displayDetails ? 1 : 0,
            display: props.displayDetails ? 'flex' : 'none',
            reset: true,
            delay: 200,
            reverse: props.displayDetails,
            //y: props.displayDetails ? 0 : 100,
         });*/
         //<animated.div style={ contentProps }></animated.div>
        let skillUse = props.skill.use[0].toUpperCase() + props.skill.use.substring(1);
        let skillType = props.skill.type[0].toUpperCase() + props.skill.type.substring(1);
        let skillExpLevel = props.skill.experienceLevel[0].toUpperCase() + props.skill.experienceLevel.substring(1);
        return (

            <Box sx={{ display: props.displayDetails ? 'flex' : 'none'}}>
                <Flex sx={{flexDirection: 'column', alignItems: 'center', justifyContent: 'center', width: '100%'}}>
                    <Text sx={{fontSize:"10px", color:"text", fontWeight: 700}}> Use </Text>
                    <Text sx={{fontSize:"10px", color:"text"}}> {skillUse} </Text>
                    <Text sx={{fontSize:"10px", color:"text",  fontWeight: 700}}> Type </Text>
                    <Text sx={{fontSize:"10px", color:"text"}}>{skillType} </Text>
                    <Text sx={{fontSize:"10px", color:"text",  fontWeight: 700}}> Proficiency </Text>
                    <Text sx={{fontSize:"10px", color:"text"}}> {skillExpLevel } </Text>
                </Flex>
            </Box>

    );
};
SkillDetails.propTypes = {
        displayDetails: PropTypes.bool.isRequired,
        skill: PropTypes.object.isRequired,
};
export default SkillDetails;