import React from 'react';
import Modal from './../modal';
const Project = function(props){
    return(
        <div>
            <h3 className = {`project-title`}>{props.title}</h3>
            <a href = {props.repo}>Repository</a>
            <a href = {props.demo}>Demo</a>
        </div>
    );

};
export default Project;