// core
import React from 'react';
import {connect} from 'react-redux';
import {logIn} from '../../init/actions/authAction';

// components
import {LoginPage} from "./LoginPage";

const mapStateToProps = (state) => {
    return {
        isAuth: state.auth.isAuth,
    }
}

export const LoginPageContainer = connect(
    mapStateToProps,
    {
        logIn,
    }
)(LoginPage);
