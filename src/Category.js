import React from 'react';
import Dubai from './images/Dubai.jpg';
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
                        <img src={Dubai} alt='Dubai'></img>
                    </div>
                    <div className='text-div'>
                        <lable>International Holidays</lable>
                        <h3>Dubai</h3>
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