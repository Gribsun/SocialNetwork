// core
import React, {FC, Suspense, useEffect} from 'react';
import {Routes, Route, Navigate} from 'react-router-dom';
import {useAppDispatch, useAppSelector} from './hooks/redux-hooks';

// components
import {LoginPage} from './components/pages/Login/LoginPage';
import {Preloader} from './components/common/Preloader/Preloader';
import {Header} from './components/Header/Header';
import {Navbar} from './components/Navbar/Navbar';
import {ProfilePage} from './components/pages/Profile/ProfilePage';

// other
import {checkLogin} from './init/actions/authAction';
import {initializedSuccess} from './init/actions/appAction';

// styles
import style from './App.module.css';

// components lazy loading
const UsersPage = React.lazy(() => import('./components/pages/Users/UsersPage'));
const ChatPage = React.lazy(() => import('./components/pages/Chat/ChatPage'));

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
                ? <Preloader/>
                : <div id='applicationBlock' className={style.appWrapper} aria-disabled={true}>
                    <Header/>
                    <div className={style.appWrapperContent}>
                        <Navbar/>
                        <div className={style.appContent}>
                            <Suspense fallback={<div>Loading...</div>}>
                                <Routes>
                                    <Route path='/profile/:id?' element={<ProfilePage/>}/>
                                    <Route path='/chat' element={<ChatPage/>}/>
                                    <Route path='/users' element={<UsersPage/>}/>
                                    <Route path='/login' element={<LoginPage/>}/>
                                    <Route path='/' element={<Navigate to='/profile'/>}/>
                                </Routes>
                            </Suspense>
                        </div>
                    </div>
                    {/*<Footer/>*/}
                </div>}
        </>
    );
}
