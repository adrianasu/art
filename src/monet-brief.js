import React from 'react';
import { Link } from 'react-router-dom';
import './brief.css';

export default function MonetBrief(){
    return(
        <section className="monet-brief brief">                  
            <div className="info">
                <h3>Monet</h3>
                <p>
                    Claude Monet was the leader of 
                    the French Impressionist movement. 
                    Interested in painting in the 
                    open air and capturing natural light.
                </p>
                <Link to="/monet">+</Link>
            </div>
        </section>
    );
}