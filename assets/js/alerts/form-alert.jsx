import React from 'react';
const FormAlert = function(props){
    let alertType = props.alertType ||  'secondary'
    return(
        <div className = 'form-alert alert-container'>
            <div className= {`alert alert-dismissible fade show alert-${alertType}`} role="alert">
                    {props.msg}
            </div>
        </div>
    );
};

//https://getbootstrap.com/docs/4.0/components/alerts/
//$('.alert').alert()

export default FormAlert;