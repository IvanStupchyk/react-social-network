import React, {Component} from 'react';
import './App.css';
import {HashRouter, Route} from 'react-router-dom';
import {Friends} from "./components/Friends/Friends";
import {Settings} from "./components/Settings/Settings";
import {News} from "./components/News/News";
import {Music} from "./components/Music/Music";
import {Navbar} from "./components/Navbar/Navbar";
import ProfileContainer from "./components/Profile/ProfileContainer";
import HeaderContainer from "./components/Header/Header-container";
import {compose} from "redux";
import {connect, Provider} from "react-redux";
import {withRouter} from "react-router";
import {initializeApp} from "./redux/app-reducer";
import {AppStateType, store} from "./redux/redux-store";
import {Preloader} from "./components/common/Preloader/Preloader";
import {Suspense} from 'react';

const DialogsContainer = React.lazy(() => import('./components/Dialogs/DialogsContainer'))
const UsersContainer = React.lazy(() => import('./components/Users/UsersContainer'))
const Login = React.lazy(() => import('./components/Login/Login'))

type MapDispatchPropsType = {
    initializeApp: () => void
}

type MapStatePropsType = {
    initialized: boolean
}

type OwnPropsType = MapDispatchPropsType & MapStatePropsType

export class App extends Component<OwnPropsType, any> {
    componentDidMount(): void {
        this.props.initializeApp()
    }

    render(): React.ReactNode {
        if (!this.props.initialized) {
            return <Preloader/>
        }

        return (
            <div className="app-wrapper">
                <HeaderContainer/>
                <Navbar/>

                <div className="app-wrapper-content">
                    <Suspense fallback={<Preloader />}>
                        <Route path={"/dialogs"} render={() => <DialogsContainer/>}/>
                        <Route path={"/profile/:userId?"} render={() => <ProfileContainer/>}/>
                        <Route path={"/users"} render={() => <UsersContainer/>}/>
                        <Route path={"/music"} render={() => <Music/>}/>
                        <Route path={"/news"} render={() => <News/>}/>
                        <Route path={"/settings"} render={() => <Settings/>}/>
                        <Route path={"/friends"} render={() => <Friends/>}/>
                        <Route path={"/login"} render={() => <Login/>}/>
                    </Suspense>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state: AppStateType): MapStatePropsType => {
    return {
        initialized: state.app.initialized
    }
}

const AppContainer = compose<React.ComponentType>(
    connect(mapStateToProps, {initializeApp}),
    withRouter
)(App)


export const SocialNetworkApp = () => {
    return <HashRouter>
        <Provider store={store}>
            <AppContainer/>
        </Provider>
    </HashRouter>
}