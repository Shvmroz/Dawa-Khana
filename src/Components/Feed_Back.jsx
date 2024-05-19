import React from 'react'
import star from '../Images/ss.png'
import user1 from '../Images/user1.png'
import user2 from '../Images/user2.png'
import user3 from '../Images/user3.png'
import user4 from '../Images/user4.png'

export const FeedBack = () => {
    return (
        <div>
            <div className='feed-back mt-4'>
                <h1 className='text-center mb-4 green-clr'>Feedbacks</h1>
                <div className='row'>
                    <div className="col-6 col-sm-6 col-md-6 col-lg-3">
                        <div className="card mb-3">
                            <div className='card-img mb-3'>
                                <img src={user1} className="img-fluid" alt='User'/>
                            </div>
                            <div className="card-body">
                                <h5 className="card-title text-center ">Name</h5>
                                <span className='d-flex justify-content-center mb-3'><img className='img-fluid w-50' src={star} alt="Star" /></span>
                                <div className="card-text text-center "><p>Some quick example text to build on the card title and make up the bulk of the card's content.</p></div>
                            </div>
                        </div>
                    </div>
                    <div className="col-6 col-sm-6 col-md-6 col-lg-3">
                    <div className="card mb-3">
                            <div className='card-img mb-3'>
                                <img src={user2} className="img-fluid" alt='User'/>
                            </div>
                            <div className="card-body">
                                <h5 className="card-title text-center ">Name</h5>
                                <span className='d-flex justify-content-center mb-3'><img className='img-fluid w-50' src={star} alt="Star" /></span>
                                <div className="card-text text-center "><p>Some quick example text to build on the card title and make up the bulk of the card's content.</p></div>
                            </div>
                        </div>
                    </div>
                    <div className="col-6 col-sm-6 col-md-6 col-lg-3">
                    <div className="card mb-3">
                            <div className='card-img mb-3'>
                                <img src={user3} className="img-fluid" alt='User'/>
                            </div>
                            <div className="card-body">
                                <h5 className="card-title text-center ">Name</h5>
                                <span className='d-flex justify-content-center mb-3'><img className='img-fluid w-50' src={star} alt="Star" /></span>
                                <div className="card-text text-center "><p>Some quick example text to build on the card title and make up the bulk of the card's content.</p></div>
                            </div>
                        </div>
                    </div>
                    <div className="col-6 col-sm-6 col-md-6 col-lg-3">
                    <div className="card">
                            <div className='card-img mb-3'>
                                <img src={user4} className="img-fluid" alt='User'/>
                            </div>
                            <div className="card-body">
                                <h5 className="card-title text-center ">Name</h5>
                                <span className='d-flex justify-content-center mb-3'><img className='img-fluid w-50' src={star} alt="Star" /></span>
                                <div className="card-text text-center "><p>Some quick example text to build on the card title and make up the bulk of the card's content.</p></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
