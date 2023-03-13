import {configureStore} from '@reduxjs/toolkit';
import {postsReducer} from './reducers/postsReducer';
import {usersReducer} from './reducers/usersReducer';
import {profileReducer} from './reducers/profileReducer';
import {authReducer} from './reducers/authReducer';
import {initializedReducer} from './reducers/appReducer';
import {chatReducer} from './reducers/chatReducer';

const store = configureStore({
    reducer: {
        postsCollection: postsReducer,
        userCollection: usersReducer,
        profile: profileReducer,
        auth: authReducer,
        initialized: initializedReducer,
        chat: chatReducer,
    },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;

export default store;
