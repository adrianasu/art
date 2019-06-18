import React from 'react';
import { Link } from 'react-router-dom';
import './brief.css';

export default function RenoirBrief(){
    return(
        <section className="renoir-brief brief">                  
            <div className="info">
                <h3>Renoir</h3>
                <p>
                    Pierre-Auguste Renoir was a French 
                    artist who was a leading painter in 
                    the development of the Impressionist 
                    style. He celebrated beauty and 
                    especially feminine sensuality.
                </p>
                <Link to="/renoir">+</Link>
            </div>
        </section>
    );
}