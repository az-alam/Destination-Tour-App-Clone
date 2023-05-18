import React from 'react';
import Header from './Header';
import Navbar from './Navbar';
import Section from './Section';
import DestinationCards from './DestinationCards';
import BookSection from './BookSection';
import Category from './Category';


function Home() {
  return (
    <>
      <Header />
      <Navbar />
      <Section/>
      <DestinationCards/>
      <BookSection/>
      <Category/>

    </>
  )
}

export default Home