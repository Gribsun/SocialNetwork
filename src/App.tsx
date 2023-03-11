// core
import React, {FC, Suspense, useEffect} from 'react';
import {Routes, Route, Navigate} from 'react-router-dom';

// components
import {HeaderContainer} from './components/Header/HeaderContainer';
import {Navbar} from './components/Navbar/Navbar';
import LoginPageContainer from './components/LoginPage/LoginContainer';

// other
import {checkLogin} from './init/actions/authAction';
import {initializedSuccess} from './init/actions/appAction';
import {useAppDispatch, useAppSelector} from './hooks/redux-hooks';

// styles
import style from './App.module.css';

// components lazy loading
const UsersPage = React.lazy(() => import('./components/UsersPage/UsersPage'));
const ProfilePage = React.lazy(() => import('./components/ProfilePage/ProfilePage'));
const MessagesPage = React.lazy(() => import('./components/MessagesPage/MessagesPage'));

export const App: FC = () => {
    const dispatch = useAppDispatch();
    const initialized = useAppSelector(state => state.initialized);

    useEffect(() => {
        const promise = dispatch(checkLogin());
        Promise.all([promise])
            .then(() => {
                dispatch(initializedSuccess());
            })
    }, [dispatch]);

    return (
        <>
            {!initialized
                ? null
                : <div id='applicationBlock' className={style.appWrapper} aria-disabled={true}>
                    <HeaderContainer/>
                    <div className={style.appWrapperContent}>
                        <Navbar/>
                        <div className={style.appContent}>
                            <Suspense fallback={<div>Loading...</div>}>
                                <Routes>
                                    <Route path='/profile' element={<ProfilePage/>}/>
                                    <Route path='/profile/:id' element={<ProfilePage/>}/>
                                    <Route path='/messages' element={<MessagesPage/>}/>
                                    <Route path='/users' element={<UsersPage/>}/>
                                    <Route path='/login' element={<LoginPageContainer/>}/>
                                    <Route path="/" element={<Navigate to="/profile"/>}/>
                                </Routes>
                            </Suspense>
                        </div>
                    </div>
                    {/*<Footer/>*/}
                </div>}
        </>
    );
}
