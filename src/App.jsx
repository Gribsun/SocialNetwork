// core
import React from "react";
import {Routes, Route} from 'react-router-dom';

// components
import {Header} from './components/Header/Header';
import {Navbar} from "./components/Navbar/Navbar";
import {ProfileContainer} from "./components/Profile/ProfileContainer";
import {UsersContainer} from "./components/Users/UsersContainer";
import {MessagesContainer} from "./components/Messages/MessagesContainer";
import ClassComponent from "./components/ClassComponent/ClassComponent";
import {Footer} from "./components/Footer/Footer";

// styles
import style from './App.module.css';

function App() {
    return (
        <div className={style.appWrapper}>
            <Header/>
            <Navbar/>
            <Routes>
                <Route path='/profile/:id' element={<ProfileContainer />}/>
                <Route path='/messages' element={<MessagesContainer />}/>
                <Route path='/users' element={<UsersContainer />}/>
                <Route path='/usersClass' element={<ClassComponent />}/>
            </Routes>
            <Footer/>
        </div>
    );
}

export default App;
