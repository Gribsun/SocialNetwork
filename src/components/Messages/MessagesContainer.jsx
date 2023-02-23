// core
import React from 'react';
import {connect} from 'react-redux';
import {compose} from 'redux';
import {addMessage} from '../../init/actions/messagesAction';

// components
import {Messages} from './Messages';
import {WithAuthRedirect} from "../../hoc/WithAuthRedirect";

const mapStateToProps = (state) => {
    return {
        isAuth: state.auth.isAuth,
        messages: state.messages,
    }
};
export default compose(
    connect(mapStateToProps, {addMessage}),
    WithAuthRedirect,
)(Messages);
