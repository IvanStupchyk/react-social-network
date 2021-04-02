import React from 'react';
import './App.css';
import Profile from "./components/profile/Profile";
import Dialogs from "./components/Dialogs/Dialogs";
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import { Route } from 'react-router-dom';



function App() {
  return (
    <div className="app-wrapper">
        <Header />
        <Navbar />
        <div className="app-wrapper-content">
            <Route component={Dialogs} />
            <Route component={Profile} />
        </div>

    </div>
  );
}

export default App;
