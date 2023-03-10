// core
import React from 'react';
import {connect} from 'react-redux';
import {logOut} from '../../init/actions/authAction';

// components
import {Header} from './Header';

// types
import {RootState} from '../../init';

type MapStatePropsType = {
    login: string | null,
}

type MapDispatchPropsType = {
    logOut: () => void,
}

const mapStateToProps = (state: RootState): MapStatePropsType => {
    return {
        login: state.auth.login,
    }
}

export const HeaderContainer = connect<MapStatePropsType, MapDispatchPropsType, {}, RootState>(
    mapStateToProps,
    {
        logOut,
    }
)(Header);
