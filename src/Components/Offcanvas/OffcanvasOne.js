import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';
import CloseButton from 'react-bootstrap/CloseButton';
import { Link } from 'react-router-dom'
import './OffcanvasOne.css';
import OffcanvasTwo from './OffcanvasTwo';

const OffcanvasOne = ({ name, ...props }) => {

  const [show2, setShow] = useState(false);

  const handleShow2 = () => setShow(true);
  const handleClose2 = () => setShow(false);

  return (
    <div id='color-F7F7F7'>
      <section className='common mt-0'>
        <div className="row">
          <div className="col-md-5 col-12">
            <div className='content_spacing'>
              <div className='md:mb-5 md:pb-4 mb-5 pb-3 show_img'>
                <Link to="/" exact><img src="../../image/Header/Offcanvas/svg/Marly_Logo.svg" alt="" /></Link>
              </div>
              <ul className='p-0 show_link'>
                <li><Link className='text-dark' to="/stay" exact>Stay</Link></li>
                <li><Link className='text-dark mx-5' to="/spa" exact>Spa</Link></li>
                <li><Link className='text-dark' to="/eat" exact>Eat</Link></li>
              </ul>
              <ul className='p-0 md:mb-5 md:pb-4 mb-5 pb-3 md:text-center'>
                <li className='show_link'><Link to="/ourstory" exact>Our Story</Link></li>
                <li><Link to="/facilities" exact>Facilities</Link></li>
                <li><Link to="/experiences" exact>Experiences</Link></li>
                <li><Link to="/location" exact>Location</Link></li>
                <li><Link to="/wantson" exact>What’s On</Link></li>
                <li><Link to="/promotions" exact>Offers</Link></li>
                <li><Link to="/blog" exact>Blog</Link></li>
                <li><Link to="/gallery" exact>Gallery</Link></li>
                <li><Link to="/contactus" exact>CONTACT</Link></li>
              </ul>
              <div className='show_link mb-5 pb-1'>
                <div variant="primary" onClick={handleShow2} placement="bottom" className='bg-secondary bg-opacity-25 border rounded-pill btn manu_title py-2 px-3 text-dark'>Make A Booking</div>
                <Offcanvas show={show2} className="w-100 offcanvastwo" onHide={handleClose2} {...props}>
                  <Offcanvas.Header className='p-0' closeButton>
                    <Button id="close_btn" className='rounded-pill btn manu_title py-2 px-3 text-dark me-1' data-bs-dismiss="offcanvas" aria-label="Close">Back</Button>
                  </Offcanvas.Header>
                  <Offcanvas.Body className='p-0'>
                    <OffcanvasTwo />
                  </Offcanvas.Body>
                </Offcanvas>
              </div>
              <div className='hide_nav'>
                <Link to="/contactus" exact><div className='border rounded-pill btn manu_title py-2 px-3 mb-2 text-dark'>GET IN TOUCH</div></Link>
              </div>
            </div>
          </div>
          <div className="hide_nav position-relative col-md-7 col-12 bg_offcancastwo justify-content-center align-content-center flex-wrap">
            <ul className='p-0 nav_menu_offcanvas_positon'>
              <li className='mt-0'><Link to="/stay" exact>Stay</Link></li>
              <li><Link to="/spa" exact>Spa</Link></li>
              <li><Link to="/eat" exact>Eat</Link></li>
              <li><Link to="/ourstory" exact>Our Story</Link></li>
            </ul>
            <div variant="primary" onClick={handleShow2} placement="bottom" id='contact_us' className='offcanvas_booking_btn rounded-pill btn manu_title py-2 px-3 text-white'>Make A Booking</div>
            <Offcanvas show={show2} className="w-100 offcanvastwo" onHide={handleClose2} {...props}>
              <Offcanvas.Header className='p-0' closeButton>
                <Button id="close_btn" className='rounded-pill btn manu_title py-2 px-3 text-dark me-1' data-bs-dismiss="offcanvas" aria-label="Close">Back</Button>
              </Offcanvas.Header>
              <Offcanvas.Body className='p-0'>
                <OffcanvasTwo />
              </Offcanvas.Body>
            </Offcanvas>
          </div>
        </div>
      </section>
    </div>
  )
}

export default OffcanvasOne