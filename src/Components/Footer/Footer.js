import React from 'react'
import { Link } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import 'bootstrap/dist/js/bootstrap.js';
import Accordion from 'react-bootstrap/Accordion'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import "swiper/css/navigation";
import { Navigation } from "swiper";
import './Footer.css';

function Footer() {

  const Callto = ({ phone, children }) => {
    return <a href={`tel:${phone}`}>{children}</a>;
  };

  const Mailto = ({ email, subject = '', body = '', children }) => {
    let params = subject || body ? '?' : '';
    if (subject) params += `subject=${encodeURIComponent(subject)}`;
    if (body) params += `${subject ? '&' : ''}body=${encodeURIComponent(body)}`;

    return <a href={`mailto:${email}${params}`}>{children}</a>;
  };

  return (
    <div>
      <footer>
        <div className="footer_con container-fluid p-0">
          <div className='py-114 ps-4 sm:ps-87 md:ps-135 text-white text-left'>
            <h1 className='text-white'>Life is better at #The Marly</h1>
            <p>A five-star showpiece nestled perfectly in the heart of Camps Bay.</p>
            <div>
              <Swiper
                slidesPerView={3.2}
                breakpoints={{
                  0: {
                    slidesPerView: 1.2
                  },
                  768: {
                    slidesPerView: 1.5
                  },
                  992: {
                    slidesPerView: 2.4
                  },
                  1024: {
                    slidesPerView: 3.2
                  }
                }}
                navigation={true}
                modules={[Navigation]}
                spaceBetween={31}
                loop={true}
                className="mySwiper pt-92">
                <SwiperSlide className='swiper'>
                  <div>
                    <img className='w-100' src="../../image/Footer/Life_in_marly_1.jpg" height={394} alt="Life_in_marly" />
                    <a href='https://www.instagram.com/'>
                      <img className='life_insta' src="../../image/Footer/svg/Instagram.svg" alt="Instagram" />
                    </a>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div>
                    <img className='w-100' src="../../image/Footer/Life_in_marly_2.jpg" height={394} alt="Life_in_marly" />
                    <a href='https://www.instagram.com/'>
                      <img className='life_insta' src="../../image/Footer/svg/Instagram.svg" alt="Instagram" />
                    </a>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div>
                    <img className='w-100' src="../../image/Footer/Life_in_marly_3.jpg" height={394} alt="Life_in_marly" />
                    <a href='https://www.instagram.com/'>
                      <img className='life_insta' src="../../image/Footer/svg/Instagram.svg" alt="Instagram" />
                    </a>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div>
                    <img className='w-100' src="../../image/Footer/Life_in_marly_4.jpg" height={394} alt="Life_in_marly" />
                    <a href='https://www.instagram.com/'>
                      <img className='life_insta' src="../../image/Footer/svg/Instagram.svg" alt="Instagram" />
                    </a>
                  </div>
                </SwiperSlide>
              </Swiper>
            </div>
          </div>
        </div>
        <div className="footer_nav">
          <div className="container pt-3">
            <Accordion className='d-flex justify-content-center'>
              <Accordion.Item eventKey="0">
                <Accordion.Header className='d-flex justify-content-center'>
                  <h2 id='' className='font-15 text-center pt-5 text-white m-0 pe-3'>Sign up to our special offers and promotions</h2>
                </Accordion.Header>
                <Accordion.Body>
                  <form action="" className='py-5'>
                    <div className='d-sm-flex justify-content-center pt-4'>
                      <div>
                        <input type="text" required placeholder='Name' className='w-118 footer_form col-12 sm:text-center' />
                      </div>
                      <div className='sm:mx-5'>
                        <input type="text" required placeholder='Surname' className='w-118 footer_form col-12 my-40 sm:text-center' />
                      </div>
                      <div className='sm:me-5'>
                        <input type="email" required placeholder='Email address' className='w-264 footer_form col-12 sm:text-center' />
                      </div>
                      <div className='sm:ms-4'>
                        <input type="submit" value="SIGN UP" className='footer_manu_title rounded-pill footer_form_submit col-12 my-40 mx-60' />
                      </div>
                    </div>
                  </form>
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
            <div className='py-5 mt-1'><hr className='text-light my-1' /></div>
            <div className="row pt-3 md:pb-104">
              <div className="col-md-6 col-12 d-sm-flex">
                <div className="col-md-8 col-sm-8 col-12 sm:center">
                  <div>
                    <Link to="/" exact><img src="../../image/Footer/svg/The Marly Logo.svg" alt="The Marly UI" /></Link>
                  </div>
                  <a href='https://goo.gl/maps/DasxfSfmfTajpijy8'><p id='address' className='mb-1'>The Promenade, 201 Victoria Rd,<br></br> Camps Bay, Cape Town, 8005</p></a>
                  <div>
                    <p className='py-3 m-0 text-light'>Follow us:</p>
                    <div className='d-flex pt-1 sm:content-center'>
                      <div className='me-3'>
                        <a href='https://www.instagram.com/'><img src="../../image/Footer/svg/Instagram.svg" alt="Instagram" /></a>
                      </div>
                      <div>
                        <a href='https://www.facebook.com/'><img src="../../image/Footer/svg/Facebook.svg" alt="Facebook" /></a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-4 col-sm-4 col-12 sm:center md:py-3 pt-5">
                  <ul className='ps-0 text-white'>
                    <li><Link to="/stay" exact>STAY</Link></li>
                    <li><Link to="/spa" exact>SPA</Link></li>
                    <li><Link to="/eat" exact>EAT</Link></li>
                    <li><Link to="/ourstory" exact>OUR STORY</Link></li>
                    <li><Link to="/experiences" exact>Experience</Link></li>
                    <li><Link to="/facilities" exact>Facilities</Link></li>
                  </ul>
                </div>
              </div>
              <div className="col-md-6 col-12 md:pt-5 d-sm-flex">
                <div className="col-md-4 col-sm-4 col-12 sm:center md:py-3 sm:pb-5">
                  <ul className='ps-0 text-white'>
                    <li><Link to="/location" exact>Location</Link></li>
                    <li><Link to="/wantson" exact>What’s On</Link></li>
                    <li><Link to="/promotions" exact>Promotions</Link></li>
                    <li><Link to="/blog" exact>Blog</Link></li>
                    <li><Link to="/gallery" exact>Gallery</Link></li>
                  </ul>
                </div>
                <div className="col-md-8 col-sm-8 col-12 sm:center md:py-3 d-flex justify-content-center sm:pb-5">
                  <div>
                    <div id='contact_us' className='rounded-pill btn mb-4 px-44'>
                      <div className='manu_title py-1 ps-1 text-white'><Link to="/contactus" exact>Contact us</Link></div>
                    </div>
                    <div id='contact_info' className='ms-2 ps-1'>
                      <Callto phone="+27 (0) 21 437 1287"><p className='m-0'>tel: +27 (0) 21 437 1287</p></Callto>
                      <Mailto email="dm@themarly.co.za" subject="Hello & Welcome" body="Hello world!"><p className='m-0'>email: dm@themarly.co.za</p></Mailto>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="footer_con">
          <div className='container'>
            <div className='row'>
              <div className="col-md-6 col-12 sm:content-center py-3">
                <img src="../../image/Footer/svg/The Kove Collection Logo.svg" alt="" />
              </div>
              <div className="col-md-6 col-12 sm:content-center">
                <div id='conditions' className='d-flex justify-content-end py-4 my-1'>
                  <Link to="/termsconditions" exact><p className='pe-3 m-0'>Privacy Policy</p></Link>
                  <Link to="/termsconditions" exact><p className='pe-3 ps-3 m-0'>Terms & Conditions</p></Link>
                  <p className='m-0'>All rights reserved 2022 The Marly</p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </footer>
    </div>
  )
}

export default Footer