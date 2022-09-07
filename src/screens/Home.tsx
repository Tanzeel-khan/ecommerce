import React from 'react'
import Announcements from '../components/Announcements'
import Categories from '../components/Categories';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import Newsletter from '../components/NewsLetter';
import Slider from '../components/Slider';

const Home = () => {
  return (
    <>
    <Announcements />
    <Navbar />
    <Slider/>
    <Categories/>
    <Newsletter/>
    <Footer/>
    </>
  )
}

export default Home
