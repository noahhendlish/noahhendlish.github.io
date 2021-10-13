import React from 'react';
import Alert from './alert';
const ErrorAlert = function(props){
    return(
        <div>
            <Alert msg = {props.msg} alertType = {'danger'}/>
        </div>
    );
};
export default ErrorAlert;