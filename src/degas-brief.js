import React from 'react';
import { Link } from 'react-router-dom';
import './brief.css';

export default function DegasBrief() {
    return (
        <section className="brief degas-brief" >
            <div className="info">
                <h3>Degas</h3>
                <p>
                    Edgar Degas sought to capture fleeting moments
                    in the flow of modern life, yet he showed
                    little interest in painting plein-air landscapes.
                </p>
                <Link to="/degas">+</Link>
            </div>
        </section>
    );
}