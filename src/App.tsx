import React from 'react';
import './App.css';
import Profile from "./components/Profile/Profile";
import Dialogs from "./components/Dialogs/Dialogs";
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import {Route} from 'react-router-dom';
import Music from "./components/Music/Music";
import News from "./components/News/News";
import Settings from "./components/Settings/Settings";
import Friends from "./components/Friends/Friends";
import store from "./redux/redux-store";


type StateType = {
    store: typeof store
}

function App(props: StateType) {

    const state = props.store.getState()
    console.log(state)
    return (
        <div className="app-wrapper">
            <Header/>
            <Navbar/>
            <div className="app-wrapper-content">
                <Route path={"/dialogs"} render={() => <Dialogs dialogsPage={state.dialogsReducer}
                                                                dispatch={props.store.dispatch.bind(props.store)}
                />}/>
                <Route path={"/Profile"} render={() => <Profile profilePage={state.profileReducer}
                                                                dispatch={props.store.dispatch.bind(props.store)}
                />}/>
                <Route path={"/music"} render={() => <Music/>}/>
                <Route path={"/news"} render={() => <News/>}/>
                <Route path={"/settings"} render={() => <Settings/>}/>
                <Route path={"/friends"} render={() => <Friends/>}/>
            </div>
        </div>
    );
}

export default App;
