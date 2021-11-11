import React, { useState } from "react";
//import { useForm, ValidationError } from '@formspree/react';
import axios from "axios";
//import jquery from 'jquery';
import InputAlert from './../alerts/form-input-alert'
//import styled from 'styled-components';
//import {darken,desaturate, saturate, lighten, lightness, hue, rotate, shade, tint, alpha, transparentize, mix, complement, invert, greyscale} from '@theme-ui/color';
//import { darken } from '@theme-ui/color'
//import { Themed } from 'theme-ui'


import {
    Box, Heading,
    Label,
    Container,
    Input,
    Textarea,
    Message,
    Button
} from 'theme-ui'

import FormAlert from './../alerts/form-alert';
function ContactForm() {
    /* NEW: Input state handling vvvv */
    const [inputs, setInputs] = useState({
        email: "",
        name: "",
        message: "",
    });
    const handleOnChange = event => {
        //console.log(event);
        event.preventDefault();
        event.persist();
        setInputs(prev => ({
            ...prev,
            [event.target.id]: event.target.value
        }));
    };
    /* End input state handling ^^^^ */
    // Server state handling
    const [serverState, setServerState] = useState({
        submitting: false,
        status: null
    });
    const handleServerResponse = (ok, msg) => {
        setServerState({
            submitting: false,
            status: {
                ok,
                msg
            }
        });
        if (ok) {
            //reset form to needs-validation
            //let $form = $('.contact-form.was-validated');
            //$form.addClass('needs-validation');
            //$form.removeClass('was-validated');
            setFieldErrors({}); // <-- clear field errors
            setInputs({
                email: "",
                message: "",
                name: ""
            });
        }
    };
    const handleOnSubmit = event => {
        event.preventDefault();
        if (!validate()) {
            return;
        }
        setServerState({
            submitting: true
        });
        axios({
                method: "POST",
                url: `https://formspree.io/f/xoqybnlp`, //process.env.REACT_APP_FORMSPREE_KEY
                data: inputs
            })
            // eslint-disable-next-line no-unused-vars
            .then(r => {
                handleServerResponse(true, "Thanks for reaching out!");
            })
            .catch(r => {
                handleServerResponse(false, r.response.data.error);
            });
    };
    const [fieldErrors, setFieldErrors] = useState({});
    const validationRules = {
        email: val => val && /(^[^\s@]+@[^\s@]+\.[^\s@]+$)/.test(val), //&& /(^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$)/.test(val),
        message: val => !!val, // similar to "required"
        name: val => !!val // similar to "required"
    };
    const validate = () => {
        let errors = {};
        let hasErrors = false;
        //let $form = $('.contact-form.needs-validation');
        //$form.addClass('was-validated');
        //$form.removeClass('needs-validation');
        for (let key of Object.keys(inputs)) {
            errors[key] = !validationRules[key](inputs[key]);
            hasErrors |= errors[key];
        }
        // Loop over them and prevent submission
        setFieldErrors(prev => ({
            ...prev,
            ...errors
        }));
        return !hasErrors;
    };
    const renderFieldError = field => {
        if (fieldErrors[field]) {
            let msg = `Please enter a valid ${field}.`
            return (<InputAlert msg ={msg} valid ={false}/>);
        }
        else if(Object.keys(fieldErrors).length>0){
            let msg = `Looks good!`
            return (<InputAlert msg ={msg} valid ={true}/>);
        }
    };
    React.useEffect(() => {
          // Only perform interactive validation after submit
        if (Object.keys(fieldErrors).length > 0) {
            validate();
        }
    }, [inputs]);


    return (
        <Container sx ={{variant: 'layout.section'}}>
            <Heading className="" sx = {{variant: "text.sectionHeading"}}>
                    Contact
            </Heading>

            <Box as="form" onSubmit={handleOnSubmit} sx = {{paddingBottom: 3}} noValidate>
                {serverState.status && (
                    <div className={!serverState.status.ok ? "errorMsg" : ""}>
                            <Message sx ={{marginBottom:2}}>
                                <FormAlert msg={serverState.status.msg} alertType={!serverState.status.ok ? "danger" : "success"} />
                            </Message>
                    </div>
                )}
                <Box className="name-form-group" sx = {{py: 1}}>
                    <Label htmlFor="name">
                        Full Name
                    </Label>
                    <Input
                        id="name"
                        type="text"
                        name="name"
                        required
                        placeholder='First and Last'
                        autoComplete = "name"
                        autofillBackgroundColor = {'inputContainerBg'} //"var(--theme-ui-colors-inputContainerBg)"
                        onChange={handleOnChange}
                        value={inputs.name}
                        className={"form-control " + fieldErrors['name'] ? "error" : ""}
                        sx = {{color: 'text', variant: (Object.keys(fieldErrors).length > 0) ? (fieldErrors['name'] ? 'forms.invalidInput' : 'forms.validInput') : 'forms.input'}}
                    />
                    <div className="form-error-message">{renderFieldError("name")}</div>
                </Box>
                <Box className="email-form-group" sx = {{py: 1}}>
                    <Label htmlFor="email">
                        Email Address
                    </Label>
                    <Input
                        id="email"
                        type="email"
                        name="email"
                        required
                        placeholder='email@domain.ltd'
                        autofillBackgroundColor = {'inputContainerBg'}
                        //autofillBackgroundColor = 'var(--theme-ui-colors-inputContainerBg)'
                        onChange={handleOnChange}
                        value={inputs.email}
                        pattern="^[^\s@]+@[^\s@]+\.[^\s@]+$"
                        className={"form-control " + fieldErrors['email'] ? "error" : ""}
                        sx = {{color: 'text', variant: (Object.keys(fieldErrors).length > 0) ? (fieldErrors['email'] ? 'forms.invalidInput' : 'forms.validInput') : 'forms.input'}}

                    />
                    <div className="form-error-message">{renderFieldError("email")}</div>
                </Box>

                <Box className='message-form-group' sx = {{py: 1, marginBottom: 2}}>
                    <Label htmlFor="message" >
                        Message</Label>
                    <Textarea
                        id="message"
                        name="message"
                        rows='10'
                        required
                        //autofillBackgroundColor = "var(--theme-ui-colors-inputContainerBg)"
                        placeholder='Aenean lacinia bibendum nulla sed consectetur. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. Donec ullamcorper nulla non metus auctor fringilla nullam quis risus.'
                        onChange={handleOnChange}
                        value={inputs.message}
                        className={`form-control ${fieldErrors['message'] ? "error" : ""}`}
                        sx = {{variant: (Object.keys(fieldErrors).length > 0) ? (fieldErrors['message'] ? 'forms.invalidInput' : 'forms.validInput') : 'forms.textArea'}}
                    />
                    <div className="form-error-message">{renderFieldError("message")}</div>
                </Box>
                <Button className='btn btn-primary' type="submit" disabled={serverState.submitting} aria-label="Submit">
                    Submit
                </Button>
            </Box>
        </Container>
    );
}

export default ContactForm;