// core
import React from 'react';
import {compose} from 'redux';
import {connect} from 'react-redux';

// components
import {Messages} from './Messages';

// other
import {addMessage} from '../../init/actions/messagesAction';

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
export default compose(
    connect(mapStateToProps, {addMessage}),
)(Messages);
