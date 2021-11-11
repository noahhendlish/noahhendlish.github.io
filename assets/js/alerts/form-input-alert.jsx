import React from 'react';
import PropTypes from 'prop-types';
import {Text, Box} from 'theme-ui'
//import styled from 'styled-components';
//import theme from '../theme-ui/theme';
const InputAlert = function(props){

    let valid = props.valid;
    return(
        <Box className = 'alert-container' sx = {{position: 'relative'}}>
            <Text className= 'input-alert'
            sx={{
                variant: valid ? 'text.validInputAlert' : 'text.invalidInputAlert',
                position: 'absolute',
                top: 0,
                right: 0,
                padding: 1
            }}>
                    {props.msg}
            </Text>
        </Box>
    );
};
InputAlert.propTypes = {
        valid: PropTypes.bool.isRequired,
        msg: PropTypes.string.isRequired
};

//https://getbootstrap.com/docs/4.0/components/alerts/
//$('.alert').alert()

export default InputAlert;