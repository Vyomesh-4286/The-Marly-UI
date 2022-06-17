import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';
import CloseButton from 'react-bootstrap/CloseButton';
import { Link } from 'react-router-dom'
import './OffcanvasOne.css';
import OffcanvasTwo from './OffcanvasTwo';

const OffcanvasOne = ({ name, ...props }) => {

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div>
      <div id='color-F7F7F7' className="row">
        <div className="col-md-5 col-12">
          <div className='mt-132 mb-114 ms-87'>
            <div className='pb-4 pt-3'>
              <Link to="/" exact><img src="../../image/Header/Offcanvas/svg/Marly_Logo.svg" alt="" /></Link>
            </div>
            <ul className='p-0 pt-2 mb-69'>
              <Link to="/facilities" exact><li className='mt-0'>Facilities</li></Link>
              <Link to="/location" exact><li>Location</li></Link>
              <Link to="/wantson" exact><li>What’s On</li></Link>
              <Link to="/promotions" exact><li>Promotions</li></Link>
              <Link to="/blog" exact><li>Blog</li></Link>
              <Link to="/gallery" exact><li>Gallery</li></Link>
              <Link to="/contactus" exact><li>CONTACT</li></Link>
            </ul>
            <div variant="primary" onClick={handleShow} placement="bottom" className='border rounded-pill btn manu_title py-2 px-3 text-dark'>GET IN TOUCH</div>
            <Offcanvas show={show} className="w-100 offcanvastwo" onHide={handleClose} {...props}>
              <Offcanvas.Header className='p-0' closeButton>
                <Button id="close_btn" className='rounded-pill btn manu_title py-2 px-3 text-dark me-1' data-bs-dismiss="offcanvas" aria-label="Close">Back</Button>
              </Offcanvas.Header>
              <Offcanvas.Body className='p-0'>
                <OffcanvasTwo />
              </Offcanvas.Body>
            </Offcanvas>
          </div>
        </div>
        <div className="col-md-7 col-12 px-0">
          <img className='w-100 vh-100' src="../../image/Header/Offcanvas/OffcanvasOne.jpg" alt="" />
          <Link to="/bookingpage" exact><div id='contact_us' className='offcanvas_booking_btn rounded-pill btn manu_title py-2 px-3 text-white'>Make A Booking</div></Link>
        </div>
      </div>
    </div>
  )
}

export default OffcanvasOne