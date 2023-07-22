import React, { useState } from 'react'
import './register.css'

const Register = () => {

    const [gender ,setGender] = useState('')

  return (
    <>
        <div className='login'>
            <div className='loginmain'>
                <div className='loginleft'>
                    <h4 className='loginheading'>Register</h4>
                    <div className='registertext'>
                        <span>Sign up with</span>
                    </div>

                    <div className='registertypesbox'>
                        <button className='logintypebutton'>
                            <img src="https://static-00.iconduck.com/assets.00/google-icon-2048x2048-czn3g8x8.png" alt="" className='logintypeimg' />
                        </button>

                        <button className='logintypebutton'>
                            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/Apple_logo_black.svg/1667px-Apple_logo_black.svg.png" alt="" className='logintypeimg' />
                        </button>

                        <button className='logintypebutton'>
                            <img src="https://cdn-icons-png.flaticon.com/512/5968/5968764.png" alt="" className='logintypeimg' />
                        </button>
                    </div>

                    <div className='registertext'>
                        <span>OR</span>
                    </div>

                    <h4 className='registersmallheadings'>Your Name</h4>
                    
                    <div className='logininputbox'>
                        <input type="text" className='logininputemail' placeholder="First Name" />
                    </div>

                    <div className='logininputbox'>
                        <input type="text" className='logininputemail' placeholder="Second Name" />
                    </div>

                    <h4 className='registersmallheadings'>Gender</h4>

                    <div className='registergender'>
                        <div className='registergenderbox' >
                            <div className='registeroptionbox' onClick={()=>setGender('male')}>
                                <div className='registeroptionselectbox' style={{backgroundColor: gender === 'male' ? 'rgba(74, 105, 226, 1)':'transparent'}}>
                                </div>
                            </div>
                            <span className='registergendertxt'> Male </span>
                        </div>

                        <div className='registergenderbox'>
                            <div className='registeroptionbox' onClick={()=>setGender('female')}>
                                <div className='registeroptionselectbox' style={{backgroundColor: gender === 'female' ? 'rgba(74, 105, 226, 1)':'transparent'}}>
                                </div>
                            </div>
                            <span className='registergendertxt'> Female </span>
                        </div>


                        <div className='registergenderbox'>
                            <div className='registeroptionbox' onClick={()=>setGender('other')}>
                                <div className='registeroptionselectbox' style={{backgroundColor: gender === 'other' ? 'rgba(74, 105, 226, 1)':'transparent'}}>
                                </div>
                            </div>
                            <span className='registergendertxt'> Other </span>
                        </div>
                    </div>

                    <h4 className='registersmallheadings'>Login Details</h4>
                    
                    <div className='logininputbox'>
                        <input type="text" className='logininputemail' placeholder="Email" />
                    </div>

                    <div className='logininputbox'>
                        <input type="text" className='logininputemail' placeholder="Password" />
                    </div>

                    <button className='loginbutton'>
                        <span>Register</span>
                        <span>
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" class="bi bi-arrow-right-short" viewBox="0 0 16 16">
                                <path fill-rule="evenodd" d="M4 8a.5.5 0 0 1 .5-.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5A.5.5 0 0 1 4 8z"/>
                            </svg>
                        </span>
                    </button>

                    
                    
                </div>

                <div className='lognright'>

                </div>
            </div>
        </div>
    </>
  )
}

export default Register
