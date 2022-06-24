import React, { useState } from 'react';
import Offcanvas from 'react-bootstrap/Offcanvas';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import 'bootstrap/dist/js/bootstrap.js';
import './Header.css';
import OffcanvasOne from '../Offcanvas/OffcanvasOne';
import OffcanvasTwo from '../Offcanvas/OffcanvasTwo';

const Header = ({ isHomeHeader, name, ...props }) => {

  const [show1, setShow1] = useState(false);
  const [show2, setShow2] = useState(false);

  const handleClose1 = () => setShow1(false);
  const handleShow1 = () => setShow1(true);

  const handleShow2 = () => setShow2(true);
  const handleClose2 = () => setShow2(false);

  return (
    <div>
      <header className={`Header w-100 ${isHomeHeader && 'homeHeader'}`}>
        <div className='row d-flex w-100 header_show'>
          <div className='col-lg-4 col-6 lg:order-2'>
            <div className='d-flex nav_manu pt-77 ps-79 lg:content-end'>
              <div variant="primary" onClick={handleShow1} className='border rounded-pill btn my-2 py-2 d-flex'>
                <div className='manu_title ps-1'>MANU</div>
                <div className='manu_btn ms-2 pe-2'>
                  <div className='bar'></div>
                  <div className='bar'></div>
                  <div className='bar'></div>
                </div>
              </div>
              <Offcanvas show={show1} className="w-100 offcanvasone" onHide={handleClose1} {...props}>
                <Offcanvas.Header className='p-0' closeButton>
                </Offcanvas.Header>
                <Offcanvas.Body className='p-0'>
                  <OffcanvasOne />
                </Offcanvas.Body>
              </Offcanvas>
              <div id='hide' className='ms-3'>
                <ul className='d-flex'>
                  <li><Link className='text-white' to="/stay" exact>STAY</Link></li>
                  <li><Link className='text-white' to="/spa" exact>SPA</Link></li>
                  <li><Link className='text-white' to="/eat" exact>EAT</Link></li>
                </ul>
              </div>
            </div>
          </div>
          <div className='col-lg-4 col-6 lg:content-start'>
            <div className='d-flex justify-content-center pt-58 pb-42'>
              <Link to="/" exact><img src="../../image/Header/The Marly Logo.svg"></img></Link>
            </div>
          </div>
          <div id='hide' className='col-lg-4 pt-77 pe-75'>
            <div className='d-flex justify-content-end'>
            <div variant="primary" onClick={handleShow2} placement="bottom" id='contact_us' className='rounded-pill btn manu_title py-2 px-3 text-white'>Make A Booking</div>
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
        </div>
      </header>
    </div>
  );
}

function Example() {
  return (
    <>
      {['end'].map((placement, idx) => (
        <Header key={idx} placement={placement} name={placement} />
      ))}
    </>
  );
}

export default Header;
