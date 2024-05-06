import React from 'react'
import AboutImage from '../Images/about-img.jpg'


export const AboutSection = () => {
    return (
        <div>
            <div className="about-section">
                <div className="row">

                    <div className="col=sm-12 col-md-12 col-lg-6">
                        <img className='img-fluid w-100 h-100 ' src={AboutImage} alt="" />
                    </div>
                    <div className="col-sm-12 col-md-12 col-lg-6">
                        <div className="about-text align-content-center">
                            <div className='how-to-order mb-3 p-3'>
                                <h2 className='w-75 mb-3 green-clr'>
                                    How to order medicines on
                                    Dawa Khana? It's Simple. .
                                </h2>
                                <ul>
                                    <li><i class="fa-solid fa-1" style={{color: '#4BD7B8', marginRight:'15px'}}></i>Upload valid Prescription</li>
                                    <li> <i class="fa-solid fa-2" style={{color: '#E18CC8',marginRight:'15px'}}></i>Receive a confirmation call</li>
                                    <li><i class="fa-solid fa-3" style={{color: '#FF500C',marginRight:'15px'}}></i>Delivery at your door step</li>
                                </ul>
                            </div>
                            <div className='p-3'>
                                <h2 className='blue-clr w-75 mb-3'>Don't have a Prescription? Don't worry!</h2>
                                <span className='mb-3'><i class="fa-solid fa-qrcode"  style={{color: '#9014FE',marginRight:'15px'}}></i> Simply search & add the medicines OR get a consultation from
                                    a Dawa khana doctor</span>
                                <span className='read-more'> Read more</span>
                            </div>
                            <div className='about-box '>
                                <div className='row'>
                                    <div className="col-sm-12 col-md-6">
                                        <div className='box-one'>
                                            <h5>1000+</h5>
                                            <p>Happy Customers</p>
                                        </div>
                                    </div>
                                    <div className="col-sm-12 col-md-6">
                                        <div className='box-two '>
                                            <h5>213+</h5>
                                            <p>Catagories</p>
                                        </div>
                                    </div>
                                </div>
                                <div className='row'>
                                    <div className="col-sm-12 col-md-6">
                                        <div className='box-three'>
                                            <h5>315+</h5>
                                            <p>Expert Doctors</p>
                                        </div>
                                    </div>
                                    <div className="col-sm-12 col-md-6">
                                        <div className='box-four '>
                                            <h5>102+</h5>
                                            <p>Award Winner</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}
