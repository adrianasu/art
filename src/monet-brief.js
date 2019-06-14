import React from 'react';
import './brief.css';

export default function MonetBrief(){
    return(
        <section className="monet-brief brief">                  
            <div className="info">
                <h2>Monet</h2>
                <p>
                    Claude Monet was the leader of 
                    the French Impressionist movement. 
                    Interested in painting in the 
                    open air and capturing natural light.
                </p>
                <a href="" title="More">+</a>
            </div>
            <img src="https://learnodo-newtonic.com/wp-content/uploads/2013/07/Impression-Sunrise-by-Claude-Monet.webp" />
        </section>
    );
}