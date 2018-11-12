import isEmpty from 'lodash.isempty';
import React, { Component } from 'react';
import RenderErrors from 'errors-render-component';
import './style.css';

class BusinessLogin extends Component {
    constructor(props) {
        super(props);
        this.state = {
            formSubmitting: false,
            buttonText: '',
            validationErrors: {}
        };
        this.renderErrors = this.renderErrors.bind(this);
    }
    componentWillReceiveProps(nextProps) {
        const {
            errors,
            formSubmitting, 
            submitButtonText
        } = nextProps;

        if (!isEmpty(errors)) {
            if (this.state.validationErrors !== errors) {
                this.setState ({
                    validationErrors: errors
                });
            }
        }
        if (formSubmitting !== false) {
            if (formSubmitting !== this.state.formSubmitting) {
                this.setState ({
                    formSubmitting: formSubmitting
                });
            }
        }
        if (submitButtonText !== this.state.buttonText) {
            this.setState ({
                buttonText: submitButtonText
            });
        }
    }
    renderErrors(errors) {
        return <RenderErrors errorData={errors} />;
    }

    render (){
        const { 
            handleSubmit,
            leftSide,
            rightSide,
            bigTextClass,
            bigText1,
            bigText2,
            bigText3,
            smallText,
            smallTextClass,
            contactLink,
            companyLogo,
            companyLogoUrl,
            signUpButton,
            loginText,
            inputClass,
            loginButton, 
            submit,
            forgotPasswordPageRedirection,
            emailField,
            passwordField,
            rememberMeField
         } = this.props
        const { validationErrors, formSubmitting, buttonText } = this.state;
        const buttonDisableState = formSubmitting ? true : false;
        return (
            <div className="row reset-row signInWrapper">
                <div className="col-md-6 col-xs-6 col-reset">
                    <div className={leftSide}>
                        <div className="transBG">
                            <div className="aboutDiv">
                                <div className={bigTextClass}>
                                    <div><p>{bigText1}</p></div>
                                    <div><p>{bigText2}</p></div>
                                    <div><p>{bigText3}</p></div>
                                </div>
                                <div className={smallTextClass}>
                                    {smallText}
                                </div>
                                <div className={contactLink}><a href="/contact"><span className="icon-icon_chat-notification"></span> Contact Us >> </a></div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-md-6 col-xs-6 col-reset">
                    <div className={rightSide}>
                        <div className="signInFormBG">
                            <div className="formSignIn">
                                <div className={companyLogo}>
                                    <a href="/"><img src={companyLogoUrl} addc='EMSLogo' /></a>
                                </div>
                                <div className="generalForm">
                                    <div>
                                        <div className="registerToday">Register Today</div>
                                        <div><a href="/signup"><button className={signUpButton}>Sign Up</button></a></div>
                                    </div>
                                    <div className="generalFormDets">
                                        <div className={loginText}>Already a customer? Please login into your account</div>
                                        {this.renderErrors(validationErrors)}
                                        <div className="signInFormDiv">
                                            <div className="row reset-row create-wrapper">
                                                <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 col-reset">
                                                    <div className="create-content">
                                                        <div className="row reset-row create-form form-container">
                                                            <form onSubmit={handleSubmit(submit)}>
                                                                <div className="row reset-row form-component">
                                                                    <div className="col-md-12  col-reset">
                                                                        <div className={inputClass}>
                                                                            {emailField}
                                                                        </div>
                                                                    </div>
                                                                    <div className="col-md-12 col-xs-12 col-reset">
                                                                        <div className={inputClass}>
                                                                            {passwordField}
                                                                        </div>
                                                                    </div>
                                                                    <div className="col-md-12 col-xs-12 col-reset">
                                                                        <div className="login-actions">
                                                                            {rememberMeField}
                                                                            <span className="remember-me">Remember me</span>
                                                                            <span className="forgot-password">
                                                                            <a onClick={() => forgotPasswordPageRedirection()}>Forgot Password?</a>
                                                                            </span>
                                                                        </div>
                                                                    </div>
                                                                    <div className="loginBtn">
                                                                        <button 
                                                                        className={loginButton} 
                                                                        type="submit"
                                                                        disabled={buttonDisableState}
                                                                        >
                                                                        {buttonText}
                                                                        </button>
                                                                    </div>
                                                                </div>
                                                            </form>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default BusinessLogin;

