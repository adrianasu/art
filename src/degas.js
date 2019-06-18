import React from 'react';
import './artist-summary.css';

export default function Degas(){
    return(
        <section className="artist-summary" >
                <h2>Degas</h2>
                <p>
                    Edgar Degas sought to capture fleeting moments 
                    in the flow of modern life, yet he showed
                    little interest in painting plein-air landscapes,
                    favoring scenes in theaters and cafés illuminated
                    by artificial light, which he used to clarify 
                    the contours of his figures, adhering to his 
                    academic training.
                </p>
                <div className="art-gallery">
                    <div className="art-item">
                        <div className="info">
                            <h3>Ballet Rehearsal, 1874</h3>
                        <p>The lightness of the ballerinas dancing, 
                            contrasts with the relaxed gestures of those
                             on the left, waiting to perform. The thin 
                             layer of paint, rendered even more transparent
                              with time, allows the naked eye to see the 
                              painter's reworking.</p>
                        </div>
                        <img src="https://artisticjunkie.com/wp-content/uploads/2017/08/Edgar-Degas-Ballet-Rehearsal-on-Stage.jpg" alt="Ballet Rehearsal On Stage" />
                    </div>
                <div className="art-item">
                    <div className="info">
                        <h3>A Cotton Office in New Orleans, 1873</h3>
                        <p>The first painting Edgar Degas sold to a museum
                            did not portray underage ballerinas or a 
                            domestic tableau but the artist’s relatives
                            at work in a cotton brokers’ office—in New 
                            Orleans, Louisiana.</p>
                    </div>
                    <img src="https://artisticjunkie.com/wp-content/uploads/2017/08/Edgar-Degas-New-Orleans.jpg" alt="New Orleans" />
                </div>
                <div className="art-item">
                    <div className="info">
                        <h3>Two Dancers On Stage, 1874</h3>
                        <p>Degas wanted to show the visible world
                            from many angles not yet explored in 
                            the world of art. Degas takes the 
                            viewer into the world of the ballet from
                            a new vantage point. The artist does not
                            entirely reveal the actions of his subjects,
                            but allows the viewer to witness the scene
                            without complete understanding.</p>
                    </div>
                    <img src="https://artisticjunkie.com/wp-content/uploads/2017/08/Edgar-Degas-Two-Dancers-on-Stage.jpg" alt="Two Dancers On Stage" />
                    </div>
                </div>
            </section>
    );
}