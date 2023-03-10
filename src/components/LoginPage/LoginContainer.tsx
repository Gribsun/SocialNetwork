// core
import React from 'react';
import {connect} from 'react-redux';

// components
import {LoginPage} from './LoginPage';

// types
import {RootState} from '../../init';

// other
import {logIn} from '../../init/actions/authAction';
import {getCaptchaSelect, getErrorSelect} from '../../init/selectors/auth-selectors';
import {regExpEmail} from '../../helpers/regExpHeplers';

type MapStatePropsType = {
    isAuth: boolean,
    captchaUrl: string | undefined,
    error: boolean,
    regExpEmail: RegExp,
}

const mapStateToProps = (state: RootState): MapStatePropsType => {
    return {
        isAuth: state.auth.isAuth,
        captchaUrl: getCaptchaSelect(state),
        error: getErrorSelect(state),
        regExpEmail,
    }
}

export default connect(
    mapStateToProps,
    {logIn}
)(LoginPage);
