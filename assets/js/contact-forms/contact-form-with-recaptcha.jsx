import React, { useState } from "react";
//import { useForm, ValidationError } from '@formspree/react';
import axios from "axios";
import FormAlert from './../alerts/form-alert';
function ContactForm() {
    /* NEW: Input state handling vvvv */
    const [inputs, setInputs] = useState({
        email: "",
        name: "",
        message: "",
    });
    const handleOnChange = event => {
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
            let $form = $('.contact-form.was-validated');
            $form.addClass('needs-validation');
            $form.removeClass('was-validated');
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
        //let FORMSPREE_KEY = process.env.REACT_APP_FORMSPREE_KEY;
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
    const toggleValidationClasses = (key, error) =>{
            //let $input = $(`.contact-form`).find(`#${key}`).parent();
            //let $form = $('.contact-form.needs-validation');
            //$form.addClass('was-validated');
            //$input.addClass('has-feedback');
            //form.checkValidity()
            if (error) {
                //$input.addClass('has-errors');
                //$input.addClass('is-invalid');
                //$input.removeClass('has-success');
                //$input.removeClass('is-valid');
            } else {
                //$input.addClass('has-success');
                //$input.addClass('is-valid');
                //$input.removeClass('has-errors');
                //$input.removeClass('is-invalid');
            }
    }
    const validate = () => {
        let errors = {};
        let hasErrors = false;
        let $form = $('.contact-form.needs-validation');
        $form.addClass('was-validated');
        $form.removeClass('needs-validation');
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
            return ( <div className = {field + "-field-error-msg invalid-tooltip "}>{msg} </div>);
        }
    };
    React.useEffect(() => {
          // Only perform interactive validation after submit
        if (Object.keys(fieldErrors).length > 0) {
            validate();
        }
    }, [inputs]);
    return (
            <div>
                <div className="card">
                    <div className = "card-header" id="contactCardHeader" data-toggle="collapse" data-target="#collapseContact" aria-expanded="true" aria-controls="collapseContact">
                        <h3 className="mb-0">
                            Contact
                        </h3>
                    </div>
                    <div id="collapseContact" className="collapse show" aria-labelledby="contactCardHeader">
                    <form className = "contact-form needs-validation card-body" onSubmit={handleOnSubmit} noValidate>
                        {serverState.status && (
                            <div className={!serverState.status.ok ? "errorMsg" : ""}>
                                <FormAlert msg = {serverState.status.msg} alertType = {!serverState.status.ok ? "danger" : "success"}/>
                            </div>
                            )}
                        <div className = "form-row align-items-center">
                            <div className = "form-group name-form-group" >
                                <div class="NOT-form-floating" >
                                <label htmlFor="name">
                                        Full Name
                                    </label>
                                    <input
                                        className="form-control"
                                        id="name"
                                        type="text"
                                        name="name"
                                        required
                                        placeholder = 'First and Last'
                                        onChange={handleOnChange}
                                        value={inputs.name}
                                    />                            
                                </div>
                                <div className="form-error-message">{renderFieldError("name")}  </div>
                            </div>
                            <div className = "form-group email-form-group" >
                                <div class="NOT-form-floating" >
                                    <label htmlFor="email">
                                        Email Address
                                    </label>
                                    <input
                                        className="form-control"
                                        id="email"
                                        type="email"
                                        name="email"
                                        required
                                        placeholder = 'email@domain.ltd'
                                        onChange={handleOnChange}
                                        value={inputs.email}
                                        pattern = "^[^\s@]+@[^\s@]+\.[^\s@]+$"
                                    />
                                </div>
                                <div className="form-error-message">{renderFieldError("email")}  </div>
                            </div>
                        </div>
                            <div className = 'form-group  message-form-group'>
                                <label htmlFor = "message" >
                                Message</label>
                                <textarea
                                    className="form-control"
                                    id="message"
                                    name="message"
                                    rows = '10'
                                    required
                                    placeholder = 'Aenean lacinia bibendum nulla sed consectetur. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. Donec ullamcorper nulla non metus auctor fringilla nullam quis risus.'
                                    onChange={handleOnChange}
                                    value={inputs.message}
                                />
                                <div className="form-error-message">{renderFieldError("message")}  </div>
                            </div>
                            <div className = 'g-recaptcha' data-sitekey="6LdAkbAcAAAAAGnFjvF4zxER69Ncqjp4yJcDp7qd" data-callback='onSubmit'></div>
                            <button className = 'btn btn-primary' type="submit" disabled={serverState.submitting} aria-label = "Submit">
                                Submit
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        );
};

export default ContactForm;


