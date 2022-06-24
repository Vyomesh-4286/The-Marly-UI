import React from 'react'
import { Link } from 'react-router-dom'
import './OffcanvasOne.css';

const OffcanvasTwo = () => {
    return (
        <div id='color-F7F7F7'>
            <section className='common mt-0'>
                <div className="row">
                    <div className="col-md-5 col-12 md:order-2">
                        <div className='d-flex justify-content-end mt-188 me-55 mb-76'>
                            <div className='w-100'>
                                <div className='d-flex justify-content-end mb-5'>
                                    <div className='content'>
                                        <h1 className='mb-3'>Direct Booking</h1>
                                        <p className='mt-1 mb-4 md:mw-449'>Ready to book your stay at The Marly? Book directly with us for the best rates.</p>
                                        <div className='d-flex justify-content-end' >
                                            <Link to="#" exact><div className='border rounded-pill btn manu_title py-2 px-3 text-dark'>MAKE A BOOKING</div></Link>
                                        </div>
                                    </div>
                                </div>
                                <hr className='mt-1 mb-4 ms-2' />
                                <div className='d-flex justify-content-end mt-1'>
                                    <div className='content'>
                                        <h1 className='mb-3'>Traveller Enquiry</h1>
                                        <p className='mt-1 mb-4'>Not ready to book just yet? Submit an enquiry and our team will be in touch.</p>
                                        <div className='d-flex justify-content-end' >
                                            <Link to="/bookingpage" exact><div className='border rounded-pill btn manu_title py-2 px-3 text-dark'>Make aN Enquiry</div></Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="hide_nav col-md-7 col-12">
                        <img className='w-100 vh-100' src="../../image/Header/Offcanvas/OffcanvasTwo.jpg" alt="" />
                    </div>
                </div>
            </section>
        </div>
    )
}

export default OffcanvasTwo