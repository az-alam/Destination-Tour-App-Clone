import React from 'react';
import Tajmahal from './images/taj-mahal.jpg';
import Kailash from './images/adi-kailsah.jpg';
import Frozenriver from './images/Chadar-Frozen-River.jpg';
import Wildlife from './images/wildlife.jpg';
import Heritage from './images/heritage.jpg';
import Trekking from './images/trekking.jpg';
import Pilgrimage from './images/pilgrimage.jpg';

function Section() {
  return (
    <section className='section'>
      <div className='left'>
        <div id="carouselExampleIndicators" class="carousel slide" data-bs-ride="true">
          <div class="carousel-indicators">
            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
          </div>
          <div class="carousel-inner">
            <div class="carousel-item active content">
              <img src={Tajmahal} class="d-block w-100" alt="Taj Mahal" />
              <div className='carousel-content'>
                <h2>Taj Mahal</h2>
                <p>06 Nights- 07 Days</p>
              </div>
            </div>
            <div class="carousel-item">
              <img src={Kailash} class="d-block w-100" alt="Kailash Parwat" />
              <div className='carousel-content'>
                <h2>Adi Kailash</h2>
                <p>06 Nights- 07 Days</p>
              </div>
            </div>
            <div class="carousel-item">
              <img src={Frozenriver} class="d-block w-100" alt="Ice Mountain" />
              <div className='carousel-content'>
                <h2>Frozen</h2>
                <p>06 Nights- 07 Days</p>
              </div>
            </div>
          </div>
          <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Previous</span>
          </button>
          <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Next</span>
          </button>
        </div>
      </div>
      <div className='right'>
        <div className='plan-content'>
          <h2>Let us plan you a
            perfect <span className='text-color'>India Holiday</span></h2>
            <p>Personalised, well-crafted tour packages for best experiences</p>
        </div>
        <div className='image-content'>
          <div className='colum'>
            <div className='colum-img'>
              <img src={Wildlife} alt="Wildlife" />
            </div>
            <div className='colum-content'>
              <h4>Wildlife</h4>
              <p>70+ Packages</p>
            </div>
          </div>
          <div className='colum'>
          <div className='colum-img'>
              <img src={Heritage} alt="Heritage" />
            </div>
            <div className='colum-content'>
              <h4>Heritage</h4>
              <p>70+ Packages</p>
            </div>
          </div>
          <div className='colum'>
          <div className='colum-img'>
              <img src={Trekking} alt="Trekking" />
            </div>
            <div className='colum-content'>
              <h4>Trekking</h4>
              <p>70+ Packages</p>
            </div>
          </div>
          <div className='colum'>
          <div className='colum-img'>
              <img src={Pilgrimage} alt="Pilgrimage" />
            </div>
            <div className='colum-content'>
              <h4>Pilgrimage</h4>
              <p>70+ Packages</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Section
