import React from 'react';
import { render } from 'react-dom';
import BusinessLogin from '../../src';

function getValues(values) {
    console.log(values);
}


const App = () => (
    <BusinessLogin 
    leftSide="umuti-login-background"
    rightSide="umuti-login-form"
    bigTextClass="umuti-login-title"
    bigText1="Rwanda"
    bigText2="Pharmaceutical"
    bigText3="Procurement"
    smallTextClass="umuti-login-desc"
    smallText="with services levels that meet international standards in speed, reliablity, security, accessibility and at affordable prices."
    contactLink="umuti-login-link"
    companyLogo="umutiLogo"
    companyLogoUrl="https://res.cloudinary.com/hehe/image/upload/v1541664189/Umuti/UmutiLogo.svg"
    signUpButton="umuti-signup-btn blue-btn"
    loginText="umuti-login-text"
    inputClass="umuti-input-area"
    loginButton="umuti-login-btn white-btn"

    handleSubmit={() => console.log('handle submit')}
    submit={() => getValues}
    forgotPasswordPageRedirection={() => console.log('forgot password redirection')}
    />
);
render(<App />, document.getElementById("root"));