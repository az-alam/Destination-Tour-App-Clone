import React from 'react';
import Bhutan from './images/bhutan.jpg';
import Elephant from './images/elephant.jpg';
import Varanashi from './images/varanasi.jpg';

function BookSection() {
  return (
    <>
    <div id="carouselExampleControls" class="carousel slide" data-bs-ride="carousel">
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img src={Bhutan} class="d-block w-100" alt="BHutan"/>
    </div>
    <div class="carousel-item">
      <img src={Elephant} class="d-block w-100" alt="Sri Lanka"/>
    </div>
    <div class="carousel-item">
      <img src={Varanashi} class="d-block w-100" alt="Varanasi"/>
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>
    </>
  )
}

export default BookSection