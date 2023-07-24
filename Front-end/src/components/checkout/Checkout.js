import React from 'react'
import './checkout.css'

const Checkout = () => {
  return (
    <>
        <div className='checkout'>
            <div className='checkoutcontainer'>
                <div className='checkoutleft'>
                    <div className='loginforgotpassword'>
                        <span>Login and Checkout faster</span>
                    </div>

                    <h4 className='registersmallheadings'>Contact Details</h4>

                    <div className='checkoutinputbox'>
                        <input type="text" className='checkoutinput' id='email' placeholder="Email" />
                    </div>

                    <h4 className='registersmallheadings'>Shipping Address</h4>

                    <div className='checkoutform'>
                        <div className='checkoutinputbox'>
                            <input type="text" className='checkoutinput' id='firstName' placeholder="First Name" />
                        </div>

                        <div className='checkoutinputbox'>
                            <input type="text" className='checkoutinput' id='lastName' placeholder="Last Name" />
                        </div>

                        <div className='checkoutinputbox2'>
                            <input type="text" className='checkoutinpu2' id='address' placeholder="Find Delivery Address" />
                        </div>

                        <div className='checkoutinputbox'>
                            <input type="text" className='checkoutinput' id='number' placeholder="Phone Number" />
                        </div>
                    </div>

                    <h4 className='registersmallheadings'>Delivery Options</h4>
                </div>

                <div className='checkoutright'>

                </div>
            </div>
        </div>
    </>
  )
}

export default Checkout
