import React from 'react';
import PropTypes from 'prop-types';
const Alert = function(props){

    let alertType = props.alertType ||  'secondary'
    return(
        <div className = 'alert-container'>
            <div className= {`alert alert-dismissible fade show alert-${alertType}`} role="alert">
                    {props.msg}
            </div>
        </div>
    );
};

 Alert.propTypes = {
     msg: PropTypes.string.isRequired,
     alertType: PropTypes.string.isRequired
 };

//https://getbootstrap.com/docs/4.0/components/alerts/
//$('.alert').alert()

export default Alert;