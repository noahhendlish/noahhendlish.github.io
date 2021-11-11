import React from 'react';
import PropTypes from 'prop-types';
import {
    Link, Button,
    Flex,
    Text,} from 'theme-ui';
import ProjectPreview from './project-preview';

//import Modal from '../other/modal';
const Project = function(props){
    return(
        <Flex sx={{flexDirection:'column', alignItems: 'center', justifyContent: 'center', margin: 1, padding: 2, borderWidth: 3, borderColor: 'secondary', borderStyle: "solid", borderRadius: 3, minWidth: '220px'}}>
            <Text sx={{fontSize: 2, fontWeight: 'semiBold',}}>{props.title}</Text>
       
            <ProjectPreview url = {props.demo} title={props.title}/>
            <Flex sx={{width: '100%', justifyContent: 'center', flexWrap: 'wrap', alignItems: 'center', gap: 2}}>
            <Link sx={{textAlign: 'center'}} href = {props.repo}>
            <Button sx={{width:'90px', variant: 'buttons.secondary'}}>Repository</Button></Link>

            <Link sx={{textAlign: 'center'}} href = {props.demo}>
            <Button sx={{width:'90px'}}>Demo</Button></Link>
            </Flex>
        </Flex>
    );

};
Project.propTypes = {
    repo: PropTypes.string.isRequired,
    demo: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
};
//module.exports = Project;
export default Project;