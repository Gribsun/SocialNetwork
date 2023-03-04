// core
import React from 'react';
import {connect} from 'react-redux';
import {logOut} from '../../init/actions/authAction';

// components
import {Header} from './Header';

// types
import {RootState} from '../../init';

type MapStatePropsType = {
    isAuth: boolean,
    login: string | null,
}

type MapDispatchPropsType = {
    logOut: () => void,
}

const mapStateToProps = (state: RootState): MapStatePropsType => {
    return {
        isAuth: state.auth.isAuth,
        login: state.auth.login,
    }
}

export const HeaderContainer = connect<MapStatePropsType, MapDispatchPropsType, {}, RootState>(
    mapStateToProps,
    {
        logOut,
    }
)(Header);
