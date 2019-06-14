import React from 'react';
import { hot } from 'react-hot-loader';
import './App.css';
import DegasBrief from './degas-brief';
import Exhibitions from './exhibitions';
import Intro from './intro';
import LandingPage from './landing-page';
import MonetBrief from './monet-brief';
import NavBar from './nav-bar';

class App extends React.Component{  
    render(){
        return(
            <div className='App'>
                <header>
                    <LandingPage />
                    <NavBar />
                </header>
                <main>
                    <Intro />
                    <MonetBrief />
                    <DegasBrief />
                    <Exhibitions />
                </main>
            </div>
        );
    }
}

export default hot(module)(App);