import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation } from "swiper";
import ReactDOM from 'react-dom';
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'
import { Route, Link, BrowserRouter as Router } from 'react-router-dom'
import Header from '../../Components/Header/Header';
import Footer from '../../Components/Footer/Footer';
import './Homepage.css';
import Zigzagimgright from "../../Components/Zigzagimg/Zigzagimgright";
import Zigzagimgleft from "../../Components/Zigzagimg/Zigzagimgleft";

const Homepage = () => {
  const values = [true];
  const [fullscreen, setFullscreen] = useState(true);
  const [show, setShow] = useState(false);

  function handleShow(breakpoint) {
    setFullscreen(breakpoint);
    setShow(true);
  }
  return (
    <div>
      <Header
        isHomeHeader={true}
      />
      <main>
        <section className='common m-0 img-gradient'>
          <img className="w-100" src="../../image/Home Page/Marly_Home.jpg" alt="" />
          <div className='d-flex justify-content-center'>
            <div className='container sectionhero_content homepage_content'>
              <div className=''>
                <h1 className=''>Discover Cape Town’s most
                  renowned seaside stay  </h1>
              </div>
              <div className='pt-3 d-flex justify-content-center'>
                {values.map((v, idx) => (
                  <Button key={idx} className="me-2 mb-2" onClick={() => handleShow(v)}>
                    <div id='contact_us' className='rounded-pill btn manu_title py-2 px-3 text-white'>WATCH VIDEO</div>
                    {typeof v === 'string' && `below ${v.split('-')[0]}`}
                  </Button>
                ))}
                <Modal show={show} fullscreen={fullscreen} onHide={() => setShow(false)}>
                  <Modal.Header className='p-0' closeButton />
                  <Modal.Body className='p-0'>
                    <video className="w-100 vh-100"src="../../image/Home Page/video/The Marly, Cape Town, South Africa _ Safari365.mp4" autoPlay controls />
                  </Modal.Body>
                </Modal>
              </div>
            </div>
          </div>
        </section>
        <Zigzagimgleft
          image={"../../image/Home Page/Main_SSFR.jpg"}
          title={'Studio Sea Facing Room'}
          descrption={'Named after the 17th Century “Chateau de Marly” which was synomymous with leisure for Louis XIV and his family, The Marly Boutique Hotel continues its reputation of luxury and playfulness in modern-day Cape Town. The beauty of the property is that there is simply no need to leave.'}
          btn1={'DISCOVER OUR STORY'}
        />
        <section className='common'>
          <div id='color-FAF8F4' className='row'>
            <div className="col-md-5 col-12 order-1 md:py-3 d-flex justify-content-center">
              <div className='my-auto mw-417'>
                <h1 className='pb-4 m-0 home_h1'>The most celebrated boutique hotel in Camps Bay</h1>
                <p className='pb-4 m-0 home_p'>Elevated above the vibrant Camps Bay Beach strip, The Marly Boutique Hotel and Spa offers guests an urban hideaway that celebrates sophisticated design, beachfront living and five-star service. Set the tone of your stay with a sea-facing or mountain-facing suite and experience the essence of the Mother City.</p>
                <div className='pt-4'>
                  <Link to="/" exact><div className='border rounded-pill btn manu_title py-2 px-3 text-dark'>DISCOVER OUR STORY</div></Link>
                </div>
              </div>
            </div>
            <div className="col-md-7 col-12 order-2">
              <div className='my-136'>
                <Swiper slidesPerView={1.8} navigation={true} modules={[Navigation]} spaceBetween={62} loop={true} className="mySwiper ps-61">
                  <SwiperSlide>
                    <div>
                      <img className='mb-3 w-100' src="../../image/Home Page/Main_Slider_1_SSF.jpg" height="489px" alt="Studio Sea Facing" />
                      <h4 className='mt-3'>Studio Sea Facing</h4>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div>
                      <img className='mb-3 w-100' src="../../image/Home Page/Main_Slider_1_CSF.jpg" height="489px" alt="Classic Sea Facing" />
                      <h4 className='mt-3'>Classic Sea Facing</h4>
                    </div>
                  </SwiperSlide>
                </Swiper>
              </div>
            </div>
          </div>
        </section>
        <Zigzagimgleft
          image={"../../image/Home Page/Main_BTMS.jpg"}
          title={'Bask in luxury at The Marly Spa'}
          descrption={'Step inside a world of calm at The Marly Spa with a selection of artisan massages and beauty therapies to choose from. Elegantly curated, the spa features 4 treatment rooms, nail stations and tranquil spaces for private meditation.'}
          btn1={'Explore Our spa'}
        />
        <section className='common'>
          <div id='color-E5E5E5' className='row'>
            <div className="col-sm-12 pt-100">
              <h1 className='mb-70 d-flex justify-content-center text-center'>Ultimate beachside luxury</h1>
              <div className='carousel-padding cp main_swiper'>
                <Swiper
                  pagination={{
                    type: "fraction",
                    formatFractionCurrent: function (number) {
                      return ('' + number + ' ' + '_' + '_' + '_' + '_' + '_').slice(-8);
                    },
                    formatFractionTotal: function (number) {
                      return ('' + ' ' + number).slice(-3);
                    },
                    renderFraction: function (currentClass, totalClass) {
                      return '<span class="' + currentClass + '"></span>' +
                        '' +
                        '<span class="' + totalClass + '"></span>';
                    }
                  }}
                  navigation={true}
                  modules={[Navigation, Pagination]} className="singleSlider"
                >
                  <SwiperSlide>
                    <img className="d-block w-100" src="../../image/Home Page/Main_Slider_2.jpg" alt="First slide" />
                    <div className='d-flex mt-49 ms-168'>
                      <p className='m-0'>Discover our magnificant rooftop pool</p>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <img className="d-block w-100" src="../../image/Home Page/Main_Slider_2.jpg" alt="First slide" />
                    <div className='d-flex mt-49 ms-168'>
                      <p className='m-0'>Discover our magnificant rooftop pool</p>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <img className="d-block w-100" src="../../image/Home Page/Main_Slider_2.jpg" alt="First slide" />
                    <div className='d-flex mt-49 ms-168'>
                      <p className='m-0'>Discover our magnificant rooftop pool</p>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <img className="d-block w-100" src="../../image/Home Page/Main_Slider_2.jpg" alt="First slide" />
                    <div className='d-flex mt-49 ms-168'>
                      <p className='m-0'>Discover our magnificant rooftop pool</p>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <img className="d-block w-100" src="../../image/Home Page/Main_Slider_2.jpg" alt="First slide" />
                    <div className='d-flex mt-49 ms-168'>
                      <p className='m-0'>Discover our magnificant rooftop pool</p>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <img className="d-block w-100" src="../../image/Home Page/Main_Slider_2.jpg" alt="First slide" />
                    <div className='d-flex mt-49 ms-168'>
                      <p className='m-0'>Discover our magnificant rooftop pool</p>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <img className="d-block w-100" src="../../image/Home Page/Main_Slider_2.jpg" alt="First slide" />
                    <div className='d-flex mt-49 ms-168'>
                      <p className='m-0'>Discover our magnificant rooftop pool</p>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <img className="d-block w-100" src="../../image/Home Page/Main_Slider_2.jpg" alt="First slide" />
                    <div className='d-flex mt-49 ms-168'>
                      <p className='m-0'>Discover our magnificant rooftop pool</p>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <img className="d-block w-100" src="../../image/Home Page/Main_Slider_2.jpg" alt="First slide" />
                    <div className='d-flex mt-49 ms-168'>
                      <p className='m-0'>Discover our magnificant rooftop pool</p>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <img className="d-block w-100" src="../../image/Home Page/Main_Slider_2.jpg" alt="First slide" />
                    <div className='d-flex mt-49 ms-168'>
                      <p className='m-0'>Discover our magnificant rooftop pool</p>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <img className="d-block w-100" src="../../image/Home Page/Main_Slider_2.jpg" alt="First slide" />
                    <div className='d-flex mt-49 ms-168'>
                      <p className='m-0'>Discover our magnificant rooftop pool</p>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <img className="d-block w-100" src="../../image/Home Page/Main_Slider_2.jpg" alt="First slide" />
                    <div className='d-flex mt-49 ms-168'>
                      <p className='m-0'>Discover our magnificant rooftop pool</p>
                    </div>
                  </SwiperSlide>
                </Swiper>
              </div>
            </div>
          </div>
        </section>
        <div className="mb-200">
          <Zigzagimgright
            image={"../../image/Home Page/Main_TCT.jpg"}
            title={'Taste your way through Cape Town'}
            descrption={'Be spoilt for choice with our collection of restaurants, cafés and bars on The Marly’s doorstep. Curate your food journey to your liking - from fine-dining at Bilboa and cocktails at Chinchilla, to breakfast at La Belle Bistro and elegant dining at Paranga, the table is yours.'}
            btn1={'EXPLORE OUR RESTAURANTS'}
          />
        </div>
      </main>
      <Footer />
    </div >
  )
}

export default Homepage