import React, { useState } from 'react';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { Link } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import 'bootstrap/dist/js/bootstrap.js';
import './Header.css';
import OffcanvasOne from '../Offcanvas/OffcanvasOne';

const Header = ({ isHomeHeader, name, ...props }) => {

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div>
      <header className={`Header w-100 ${isHomeHeader && 'homeHeader'}`}>
        <div className='row d-flex w-100 header_show'>
          <div className='col-lg-4 col-6'>
            <div className='d-flex nav_manu pt-77 ps-79'>
              <div variant="primary" onClick={handleShow} className='border rounded-pill btn my-2 py-2 d-flex'>
                <div className='manu_title ps-1'>MANU</div>
                <div className='manu_btn ms-2 pe-2'>
                  <div className='bar'></div>
                  <div className='bar'></div>
                  <div className='bar'></div>
                </div>
              </div>
              <Offcanvas show={show} className="w-100 offcanvasone" onHide={handleClose} {...props}>
                <Offcanvas.Header className='p-0' closeButton>
                </Offcanvas.Header>
                <Offcanvas.Body className='p-0'>
                  <OffcanvasOne />
                </Offcanvas.Body>
              </Offcanvas>
              <div className='ms-3'>
                <ul className='d-flex'>
                  <li><Link className='text-white' to="/stay" exact>STAY</Link></li>
                  <li><Link className='text-white' to="/spa" exact>SPA</Link></li>
                  <li><Link className='text-white' to="/eat" exact>EAT</Link></li>
                </ul>
              </div>
            </div>
          </div>
          <div className='col-lg-4 col-6'>
            <div className='d-flex justify-content-center pt-58 pb-42'>
              <Link to="/" exact><img src="../../image/Header/The Marly Logo.svg"></img></Link>
            </div>
          </div>
          <div id='hide' className='col-lg-4 pt-77 pe-75'>
            <div className='d-flex justify-content-end'>
              <Link to="/bookingpage" exact><div id='contact_us' className='rounded-pill btn manu_title py-2 px-3 text-white'>MAKE A BOOKING</div></Link>
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
