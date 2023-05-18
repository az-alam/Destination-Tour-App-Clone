import React from 'react';
import './destinationCards.css';
import StarBorderPurple500Icon from '@mui/icons-material/StarBorderPurple500';


function DestinationCards() {
    return (
        <>
            <div id="wrapper">
                <div id="destinations">
                    <h4>TOP TRENDING</h4>
                    <h1>Holiday Destinations</h1>
                    <div className="destination-wrapper">
                        <div className="destination">
                            <h3>Europe</h3>
                            <div className="moving-div">
                                <div className="part">
                                    <h5>84 tours</h5>
                                    <p>352 departures available</p>
                                </div>
                                <div className="part">
                                    <strong>58,656 guests</strong>
                                    <p>already travelled</p>
                                </div>
                                <div className="part">
                                    <span><StarBorderPurple500Icon /></span>
                                    <strong>5.0</strong>
                                    <div className='hide-part'>
                                        <a href="/" className="cta">Show Tours</a>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="destination">
                            <h3>Jammu & Kashmir</h3>
                            <div className="moving-div">
                                <div className="part">
                                    <h5>84 tours</h5>
                                    <p>352 departures available</p>
                                </div>
                                <div className="part">
                                    <strong>58,656 guests</strong>
                                    <p>already travelled</p>
                                </div>
                                <div className="part">
                                    <span><StarBorderPurple500Icon /></span>
                                    <strong>5.0</strong>
                                    <div className="hide-part">

                                        <a href="/" className="cta">Show Tours</a>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="destination">
                            <h3>Sikkim<br />Darjeeling</h3>
                            <div className="moving-div">
                                <div className="part">
                                    <h5>84 tours</h5>
                                    <p>352 departures available</p>
                                </div>
                                <div className="part">
                                    <strong>58,656 guests</strong>
                                    <p>already travelled</p>
                                </div>
                                <div className="part">
                                    <span><StarBorderPurple500Icon /></span>
                                    <strong>5.0</strong>
                                    <div className="hide-part">

                                        <a href="/" className="cta">Show Tours</a>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="destination">
                            <h3>Himachal Pradesh</h3>
                            <div className="moving-div">
                                <div className="part">
                                    <h5>84 tours</h5>
                                    <p>352 departures available</p>
                                </div>
                                <div className="part">
                                    <strong>58,656 guests</strong>
                                    <p>already travelled</p>
                                </div>
                                <div className="part">
                                    <span><StarBorderPurple500Icon /></span>
                                    <strong>5.0</strong>
                                    <div className="hide-part">

                                        <a href="/" className="cta">Show Tours</a>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="destination">
                            <h3>Jammu & Kashmir</h3>
                            <div className="moving-div">
                                <div className="part">
                                    <h5>84 tours</h5>
                                    <p>352 departures available</p>
                                </div>
                                <div className="part">
                                    <strong>58,656 guests</strong>
                                    <p>already travelled</p>
                                </div>
                                <div className="part">
                                    <span><StarBorderPurple500Icon /></span>
                                    <strong>5.0</strong>
                                    <div className="hide-part">
                                        <a href="/" className="cta">Show Tours</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default DestinationCards