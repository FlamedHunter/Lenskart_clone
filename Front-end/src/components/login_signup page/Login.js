import React from 'react'
import './login.css'

const Login = () => {
  return (
    <>
        <div className='login'>
            <div className='loginmain'>
                <div className='loginleft'>

                    <h4 className='loginheading'>Login</h4>
                    <div className='loginforgotpassword'>
                        <span>Forgot your password?</span>
                    </div>
                    
                    <div className='logininputbox'>
                        <input type="text" className='logininputemail' id='email' placeholder="Email" />
                    </div>

                    <div className='logininputbox'>
                        <input type="text" className='logininputpassword' id='email' placeholder="Password" />
                    </div>

                    <button className='loginbutton'>
                        <span>email login</span>
                        <span>
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" class="bi bi-arrow-right-short" viewBox="0 0 16 16">
                                <path fill-rule="evenodd" d="M4 8a.5.5 0 0 1 .5-.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5A.5.5 0 0 1 4 8z"/>
                            </svg>
                        </span>
                    </button>

                    <div className='logintypesbox'>
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
                    
                </div>

                <div className='lognright'>

                </div>
            </div>
        </div>
    </>
  )
}

export default Login
