import React from 'react'
import './home.css'
import NewDrops from './NewDrops'
import Poy from './Poy'
import Reviews from './Reviews'
import Footer from '../../assets/footer/Footer'

const Home = () => {
  return (
    <>
        <div className='homecontainer'>
            <div className='homeheading'>
                <span className='homedoit'>do it</span>
                <span className='homeheadingrigt'> right</span>
            </div>

            <Poy/>
            <NewDrops/>
            <Reviews/>
        </div>
        <Footer/>
    </>
  )
}

export default Home
