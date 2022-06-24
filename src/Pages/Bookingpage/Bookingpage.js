import React from 'react'
import { Link } from 'react-router-dom'
import ProgressBar from 'react-bootstrap/ProgressBar'
import BookingForm from '../BookingForm/BookingForm';
import './Bookingpage.css'

const Bookingpage = () => {
  return (
    <div>
      <main>
        <div className="row position-relative">
          <div className="col-12 d-flex">
            <div className="hide_nav col-lg-4">
              <img className='w-100 vh-100' src="../../image/Booking Page/Marly_Booking.jpg" height={850} alt="" />
            </div>
            <div className="col-lg-8 col-12 py-77 px-66 booking">
              <div className='d-flex mb-1'>
                <h1 id='form_heading' className='col-6 m-0'>Traveller Enquiry</h1>
                <div className="col-6 d-flex justify-content-end">
                  <Link to="/" exact><img className='' src="../../image/Booking Page/Marly_Logo.svg" alt="" /></Link>
                </div>
              </div>
              <BookingForm />
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}

export default Bookingpage