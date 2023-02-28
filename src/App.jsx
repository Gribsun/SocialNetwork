// core
import React, {Suspense, useEffect} from 'react';
import {Routes, Route} from 'react-router-dom';
import {connect, useDispatch} from 'react-redux';

// components
import {HeaderContainer} from './components/Header/HeaderContainer';
import {Navbar} from './components/Navbar/Navbar';
import {LoginPageContainer} from './components/LoginPage/LoginContainer';
import {Footer} from './components/Footer/Footer';
import {Preloader} from './components/common/Preloader/Preloader';

// other
import {initializedSuccess, setUserData} from './init/actions/authAction';
import {getInitializedSelect} from './init/selectors/auth-selectors';

// styles
import style from './App.module.css';

// components lazy loading
const UsersContainer = React.lazy(() => import('./components/Users/UsersContainer'));
const ProfileContainer = React.lazy(() => import('./components/Profile/ProfileContainer'));
const MessagesContainer = React.lazy(() => import('./components/Messages/MessagesContainer'));

function App({initialized}) {
    const dispatch = useDispatch();

    useEffect(() => {
        const promise = dispatch(setUserData());
        Promise.all([promise])
            .then(() => {
                dispatch(initializedSuccess());
            })
    }, [dispatch]);

    return (
        !initialized
            ? <Preloader/>
            : <div className={style.appWrapper}>
                <HeaderContainer/>
                <Navbar/>
                <Suspense fallback={<div>Loading...</div>}>
                    <Routes>
                        <Route path='/profile' element={<ProfileContainer/>}/>
                        <Route path='/profile/:id' element={<ProfileContainer/>}/>
                        <Route path='/messages' element={<MessagesContainer/>}/>
                        <Route path='/users' element={<UsersContainer/>}/>
                        <Route path='/login' element={<LoginPageContainer/>}/>
                    </Routes>
                </Suspense>
                <Footer/>
            </div>
    );
}

const mapStateToProps = (state) => {
    return {
        initialized: getInitializedSelect(state),
    };
}
export default connect(mapStateToProps, null)(App);
