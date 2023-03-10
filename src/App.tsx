// core
import React, {FC, Suspense, useEffect} from 'react';
import {Routes, Route, Navigate} from 'react-router-dom';
import {connect} from 'react-redux';

// components
import {HeaderContainer} from './components/Header/HeaderContainer';
import {Navbar} from './components/Navbar/Navbar';
import LoginPageContainer from './components/LoginPage/LoginContainer';
// import {Footer} from './components/Footer/Footer';
import {Preloader} from './components/common/Preloader/Preloader';

// types
import {RootState} from './init';
import {IAppState} from './init/types/appTypes';

// other
import {checkLogin} from './init/actions/authAction';
import {initializedSuccess} from './init/actions/appAction';
import {useAppDispatch} from './hooks/redux-hooks';

// styles
import style from './App.module.css';

// components lazy loading
const UsersContainer = React.lazy(() => import('./components/UsersPage/UsersContainer'));
const ProfileContainer = React.lazy(() => import('./components/ProfilePage/ProfileContainer'));
const MessagesContainer = React.lazy(() => import('./components/MessagesPage/MessagesContainer'));

const App: FC<{ initialized: IAppState }> = ({initialized}) => {
    const dispatch = useAppDispatch();

    useEffect(() => {
        const promise = dispatch(checkLogin());
        Promise.all([promise])
            .then(() => {
                dispatch(initializedSuccess());
            })
    }, [dispatch]);

    return (
        !initialized
            ? <Preloader/>
            : <div id='applicationBlock' className={style.appWrapper} aria-disabled={true}>
                <HeaderContainer/>
                <div className={style.appWrapperContent}>
                    <Navbar/>
                    <div className={style.appContent}>
                        <Suspense fallback={<div>Loading...</div>}>
                            <Routes>
                                <Route path='/profile' element={<ProfileContainer/>}/>
                                <Route path='/profile/:id' element={<ProfileContainer/>}/>
                                <Route path='/messages' element={<MessagesContainer/>}/>
                                <Route path='/users' element={<UsersContainer/>}/>
                                <Route path='/login' element={<LoginPageContainer/>}/>
                                <Route path="/" element={<Navigate to="/profile"/>}/>
                            </Routes>
                        </Suspense>
                    </div>
                </div>
                {/*<Footer/>*/}
            </div>
    );
}

const mapStateToProps = (state: RootState) => {
    return {
        initialized: state.initialized,
    };
}
export default connect(mapStateToProps, null)(App);
