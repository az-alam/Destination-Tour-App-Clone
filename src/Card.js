import React from 'react';
import StarBorderPurple500Icon from '@mui/icons-material/StarBorderPurple500';
import Europe from './images/europe.jpg';
import JammuKashmir from './images/kashmir.jpg';
import Sikkim from './images/sikkim.jpg';
import Himachal from './images/himachal.jpg';

function Card() {
    return (
        <div className='destination'>
            <div className='card-up-div'>
                <h4>TOP TRENDING</h4>
                <h1>Holiday Destinations</h1>
            </div>
            <div className='card-down-div'>
                <div className='image-box'>
                    <img src={Europe} alt='Europe'></img>
                    <div className='opacity-color'>
                        <h3>Europe</h3>
                        <div className='trending-meta'>
                            <div className='tour_info'>
                                <strong>84 tours</strong>
                                <p>352 departures available</p>
                            </div><hr/>
                            <div className='guests_info'>
                                <strong>58,656 guests</strong>
                                <p>already travelled</p>
                            </div><hr/>
                            <div className='trending-star'>
                                <span><StarBorderPurple500Icon/></span>
                                <strong>5.0</strong>
                            </div>
                            <div className='btnBox'>
                                <a href='/'>Show Tours</a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='image-box'>
                    <img src={JammuKashmir} alt='Europe'></img>
                    <div className='opacity-color'>
                        <h3>Jammu and Kashmir</h3>
                        <div className='trending-meta'>
                            <div className='tour_info'>
                                <strong>84 tours</strong>
                                <p>352 departures available</p>
                            </div><hr/>
                            <div className='guests_info'>
                                <strong>58,656 guests</strong>
                                <p>already travelled</p>
                            </div><hr/>
                            <div className='trending-star'>
                                <span><StarBorderPurple500Icon/></span>
                                <strong>5.0</strong>
                            </div>
                            <div className='btnBox'>
                                <a href='/'>Show Tours</a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='image-box'>
                    <img src={Sikkim} alt='Europe'></img>
                    <div className='opacity-color'>
                        <h3>Sikkim Darjeeling</h3>
                        <div className='trending-meta'>
                            <div className='tour_info'>
                                <strong>84 tours</strong>
                                <p>352 departures available</p>
                            </div><hr/>
                            <div className='guests_info'>
                                <strong>58,656 guests</strong>
                                <p>already travelled</p>
                            </div><hr/>
                            <div className='trending-star'>
                                <span><StarBorderPurple500Icon/></span>
                                <strong>5.0</strong>
                            </div>
                            <div className='btnBox'>
                                <a href='/'>Show Tours</a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='image-box'>
                    <img src={Himachal} alt='Europe'></img>
                    <div className='opacity-color'>
                        <h3>Himachal Pradesh</h3>
                        <div className='trending-meta'>
                            <div className='tour_info'>
                                <strong>84 tours</strong>
                                <p>352 departures available</p>
                            </div><hr/>
                            <div className='guests_info'>
                                <strong>58,656 guests</strong>
                                <p>already travelled</p>
                            </div><hr/>
                            <div className='trending-star'>
                                <span><StarBorderPurple500Icon/></span>
                                <strong>5.0</strong>
                            </div>
                            <div className='btnBox'>
                                <a href='/'>Show Tours</a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='image-box'>
                    <img src={JammuKashmir} alt='Europe'></img>
                    <div className='opacity-color'>
                        <h3>Jammu and Kashmir</h3>
                        <div className='trending-meta'>
                            <div className='tour_info'>
                                <strong>84 tours</strong>
                                <p>352 departures available</p>
                            </div><hr/>
                            <div className='guests_info'>
                                <strong>58,656 guests</strong>
                                <p>already travelled</p>
                            </div><hr/>
                            <div className='trending-star'>
                                <span><StarBorderPurple500Icon/></span>
                                <strong>5.0</strong>
                            </div>
                            <div className='btnBox'>
                                <a href='/'>Show Tours</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Card