import React from 'react';
import Header from './Header';
import Navbar from './Navbar';
import Section from './Section';
import DestinationCards from './DestinationCards';
import BookSection from './BookSection';
import Category from './Category';
import TourPakages from './TourPakages';


function Home() {
  return (
    <>
      <Header />
      <Navbar />
      <Section/>
      <DestinationCards/>
      <BookSection/>
      <Category/>
      <TourPakages />

    </>
  )
}

export default Home