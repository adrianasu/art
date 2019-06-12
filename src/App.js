import React from 'react';
import { hot } from 'react-hot-loader';
import './App.css';
import Degas from './degas';
import Exhibitions from './exhibitions';
import Intro from './intro';
import LandingPage from './landing-page';
import Monet from './monet';
import NavBar from './nav-bar';
import whiskers from './images/cat.jpg';

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
                        <Monet />
                        <Degas />
                        <Exhibitions />

                        </main>
                </div>
        );
    }
}

export default hot(module)(App);