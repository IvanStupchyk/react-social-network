import {HashRouter} from "react-router-dom";
import {Provider} from "react-redux";
import {store} from "./redux/redux-store";
import React from "react";
import {AppContainer} from "./App";

export const SocialNetworkApp = () => {
    return <HashRouter>
        <Provider store={store}>
            <AppContainer/>
        </Provider>
    </HashRouter>
}