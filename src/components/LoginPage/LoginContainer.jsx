// core
import React from 'react';
import {connect} from 'react-redux';
import {logIn} from '../../init/actions/authAction';

// components
import {LoginPage} from './LoginPage';

// other
import {getCaptchaSelect, getErrorSelect, getIsAuthSelect} from '../../init/selectors/auth-selectors';
import {regExpEmail} from "../../helpers/regExpHeplers";

const mapStateToProps = (state) => {
    return {
        captchaUrl: getCaptchaSelect(state),
        isAuth: getIsAuthSelect(state),
        error: getErrorSelect(state),
        regExpEmail,
    }
}

export const LoginPageContainer = connect(
    mapStateToProps,
    {
        logIn,
    }
)(LoginPage);
