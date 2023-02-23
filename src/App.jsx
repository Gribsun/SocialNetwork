// core
import React from 'react';
import {Routes, Route} from 'react-router-dom';

// components
import {HeaderContainer} from './components/Header/HeaderContainer';
import {Navbar} from './components/Navbar/Navbar';
import ProfileContainer from './components/Profile/ProfileContainer';
import UsersContainer from './components/Users/UsersContainer';
import MessagesContainer from './components/Messages/MessagesContainer';
import {LoginPageContainer} from "./components/LoginPage/LoginContainer";
import {Footer} from './components/Footer/Footer';

// styles
import style from './App.module.css';

function App() {
    return (
        <div className={style.appWrapper}>
            <HeaderContainer/>
            <Navbar/>
            <Routes>
                <Route path='/profile' element={<ProfileContainer/>}/>
                <Route path='/profile/:id' element={<ProfileContainer/>}/>
                <Route path='/messages' element={<MessagesContainer/>}/>
                <Route path='/users' element={<UsersContainer/>}/>
                <Route path='/login' element={<LoginPageContainer/>}/>
            </Routes>
            <Footer/>
        </div>
    );
}

export default App;
