import React from 'react';
import { hot } from 'react-hot-loader';
import './App.css';
import Home from './home';
import NavBar from './nav-bar';

class App extends React.Component{  
    render(){
        return(
            <div className='App'>
                <NavBar />
            </div>
        );
    }
}

export default hot(module)(App);