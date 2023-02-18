// core
import React from 'react';
import {connect} from 'react-redux';

import {
    setIsFetching,
    setProfile,
} from '../../init/actions/profileAction';

// components
import {Profile} from "./Profile";

const mapStateToProps = (state) => {
    return {
        profile: state.profile,
        isFetching: state.profile.isFetching,
    }
}

export const ProfileContainer = connect(
    mapStateToProps,
    {
        setProfile,
        setIsFetching,
    }
)(Profile);
