import React from 'react';
import './tourPakages.css';
import Andaman from './images/Andaman.jpg';
import Garden from './images/dream-garden.jpg';
import Kerala from './images/Kerala.jpg';

function TourPakages() {
    return (
        <>
            <section>
                <div className='wrapper'>
                    <h1>Trending Tour Packages</h1>
                </div>
                <div className='container-pakages'>
                    <div className='pakage-item'>
                        <div className='pakage-item-image'>
                            <img src={Andaman} alt=''></img>
                        </div>
                        <div className='pakage-item-text'>
                            <h5>OBLU Select Xperience Ailafushi, Maldives</h5>
                            <p>7Night / 8Days</p>
                            <div className='price-book'>
                                <div className='price'>
                                    <span>From</span><br />
                                    <strong>₹ 2,000</strong>
                                </div>
                                <a href='/'>Book Now</a>
                            </div>
                        </div>
                    </div>
                    <div className='pakage-item'>
                        <div className='pakage-item-image'>
                            <img src={Garden} alt=''></img>
                        </div>
                        <div className='pakage-item-text'>
                            <h5>OBLU Select Xperience Ailafushi, Maldives</h5>
                            <p>7Night / 8Days</p>
                            <div className='price-book'>
                                <div className='price'>
                                    <span>From</span><br />
                                    <strong>₹ 2,000</strong>
                                </div>
                                <a href='/'>Book Now</a>
                            </div>
                        </div>
                    </div>
                    <div className='pakage-item'>
                        <div className='pakage-item-image'>
                            <img src={Kerala} alt=''></img>
                        </div>
                        <div className='pakage-item-text'>
                            <h5>OBLU Select Xperience Ailafushi, Maldives</h5>
                            <p>7Night / 8Days</p>
                            <div className='price-book'>
                                <div className='price'>
                                    <span>From</span><br />
                                    <strong>₹ 2,000</strong>
                                </div>
                                <a href='/'>Book Now</a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default TourPakages