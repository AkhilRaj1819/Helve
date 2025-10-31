import React from 'react'
import HomeMain from '../components/Home/HomeMain'
import HomeProducts from '../components/Home/HomeProducts'
import NavBar from '../components/NavBar'
import HomeQuality from '../components/Home/HomeQuality'
const Home = () => {
  return (
    <div>
      <nav><NavBar></NavBar></nav>
      <HomeMain></HomeMain>
      <HomeProducts></HomeProducts>
      <HomeQuality></HomeQuality>
    </div>
  )
}

export default Home
