import React from 'react'
import virus from '../Images/virus.png'

export const Covid19 = () => {
    return (
        <div className='covid-19'>
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-sm-12 col-md-5 col-lg-4">
                        <div className="content-part">
                            <div className="left-content">
                                <h1>COVID-19 Tracker</h1>
                                <h4>Total Confirmed Corona Cases</h4>
                                <div className="count-people"><h1>960708</h1></div>
                                <ul>
                                    <li>Active cases <span className='right-float o-clr'>799571</span></li>
                                    <li>Recovered cases <span className='right-float g-clr'>302826</span></li>
                                    <li>Deaths <span className='right-float r-clr'>52558</span></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-12 col-md-7 col-lg-8">
                        <div className="virus-round ">
                            <img className='img-fluid' src={virus} alt="" />
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}
