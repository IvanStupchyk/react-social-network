import React from 'react';
import './App.css';
import {Route} from 'react-router-dom';
import {DialogsContainer} from "./components/Dialogs/DialogsContainer";
import {Friends} from "./components/Friends/Friends";
import {Settings} from "./components/Settings/Settings";
import {News} from "./components/News/News";
import {Music} from "./components/Music/Music";
import {Navbar} from "./components/Navbar/Navbar";
import {Header} from "./components/Header/Header";
import {Profile} from "./components/Profile/Profile";

export function App() {
    return (
        <div className="app-wrapper">
            <Header/>
            <Navbar/>

            <div className="app-wrapper-content">
                <Route path={"/dialogs"} render={() => <DialogsContainer/>}/>
                <Route path={"/Profile"} render={() => <Profile/>}/>
                <Route path={"/music"} render={() => <Music/>}/>
                <Route path={"/news"} render={() => <News/>}/>
                <Route path={"/settings"} render={() => <Settings/>}/>
                <Route path={"/friends"} render={() => <Friends/>}/>
            </div>
        </div>
    );
}

