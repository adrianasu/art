import React from 'react';
import './artist-summary.css';

export default function Renoir() {
    return(
       
            <section className="artist-summary">
                <h2>Renoir</h2>
                <p>
                    Renoir's paintings are notable 
                    for their vibrant light and saturated 
                    color, most often focusing on people in
                    intimate and candid compositions. 
                </p>
                <p> The female
                    nude was one of his primary subjects. In 
                    characteristic Impressionist style, Renoir 
                    suggested the details of a scene through freely
                    brushed touches of color, so that his figures 
                    softly fuse with one another and their surroundings.
                </p>
            <div className="art-gallery">
                <div className="art-item">
                    <div className="info">
                        <h3>Dance at Le Moulin de la Galette, 1876</h3>
                        <p>The painting depicts a typical Sunday 
                            afternoon at the original Moulin de la 
                            Galette in the district of Montmartre in
                            Paris. In the late 19th century, working
                            class Parisians would dress up and spend 
                            time there dancing, drinking, and eating 
                            galettes into the evening.</p>
                    </div>
                    <img src="https://upload.wikimedia.org/wikipedia/commons/2/21/Pierre-Auguste_Renoir%2C_Le_Moulin_de_la_Galette.jpg" alt="Dance at Le Moulin de la Galette" />
                </div>
                <div className="art-item">
                    <div className="info">
                        <h3>Two Sisters, 1881</h3>
                        <p>Renoir depicted the radiance of 
                        lovely young women on a warm and beautiful
                        day. The older girl is posed in the center 
                        of the evocative landscape backdrop of Chatou, 
                        a suburban town where the artist spent much
                        of the spring of 1881. </p>
                    </div>
                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/15/Renoir_-_The_Two_Sisters%2C_On_the_Terrace.jpg/800px-Renoir_-_The_Two_Sisters%2C_On_the_Terrace.jpg" alt="Two Sisters" />
                </div>
                <div className="art-item">
                    <div className="info">
                        <h3>By The Water, 1880</h3>
                        <p>By focusing on the ‘here and now’ of his time,
                            these fleeting moments become relished nostalgic
                            memories. Renoir’s portrayal of luminous color,
                            skillfully varied brushstrokes, nuances of light
                            and shadow all worked together to form a warm 
                            sensuality.</p>
                    </div>
                    <img src="https://upload.wikimedia.org/wikipedia/commons/c/c5/Pierre-Auguste_Renoir_-_By_the_Water.jpg" alt="By The Water" />
                </div>
            </div>             
        </section>
    )
}