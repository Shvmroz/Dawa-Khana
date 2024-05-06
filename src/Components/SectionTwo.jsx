import React from 'react'

export const Catagories = () => {
    return (

        <section className="section-two">
            <div className="container">
                <div className="row">
                    <div className=" col-sm-6 col-md-3 col-lg-3 ">
                        <ul className="boxes d-flex justify-content-center text-center p-3">
                            <li>
                                <div className='boxes-icon'>
                                    <i class="fa-solid fa-truck-fast"></i>
                                </div>
                                <div className='boxes-text'>
                                    <h6> Free Delivery</h6>
                                    <p>For all orders over $120</p>
                                </div>
                            </li >
                        </ul>
                    </div>
                    <div className=" col-sm-6 col-md-3 col-lg-3  ">
                        <ul className="boxes d-flex justify-content-center text-center p-3">
                            <li>
                                <div className='boxes-icon'>
                                    <i class="fa-solid fa-credit-card"></i>
                                </div>
                                <div className='boxes-text'>
                                    <h6>Safe Payment</h6>
                                    <p>100% secure payment</p>
                                </div>
                            </li>
                        </ul>
                    </div>
                    <div className=" col-sm-6 col-md-3 col-lg-3 ">
                        <ul className="boxes d-flex justify-content-center text-center p-3">
                            <li >
                                <div className='boxes-icon'>
                                    <i class="fa-solid fa-hand-holding-dollar"></i>
                                </div>
                                <div className='boxes-text'>
                                    <h6>Shop With Confidence</h6>
                                    <p>If goods have problems</p>
                                </div>
                            </li>
                        </ul>
                    </div>
                    <div className=" col-sm-6 col-md-3 col-lg-3 ">
                        <ul className="boxes d-flex justify-content-center text-center p-3 ">

                            <li>
                                <div className='boxes-icon'>
                                    <i class="fa-solid fa-handshake-angle"></i>
                                </div>
                                <div className='boxes-text'>
                                    <h6>24/7 Help Center</h6>
                                    <p>Dedicated 24/7 support</p>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>


    )
}
