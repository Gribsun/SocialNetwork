import {configureStore} from '@reduxjs/toolkit';
import {postsReducer} from './reducers/postsReducer';
import {messagesReducer} from './reducers/messagesReducer';
import {usersReducer} from './reducers/usersReducer';
import {profileReducer} from './reducers/profileReducer';
import {authReducer} from './reducers/authReducer';

const store = configureStore({
    reducer: {
        posts: postsReducer,
        messages: messagesReducer,
        userCollection: usersReducer,
        profile: profileReducer,
        auth: authReducer,
    },
});

export default store;
