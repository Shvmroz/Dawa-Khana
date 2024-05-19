import React from 'react'
import Mask from '../Images/maskimg.png'
import banner1 from '../Images/banner1.png'
import banner3 from '../Images/banner3.png'
import { Button } from '@mui/material'
import { useNavigate } from 'react-router-dom'



export const Banner = () => {
    const navigate = useNavigate();

    const handleNavigateShop = () => {
      navigate('/shop');
    };
    return (
        <>
            <div className='banner-section'>
                <div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="carousel">
                    <div className="carousel-indicators">
                        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active " aria-current="true" aria-label="Slide 1"></button>
                        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
                        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>

                    </div>

                    <div className="carousel-inner">
                        <div className="carousel-item active">
                            <div className="row justify-content-center align-items-center ">
                                <div className="col-md-6 col-lg-7">
                                    <div className="container">
                                        <div className='left-text'>
                                            <h1 className='o-clr'>Disposable  <span className='blue-clr'>Face Mask</span></h1>
                                            <hr />
                                            <h2 className="r-clr mb-3 ">
                                                upto 50% off
                                            </h2>
                                            <p className="mb-3">
                                                Single-use masks that cover the mouth and nose and provide varying levels of filtration.
                                            </p>
                                            <Button variant="outlined" onClick={handleNavigateShop}  >More Products</Button>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-6 col-lg-5 d-none d-md-block">
                                    <div className="container right-image">
                                        <img className="img-fluid" src={Mask} alt="" />
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* =============================  */}
                        <div className="carousel-item">
                            <div className="row justify-content-center align-items-center ">
                                <div className="col-md-6 col-lg-7">
                                    <div className="container ">
                                        <div className='left-text'>
                                        <h1 className='r-clr'>Disposable  <span className='green-clr'>Face Mask</span></h1>
                                            <hr />
                                            <h2 className="r-clr mb-3 ">
                                                upto 40% off
                                            </h2>
                                            <p className="mb-3">Single-use masks that cover the mouth and nose and provide varying levels of filtration
                                            </p>
                                            <Button variant="outlined" onClick={handleNavigateShop}  >More Products</Button>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-6 col-lg-5 d-none d-md-block">
                                    <div className="container right-image">
                                        <img className="img-fluid" src={banner1} alt="" />
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* ============================================ */}
                        <div className="carousel-item">
                            <div className="row justify-content-center align-items-center ">
                                <div className="col-md-6 col-lg-7">
                                    <div className="container ">
                                        <div className='left-text'>
                                        <h1 className='green-clr'>Tablets For <span className='o-clr'>Headache</span></h1>
                                            <hr />
                                            <h2 className="r-clr mb-3 ">
                                                upto 30% off
                                            </h2>
                                            <p className="mb-3">Single-use masks that cover the mouth and nose and provide varying levels of filtration
                                            </p>
                                            <Button variant="outlined" onClick={handleNavigateShop}  >More Products</Button>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-6 col-lg-5 d-none d-md-block">
                                    <div className="container right-image">
                                        <img className="img-fluid" src={banner3} alt="" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>



    )
}
