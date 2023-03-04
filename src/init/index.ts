import {configureStore} from '@reduxjs/toolkit';
import {postsReducer} from './reducers/postsReducer';
import {messagesReducer} from './reducers/messagesReducer';
import {usersReducer} from './reducers/usersReducer';
import {profileReducer} from './reducers/profileReducer';
import {authReducer} from './reducers/authReducer';
import {initializedReducer} from './reducers/appReducer';

const store = configureStore({
    reducer: {
        postsCollection: postsReducer,
        messages: messagesReducer,
        userCollection: usersReducer,
        profile: profileReducer,
        auth: authReducer,
        initialized: initializedReducer,
    },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;

export default store;
