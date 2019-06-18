import React from 'react';
import './home.css';
import DegasBrief from './degas-brief';
import Exhibitions from './exhibitions';
import Intro from './intro';
import LandingPage from './landing-page';
import RenoirBrief from './renoir-brief';
import MonetBrief from './monet-brief';

export default function Home(){
    return(
        <div className="home">
            <LandingPage />
            <Intro />
            <h2>Artists</h2>
            <div className="art-grid">
                <MonetBrief />
                <RenoirBrief />
                <DegasBrief />
            </div>
            <Exhibitions />
        </div>

    );
}