import React, {Component, Suspense} from 'react';
import './App.css';
import {Redirect, Route, Switch} from 'react-router-dom';
import {Friends} from "./components/Friends/Friends";
import {Settings} from "./components/Settings/Settings";
import {News} from "./components/News/News";
import {Music} from "./components/Music/Music";
import ProfileContainer from "./components/Profile/ProfileContainer";
import NavbarContainer from "./components/Navbar/NavbarContainer";
import {compose} from "redux";
import {connect} from "react-redux";
import {withRouter} from "react-router";
import {initializeApp} from "./redux/app-reducer";
import {AppStateType} from "./redux/redux-store";
import {Preloader} from "./components/common/Preloader/Preloader";
import {Header} from "./components/Header/Header";

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
                <Header />
                <NavbarContainer />

                <div className="app-wrapper-content">
                    <Suspense fallback={<Preloader/>}>
                        <Switch>
                            <Route exact path={"/"} render={() => <Redirect to={'/profile'} />}/>
                            <Route path={"/dialogs"} render={() => <DialogsContainer/>}/>
                            <Route path={"/profile/:userId?"} render={() => <ProfileContainer/>}/>
                            <Route path={"/users"} render={() => <UsersContainer/>}/>
                            <Route path={"/music"} render={() => <Music/>}/>
                            <Route path={"/news"} render={() => <News/>}/>
                            <Route path={"/friends"} render={() => <Friends/>}/>
                            <Route path={"/settings"} render={() => <Settings/>}/>
                            <Route path={"/login"} render={() => <Login/>}/>
                            <Route path={"*"} render={() => <div>404. PAGE NOT FOUND</div>}/>
                        </Switch>
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

export const AppContainer = compose<React.ComponentType>(
    connect(mapStateToProps, {initializeApp}),
    withRouter
)(App)


