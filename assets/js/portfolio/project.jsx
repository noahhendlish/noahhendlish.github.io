import React from 'react';
import Modal from './../modal';
const Project = function(){
    const body = <a href = "https://noahhendlish.github.io/Tic-Tac-Toe/">Demo</a>;
    const title = "Tic Tac Toe";
    return(
        <Modal body = {body} title = {title}/>
    );

};
export default Project;