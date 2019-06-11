import React from 'react';
import { hot } from 'react-hot-loader';
import './App.css';
import LandingPage from './landing-page';
import Exhibitions from './exhibitions';
import Degas from './degas';
import Intro from './intro';
import Monet from './monet';
import whiskers from './images/cat.jpg';

class App extends React.Component{  
    render(){
        return(
            // <Router>
                <div className='App'>
                    <LandingPage />
                    <Intro />
                    <Monet />
                    <Degas />
                    <Exhibitions />
                </div>
            // </Router>
        );
    }
}

export default hot(module)(App);