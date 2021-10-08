import React, { useState } from "react";
//import { useForm, ValidationError } from '@formspree/react';
import axios from "axios";

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
                url: `https://formspree.io/f/${process.env.REACT_APP_FORMSPREE_KEY}`, //process.env.REACT_APP_FORMSPREE_KEY
                data: inputs
            })
            .then(r => {
                handleServerResponse(true, "Thanks!");
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
        for (let key of Object.keys(inputs)) {
            errors[key] = !validationRules[key](inputs[key]);
            hasErrors |= errors[key];
            let $input = $(`.contact-form`).find(`#${key}`).parent();
            let $form = $('.needs-validation');
            console.log($input[0]);
            console.log($form[0]);
            $form.addClass('was-validated');
            $input.addClass('has-feedback');
            //form.checkValidity()
            if (hasErrors) {
                $input.addClass('has-errors');
                $input.addClass('is-invalid');
                $input.removeClass('has-success');
                $input.removeClass('is-valid');
            }
            else{
                $input.addClass('has-success');
                $input.addClass('is-valid');
                $input.removeClass('has-errors');
                $input.removeClass('is-invalid');
            }
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
            return ( <small className = {field + "-field-error-msg"}>{msg} </small>);
        }
    };
    React.useEffect(() => {
        console.log('pre');
          // Only perform interactive validation after submit
        if (Object.keys(fieldErrors).length > 0) {
            validate();
        }
    }, [inputs]);
    return (
            <div>
                <form className = "contact-form needs-validation" onSubmit={handleOnSubmit} noValidate>
                <div className = "form-row align-items-center">
                    <div className = "form-group name-form-group" >
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
                        <div className="form-error-message">{renderFieldError("name")}  </div>
                    </div>
                    <div className = "form-group email-form-group" >
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
                            required
                            placeholder = 'Aenean lacinia bibendum nulla sed consectetur. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. Donec ullamcorper nulla non metus auctor fringilla nullam quis risus.'
                            onChange={handleOnChange}
                            value={inputs.message}
                        />
                        <div className="form-error-message">{renderFieldError("message")}  </div>
                    </div>
                    <button className = 'btn btn-primary' type="submit" disabled={serverState.submitting} aria-label = "Submit">
                        Submit
                    </button>
                    {serverState.status && (
                    <p className={!serverState.status.ok ? "errorMsg" : ""}>
                        {serverState.status.msg}
                    </p>
                    )}

                </form>
            </div>
        );
};
(function () {
    'use strict';
    /*window.addEventListener('load', function () {
        // Fetch all the forms we want to apply custom Bootstrap validation styles to
        var forms = document.getElementsByClassName('needs-validation');
        // Loop over them and prevent submission
        var validation = Array.prototype.filter.call(forms, function (form) {
            form.addEventListener('submit', function (event) {
                if (form.checkValidity() === false) {
                    //event.preventDefault();
                    //event.stopPropagation();
                }

                form.classList.add('was-validated');
            }, false);
        });


    }, false);*/


})();

export default ContactForm;









/*
<form id="fs-frm" name="simple-contact-form" accept-charset="utf-8" action="https://formspree.io/f/{form_id}" method="post">
<fieldset id="fs-frm-inputs">
    <label for="full-name">Full Name</label>
    <input type="text" name="name" id="full-name" placeholder="First and Last" required="">
    <label for="email-address">Email Address</label>
    <input type="email" name="_replyto" id="email-address" placeholder="email@domain.tld" required="">
    <label for="message">Message</label>
    <textarea rows="5" name="message" id="message" placeholder="Aenean lacinia bibendum nulla sed consectetur. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. Donec ullamcorper nulla non metus auctor fringilla nullam quis risus." required=""></textarea>
    <input type="hidden" name="_subject" id="email-subject" value="Contact Form Submission">
  </fieldset>
  <input type="submit" value="Submit">
</form>
*/


