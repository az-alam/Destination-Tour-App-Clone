import React from 'react';
import Dubai from './images/Dubai.jpg';
import Turkey from './images/Turkey.jpg';
import Moritus from './images/mauritius.jpg';
import './category.css';

function Category(){
    return(
        <>
        <div className='category-main'>
            <div className='category-head'>
                <h1>Top Tour Category</h1>
            </div>
            <div className='category-body'>
                <div className='category-box'>
                    <div className='image-div'>
                        <img src={Turkey} alt='Dubai'></img>
                    </div>
                    <div className='text-div'>
                        <lable>International Holidays</lable>
                        <h5>Turkish Getaway</h5>
                        <p>Starting from</p>
                        <strong>₹ 99,999</strong><br/>
                        <a href='/'>Book Now</a>
                    </div>
                </div>
                <div className='category-box'>
                    <div className='image-div'>
                        <img src={Dubai} alt='Dubai'></img>
                    </div>
                    <div className='text-div'>
                        <lable>International Holidays</lable>
                        <h5>Dubai</h5>
                        <p>Starting from</p>
                        <strong>₹ 99,999</strong><br/>
                        <a href='/'>Book Now</a>
                    </div>
                </div>
                <div className='category-box'>
                    <div className='image-div'>
                        <img src={Moritus} alt='Dubai'></img>
                    </div>
                    <div className='text-div'>
                        <lable>International Holidays</lable>
                        <h5>Mauritius Packages</h5>
                        <p>Starting from</p>
                        <strong>₹ 99,999</strong><br/>
                        <a href='/'>Book Now</a>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}
export default Category;