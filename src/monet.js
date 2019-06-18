import React from 'react';
import './artist-summary.css';

export default function Monet() {
    return(
        <section className="artist-summary">
            <h2>Monet</h2>
            <p>
                Claude Monet was the leader of
                the French Impressionist movement.
            </p>
            <p>
                Interested in painting in the
                open air and capturing natural light, Monet
                would later bring the technique to one of
                its most famous pinnacles with his series
                paintings, in which his observations of the
                same subject, viewed at various times of
                the day, were captured in numerous sequences.
            </p>
            <div className="art-gallery">
                <div className="art-item">
                    <div className="info">
                        <h3>Woman with a parasol, 1875</h3>
                        <p>The artist intended the work to convey
                            the feeling of a casual family outing
                            rather than a formal portrait, and used
                            pose and placement to suggest that his 
                            wife and son interrupted their stroll while
                            he captured their likenesses. </p>
                    </div>
                    <img src="https://learnodo-newtonic.com/wp-content/uploads/2014/06/Woman-with-a-Parasol.webp" alt="Woman with a parasol"/>
                </div>
                <div className="art-item">
                    <div className="info">
                        <h3>Rouen Cathedral, 1890</h3>
                        <p>This painting belongs to a series of paintings. 
                            Each one capture the façade of the Rouen Cathedral
                            at different times of the day and year and reflect
                            changes in its appearance under different lighting
                            conditions.</p>
                    </div>
                    <img src="https://learnodo-newtonic.com/wp-content/uploads/2014/06/Rouen-Cathedral-West-Facade-Sunlight-1894-Claude-Monet.webp" alt ="Rouen Cathedral" />
                </div>
                <div className="art-item">
                    <div className="info">
                        <h3>San Giorgio Maggiore at Dusk, 1908</h3>
                        <p>It forms part of a series of views of the
                            monastery-island of San Giorgio Maggiore.
                        </p>
                        <p>This series is in turn part of a larger 
                            series of views of Venice which Monet began
                            in 1908 during his only visit there.</p>
                    </div>
                    <img src="https://learnodo-newtonic.com/wp-content/uploads/2014/06/San-Giorgio-Maggiore-at-Dusk.webp" alt="San Giorgio Maggiore at Dusk" />
                </div>
            </div>
        </section>
    )
}