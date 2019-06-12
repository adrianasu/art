import React from 'react';
import './nav-bar.css';

export default function NavBar(){
    return(
        <nav>
            <ul>
                <li><a href="#home" >Home</a></li>
                <li><a href="#intro" >Intro</a></li>
                <li><a href="#monet" >Monet</a></li>
                <li><a href="#degas" >Degas</a></li>
                <li><a href="#exhibitions" >Exhibitions</a></li>
            </ul>
        </nav>
    )
}