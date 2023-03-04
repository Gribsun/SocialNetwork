// core
import React from 'react';
import {connect} from 'react-redux';
import {addMessage} from '../../init/actions/messagesAction';

// components
import {Messages} from './Messages';

// types
import {RootState} from '../../init';
import {IMessagesState} from '../../init/types/messagesTypes';

type MapStatePropsType = {
    isAuth: boolean,
    messages: IMessagesState,
}

const mapStateToProps = (state: RootState): MapStatePropsType => {
    return {
        isAuth: state.auth.isAuth,
        messages: state.messages,
    }
};
export default connect(
    mapStateToProps,
    {addMessage}
)(Messages);
