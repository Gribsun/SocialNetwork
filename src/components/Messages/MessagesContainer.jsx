// core
import React from "react";
import {connect} from "react-redux";
import {addMessage} from "../../init/actions/messagesAction";

// components
import {Messages} from "./Messages";

const mapStateToProps = (state) => {
    return {
        messages: state.messages,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        addMessageHandle: (text) => {
            dispatch(addMessage(text));
        }
    }
}

export const MessagesContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(Messages);
