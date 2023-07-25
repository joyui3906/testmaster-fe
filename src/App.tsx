import React from 'react';
import logo from './logo.svg';
import './App.css';
import Gnb from "./components/common/gnb/Gnb";
import { AppContainer } from './styles/CommonStyle';
import Router from "@src/routes";

function App() {
    return (
        <AppContainer className="App">
            <Gnb/>
            <Router/>
        </AppContainer>
    );
}

export default App;
