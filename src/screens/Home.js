import React from 'react'
import Cards from '../components/Cards'
import Carousel from '../components/Carousel'
import Footer from '../components/Footer'
import NavBar from '../components/NavBar'
// import { Link } from 'react-router-dom'

export default function Home() {
  return (
    <>
      {/* only one div bar can be here and therefore add<> as many inherited div bar can be created */}
      <div> <NavBar /> </div>
      <div> <Carousel /> </div>
      <div className='m-3'> <Cards /> <Cards /> <Cards /> <Cards /> </div>
      <div> <Footer /> </div>
    </>
  )
}
