import React, { Component } from 'react'
import Navbar from '../../assets/navbar/Navbar'
import Footer from '../../assets/footer/Footer'
import NewDrops from './NewDrops'
export default class Cart extends Component {
    render() {
        return (
            <>
                <Navbar/>
                <div>Cart</div>
                <NewDrops />
                <Footer />
            </>
        )
    }
}
