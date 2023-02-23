// core
import React from 'react';
import {connect} from 'react-redux';
import {logOut, setUserData} from '../../init/actions/authAction';

// components
import {Header} from "./Header";

const mapStateToProps = (state) => {
    return {
        isAuth: state.auth.isAuth,
        login: state.auth.login,
    }
}

export const HeaderContainer = connect(
    mapStateToProps,
    {
        setUserData,
        logOut,
    }
)(Header);
