import { Button, Divider, } from '@mui/material'
import React from 'react'
import Logo from '../Images/LogoPlus.png'
import { ShoppingCart } from '@mui/icons-material'



export const NavBar = () => {
    return (
        <div>
            <nav className="navbar navbar-expand-lg bg-white shadow-sm align-items-center   ">
                <div className="container-fluid">
                    {/* =================== LOGO ==================== */}
                    
                        <div className="logo d-flex justify-content-between align-items-center">
                            <h4 variant="h5" className='p-0 m-0' style={{ fontWeight: 'bold' }}>
                                <span className='blue-clr'>Dawa</span>
                                <img className='img-fluid' alt="Logo" src={Logo} />
                                <span className='green-clr'>Khana</span>
                            </h4>
                        </div>
                   
                    {/* =================== TOOGLE BUTTON ===================== */}
                    <button className="navbar-toggler ms-auto" type="button" data-bs-toggle="collapse"
                        data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                        aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    {/* =================== ITEMS LIST ===================== */}
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav  me-auto mx-auto mb-2 mb-lg-0">
                            <li className="nav-item ">
                                <a className="nav-link" aria-current="page" href='/'>Home</a>
                            </li>
                            <li className="nav-item ">
                                <a className="nav-link" href='/'>Shop</a>
                            </li>
                           
                            <li className="nav-item">
                                <a className="nav-link " href='/'>About</a>
                            </li>
                            <li className="nav-item ">
                                <a className="nav-link " href='/'>Support</a>
                            </li>
                        </ul>
                        {/* =================== BUTTONS ===================== */}
                        <div className="d-flex p-2 ">
                          
                            <div style={{ display: 'flex', alignItems: 'center' }}>
                                <div>
                                   <ShoppingCart/>
                                </div>
                                <Divider orientation="vertical" flexItem sx={{ backgroundColor: 'black', height: '100%', marginRight: '10px', marginLeft: '10px' }} />
                            </div>
                            <div className='login-text blue-clr  d-flex align-items-center '>
                                <h6 className='px-3 m-0'>Log in</h6>
                            </div>
                            <Button className='green-btn' variant="contained" sx={{ mr: 2 }} >Sign up</Button>

                        </div>
                    </div>
                </div>
            </nav>
        </div>
    )
}
