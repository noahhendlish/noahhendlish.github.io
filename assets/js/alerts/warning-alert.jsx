import React from 'react';
import Alert from './alert';
const WarningAlert = function(props){
    return(
        <div>
            <Alert msg = {props.msg} alertType = {'warning'}/>
        </div>
    );
};
export default WarningAlert;