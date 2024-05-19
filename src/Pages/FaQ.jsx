import React from 'react';
import { ThemeProvider, createTheme, responsiveFontSizes } from '@mui/material/styles';
import { Typography } from '@mui/material';
import heart from '../Images/3227422.jpg'

const FaQ = () => {

    let theme = createTheme();
    theme = responsiveFontSizes(theme);

    return (
        <section className='faq'>
            <div className="container">
                <div className="row justify-content-center">
                    <div className="text-center mt-5 r-clr">
                        <ThemeProvider theme={theme}>
                            <Typography variant='h3' fontWeight="bold">
                                Frequently Asked Questions
                            </Typography>
                        </ThemeProvider>
                    </div>
                    <div>
                        <img className='img-fluid w-75 d-flex m-auto' src={heart} alt="heart" />
                    </div>
                    <div className="col-sm-12 col-md-10">
                        <div className="accordion" id="accordionExample">
                            <div className="accordion-item mt-5">
                                <h2 className="accordion-header" id="headingOne">
                                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="false" aria-controls="collapseOne">
                                        Question No. 1
                                    </button>
                                </h2>
                                <div id="collapseOne" className="accordion-collapse collapse" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                                    <div className="accordion-body bg-light">
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla recusandae aut laboriosam dolores voluptas optio consectetur nemo, et omnis mollitia eius molestiae vero fuga perspiciatis modi suscipit dolorum dolore nisi?
                                    </div>
                                </div>
                            </div>

                            <div className="accordion-item mt-3">
                                <h2 className="accordion-header" id="headingTwo">
                                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                        Question No. 2
                                    </button>
                                </h2>
                                <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                                    <div className="accordion-body bg-light">
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla recusandae aut laboriosam dolores voluptas optio consectetur nemo, et omnis mollitia eius molestiae vero fuga perspiciatis modi suscipit dolorum dolore nisi?
                                    </div>
                                </div>
                            </div>

                            <div className="accordion-item mt-3">
                                <h2 className="accordion-header" id="headingThree">
                                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                        Question No. 3
                                    </button>
                                </h2>
                                <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                                    <div className="accordion-body bg-light">
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla recusandae aut laboriosam dolores voluptas optio consectetur nemo, et omnis mollitia eius molestiae vero fuga perspiciatis modi suscipit dolorum dolore nisi?
                                    </div>
                                </div>
                            </div>

                            <div className="accordion-item mt-3">
                                <h2 className="accordion-header" id="headingFour">
                                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
                                        Question No. 4
                                    </button>
                                </h2>
                                <div id="collapseFour" className="accordion-collapse collapse" aria-labelledby="headingFour" data-bs-parent="#accordionExample">
                                    <div className="accordion-body bg-light">
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla recusandae aut laboriosam dolores voluptas optio consectetur nemo, et omnis mollitia eius molestiae vero fuga perspiciatis modi suscipit dolorum dolore nisi?
                                    </div>
                                </div>
                            </div>

                            <div className="accordion-item mt-3">
                                <h2 className="accordion-header" id="headingFive">
                                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFive" aria-expanded="false" aria-controls="collapseFive">
                                        Question No. 5
                                    </button>
                                </h2>
                                <div id="collapseFive" className="accordion-collapse collapse" aria-labelledby="headingFive" data-bs-parent="#accordionExample">
                                    <div className="accordion-body bg-light">
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla recusandae aut laboriosam dolores voluptas optio consectetur nemo, et omnis mollitia eius molestiae vero fuga perspiciatis modi suscipit dolorum dolore nisi?
                                    </div>
                                </div>
                            </div>

                            <div className="accordion-item mt-3">
                                <h2 className="accordion-header" id="headingSix">
                                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseSix" aria-expanded="false" aria-controls="collapseSix">
                                        Question No. 6
                                    </button>
                                </h2>
                                <div id="collapseSix" className="accordion-collapse collapse" aria-labelledby="headingSix" data-bs-parent="#accordionExample">
                                    <div className="accordion-body bg-light">
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla recusandae aut laboriosam dolores voluptas optio consectetur nemo, et omnis mollitia eius molestiae vero fuga perspiciatis modi suscipit dolorum dolore nisi?
                                    </div>
                                </div>
                            </div>

                            <div className="accordion-item mt-3">
                                <h2 className="accordion-header" id="headingSeven">
                                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseSeven" aria-expanded="false" aria-controls="collapseSeven">
                                        Question No. 7
                                    </button>
                                </h2>
                                <div id="collapseSeven" className="accordion-collapse collapse" aria-labelledby="headingSeven" data-bs-parent="#accordionExample">
                                    <div className="accordion-body bg-light">
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla recusandae aut laboriosam dolores voluptas optio consectetur nemo, et omnis mollitia eius molestiae vero fuga perspiciatis modi suscipit dolorum dolore nisi?
                                    </div>
                                </div>
                            </div>

                            <div className="accordion-item mt-3">
                                <h2 className="accordion-header" id="headingEight">
                                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseEight" aria-expanded="false" aria-controls="collapseEight">
                                        Question No. 8
                                    </button>
                                </h2>
                                <div id="collapseEight" className="accordion-collapse collapse" aria-labelledby="headingEight" data-bs-parent="#accordionExample">
                                    <div className="accordion-body bg-light">
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla recusandae aut laboriosam dolores voluptas optio consectetur nemo, et omnis mollitia eius molestiae vero fuga perspiciatis modi suscipit dolorum dolore nisi?
                                    </div>
                                </div>
                            </div>

                            <div className="accordion-item mt-3">
                                <h2 className="accordion-header" id="headingNine">
                                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseNine" aria-expanded="false" aria-controls="collapseNine">
                                        Question No. 9
                                    </button>
                                </h2>
                                <div id="collapseNine" className="accordion-collapse collapse" aria-labelledby="headingNine" data-bs-parent="#accordionExample">
                                    <div className="accordion-body bg-light">
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla recusandae aut laboriosam dolores voluptas optio consectetur nemo, et omnis mollitia eius molestiae vero fuga perspiciatis modi suscipit dolorum dolore nisi?
                                    </div>
                                </div>
                            </div>

                            <div className="accordion-item mt-3 mb-5">
                                <h2 className="accordion-header" id="headingTen">
                                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTen" aria-expanded="false" aria-controls="collapseTen">
                                        Question No. 10
                                    </button>
                                </h2>
                                <div id="collapseTen" className="accordion-collapse collapse" aria-labelledby="headingTen" data-bs-parent="#accordionExample">
                                    <div className="accordion-body bg-light">
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla recusandae aut laboriosam dolores voluptas optio consectetur nemo, et omnis mollitia eius molestiae vero fuga perspiciatis modi suscipit dolorum dolore nisi?
                                    </div>
                                </div>
                            </div>

                         
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default FaQ;
