import React from 'react';
import './brief.css';

export default function DegasBrief() {
    return (
        <section className="brief degas-brief" >
            <div className="info">
                <h2>Degas</h2>
                <p>
                    Edgar Degas sought to capture fleeting moments
                    in the flow of modern life, yet he showed
                    little interest in painting plein-air landscapes.
                </p>
                <a href="" title="More">+</a>
            </div>
            <img src="https://learnodo-newtonic.com/wp-content/uploads/2015/09/The-Dance-Class-1874-Edgar-Degas.webp" />
        </section>
    );
}