// core
import React from 'react';
import {connect} from 'react-redux';
import {logIn} from '../../init/actions/authAction';

// components
import {LoginPage} from './LoginPage';

// other
import {getErrorSelect, getIsAuthSelect} from '../../init/selectors/auth-selectors';
import {regExpEmail} from "../../helpers/regExpHeplers";

const mapStateToProps = (state) => {
    return {
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
