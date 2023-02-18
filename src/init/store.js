import {configureStore} from '@reduxjs/toolkit';
import {postsReducer} from './reducers/postsReducer';
import {messagesReducer} from './reducers/messagesReducer';
import {usersReducer} from './reducers/usersReducer';
import {profileReducer} from './reducers/profileReducer';

const store = configureStore({
    reducer: {
        posts: postsReducer,
        messages: messagesReducer,
        userCollection: usersReducer,
        profile: profileReducer,
    },
});

export default store;
