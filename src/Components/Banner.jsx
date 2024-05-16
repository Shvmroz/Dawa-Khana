import React from 'react'
import banner1 from '../Images/banner1.png'
import banner2 from '../Images/banner2.png'
import banner3 from '../Images/banner3.png'


export const Banner = () => {
    return (
        <>
            <div className='banner-section'>
                <div id="carouselExampleCaptions" class="carousel slide" data-bs-ride="carousel">
                    <div class="carousel-indicators">
                        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active " aria-current="true" aria-label="Slide 1"></button>
                        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
                        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>

                    </div>

                    <div class="carousel-inner">
                        <div class="carousel-item active">
                            <div className="row justify-content-center align-items-center ">
                                <div className="col-md-6 col-lg-7">
                                    <div className="container ">
                                        <div className='left-text'>
                                            <h1 className='o-clr'>We are here for you</h1>
                                            <hr />
                                            <h2 className="green-clr mb-3 w-75 ">
                                                What Makes Us Better,
                                                <span className='blue-clr'> Makes You Better.</span>
                                            </h2>
                                            <p className="mb-3">Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                            </p>
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
                        {/* =============================  */}
                        <div class="carousel-item">
                            <div className="row justify-content-center align-items-center ">
                                <div className="col-md-6 col-lg-7">
                                    <div className="container ">
                                        <div className='left-text'>
                                            <h1 className='g-clr'>We are here for you</h1>
                                            <hr />
                                            <h2 className="green-clr mb-3 w-75 ">
                                                What Makes Us Better,
                                                <span className='blue-clr'> Makes You Better.</span>
                                            </h2>
                                            <p className="mb-3">Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-6 col-lg-5 d-none d-md-block">
                                    <div className="container right-image">
                                        <img className="img-fluid" src={banner2} alt="" />
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* ============================================ */}
                        <div class="carousel-item">
                            <div className="row justify-content-center align-items-center ">
                                <div className="col-md-6 col-lg-7">
                                    <div className="container ">
                                        <div className='left-text'>
                                            <h1 className='r-clr'>We are here for you</h1>
                                            <hr />
                                            <h2 className="green-clr mb-3 w-75 ">
                                                What Makes Us Better,
                                                <span className='blue-clr'> Makes You Better.</span>
                                            </h2>
                                            <p className="mb-3">Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                            </p>
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
