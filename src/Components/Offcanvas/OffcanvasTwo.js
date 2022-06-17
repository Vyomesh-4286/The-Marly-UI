import React from 'react'
import { Link } from 'react-router-dom'
import './OffcanvasOne.css';

const OffcanvasTwo = () => {
    return (
        <div>
            <div id='color-F7F7F7' className="row">
                <div className="col-md-5 col-12 order-2">
                    <div className='d-flex justify-content-end mt-188 me-79 mb-76'>
                        <div className='mw-449'>
                            <div className='d-flex justify-content-end mb-5'>
                                <div>
                                    <h1 className='mb-3'>Direct Booking</h1>
                                    <p className='mt-1 mb-4'>Ready to book your stay at The Marly? Book directly with us for the best rates.</p>
                                    <div className='d-flex justify-content-end' >
                                        <Link to="" exact><div className='border rounded-pill btn manu_title py-2 px-3 text-dark'>MAKE A BOOKING</div></Link>
                                    </div>
                                </div>
                            </div>
                            <hr className='mt-1 mb-4' />
                            <div className='d-flex justify-content-end mt-1'>
                                <div>
                                    <h1 className='mb-3'>Traveller Enquiry</h1>
                                    <p className='mt-1 mb-4'>Not ready to book just yet? Submit an enquiry and our team will be in touch.</p>
                                    <div className='d-flex justify-content-end' >
                                        <Link to="/bookingpage" exact><div className='border rounded-pill btn manu_title py-2 px-3 text-dark'>Make aN Enquiry</div></Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/*  <div className='mt-132 mb-114 ms-87'>
                        <div className='pb-4 pt-3'>
                            <img src="../../image/Header/Offcanvas/svg/Marly_Logo.svg" alt="" />
                        </div>
                        <ul className='p-0 pt-2 mb-69'>
                            <li className='mt-0'>Facilities</li>
                            <li>Location</li>
                            <li>What’s On</li>
                            <li>Promotions</li>
                            <li>Blog</li>
                            <li>Gallery</li>
                            <li>CONTACT</li>
                        </ul>
                        <div className='border rounded-pill btn manu_title py-2 px-3 text-dark'>GET IN TOUCH</div>
                    </div> */}
                </div>
                <div className="col-md-7 col-12 px-0">
                    <img className='w-100 vh-100' src="../../image/Header/Offcanvas/OffcanvasTwo.jpg" alt="" />
                </div>
            </div>
        </div>
    )
}

export default OffcanvasTwo