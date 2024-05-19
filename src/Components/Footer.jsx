import React from 'react'
import Logo from '../Images/LogoPlus.png'
import TextField from '@mui/material/TextField';
import IconButton from '@mui/material/IconButton';
import SendIcon from '@mui/icons-material/Send';
import { Link } from 'react-router-dom';

export const Footer = () => {
    return (
        <div className='footer-section'>

            <div className="container">
                <div className="row">
                    <div className="col-lg-4">
                        {/* ================ Logo */}
                        <div className="logo d-flex justify-content-between align-items-center pt-0 px-0">
                            <Link to='/'>
                                <h4 variant="h5" className='p-0 m-0' style={{ fontWeight: 'bold' }}>
                                    <span className='blue-clr'>DAWA</span>
                                    <img className='img-fluid' alt="Logo" src={Logo} />
                                    <span className='green-clr'>KHANA</span>
                                </h4>
                            </Link>
                        </div>

                        <div className="paragraph text-white ">
                            <ul>
                                <li>
                                    <a
                                        href="https://wa.me/923066520002"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                       <i className="fa-brands fa-whatsapp"></i>
                                        <span className='mx-2'>+92 306 6520002</span>
                                    </a>
                                </li>
                                <li><a href="mailto:info@dawakhana.com">
                                <i className="fa-regular fa-envelope"></i>
                                <span className='mx-2'>info@dawakhana.com</span>
                                </a></li>
                                <li>
                                    <a href="https://www.google.com/maps?q=30.670000,73.100000" target="_blank" rel="noopener noreferrer">
                                    <i className="fa-solid fa-location-dot"></i>
                                    <span className='mx-2'> Sahiwal, Punjab, Pakistan</span>
                                    </a>
                                </li>
                             
                            </ul>
                        </div>

                    </div>
                    {/* <!-- Right column --> */}
                    <div className="col-lg-5">
                        <div className="row">
                            <div className="footer-menu d-flex">
                                <div className="col-lg-5">
                                    <h4>Company</h4>
                                    <div className="Company">
                                        <ul>
                                            <Link to='/about'><li>About us</li></Link>
                                            <Link to='/support'><li>Contact us</li></Link>
                                            <li>Blog</li>
                                        </ul>
                                    </div>
                                </div>
                                {/* <!--  --> */}
                                <div className="col-lg-5">
                                    <h4>Support</h4>
                                    <div className="Support">
                                        <ul>
                                            <Link to='/support'><li>Help Center</li></Link>
                                            <Link to='/about'><li>Term of Service</li></Link>
                                            <li>Privcy Policy</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3">
                        <h4>Stay up to date</h4>
                        <div className="stay-uptodate">
                            <ul>
                                <li>
                                    <TextField
                                        variant="outlined"
                                        focused
                                        fullWidth
                                        label="Enter email adress"
                                        size="small"
                                        sx={{
                                            '& label.Mui-focused': {
                                                color: '#18A9DD',
                                            },
                                            '& .MuiInputBase-root': {
                                                backgroundColor: '#333333',
                                            },
                                            '& .MuiOutlinedInput-root': {
                                                '& fieldset': {
                                                    borderColor: '#18A9DD',
                                                },
                                                '&:hover fieldset': {
                                                    borderColor: '#18A9DD',
                                                },
                                                '&.Mui-focused fieldset': {
                                                    borderColor: '#18A9DD',
                                                },
                                            },
                                        }}
                                        InputProps={{
                                            style: { color: 'white' },
                                            endAdornment: (
                                                <IconButton style={{ color: 'green' }}>
                                                    <SendIcon />
                                                </IconButton>
                                            ),
                                        }}
                                    />
                                </li>
                            </ul>
                        </div>
                     

                    </div>
                </div>
                <hr />
                   <p className='text-center'>Copyright © 2024 Dawa Khana ltd.</p>
            </div>

        </div>
    )
}
