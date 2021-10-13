import React from 'react';
const Alert = function(props){
    let alertType = props.alertType ||  'secondary'
    return(
        <div className = 'alert-container'>
            <div className= {`alert alert-dismissible fade show alert-${alertType}`} role="alert">
                    {props.msg}
                    <button type="button" className="btn-close" data-dismiss="alert" aria-label="Close"></button>
            </div>
        </div>
    );
};

//https://getbootstrap.com/docs/4.0/components/alerts/
//$('.alert').alert()

export default Alert;