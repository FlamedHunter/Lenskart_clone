import React, { Component } from 'react'
import Navbar from '../../assets/navbar/Navbar'
import Footer from '../../assets/footer/Footer'
import NewDrops from './NewDrops'
import './cart.css'
export default class Cart extends Component {
    render() {
        return (
<div className='empty'>
    <Navbar />
    <div className='cartsaving'>
        <h2 className='cartsavingheading'>Saving to celebrate</h2>
        <p className='cartsavingtext'>Enjoy up to 60% off thousands of styles during the End of Year sale - while suppiles last. No code needed.</p>
    </div>
    <div className='bag cartsaving'>
        <div className='item'>
            <div className='itemtitle'>
                <h2 className='itemheading'>Your Bag</h2>
                <p className='itemheadingtext'>Items in your bag not reserved- check out now to make them yours.</p></div>
            <div className='content'>
                <img src='https://i02.appmifile.com/417_operator_in/17/08/2022/0d6e11e0b3d93f29d2877c77b28d9102!800x800!85.jpg' alt='youritemimage' className='itemimage' />
                <div className='contenttext'>
                    <h3>DROPSET TRAINER SHOES</h3> 
                    <p className='shoeinfo'>Men’s Road Running Shoes </p>
                    <p className='shoeinfo'>Enamel Blue/ University White</p>
                    <p className='shoeinfo'>Size: 10</p>
                    <p className='shoeinfo'>Quantity:1</p>
                    </div>
                    <h2 className='price'>$130.00</h2>
            </div>
        </div>
        <div className='order'>
            <h2 className='orderheading'>Order Summary</h2>
            <div className='ordercontentgrid'>
                <p>1 Item</p>
                <p>$130.00</p>
                <p>Delivery</p>
                <p>$6.9</p>
                <p>Tax</p>
                <p>$13.00</p>
            </div>
            <button className='checkoutbutton' type="button">Checkout</button>
        </div>
    </div>
    <NewDrops />
    <Footer />
</div>
        )
    }
}
