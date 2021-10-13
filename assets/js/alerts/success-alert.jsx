import React from 'react';
import Alert from './alert';
const SuccessAlert = function(props){
    return(
        <div>
            <Alert msg = {props.msg} alertType = {'success'}/>
        </div>
    );
};
export default SuccessAlert;