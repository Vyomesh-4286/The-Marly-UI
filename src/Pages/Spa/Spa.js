import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation } from "swiper";
import { Link } from 'react-router-dom'
import Accordion from 'react-bootstrap/Accordion'
import Footer from '../../Components/Footer/Footer'
import Header from '../../Components/Header/Header'
import Best_of_Marly from '../../Components/Best_of_Marly/Best_of_Marly'
import './Spa.css';
import Zifzagleft from "../../Components/Zigzag/Zifzagleft";
import SectionHero from "../../Components/SectionHero/SectionHero";
import Zigzagimgleft from "../../Components/Zigzagimg/Zigzagimgleft";
import Carousel from 'react-bootstrap/Carousel';

const Spa = () => {

  const [total, setTotal] = useState();
  const [total_1, setTotal_1] = useState();
  return (
    <div>
      <Header />
      <main>
        <SectionHero
          image={"../../image/Spa Page/Marly_Spa.jpg"}
          title={'Relax at the Marly Spa'}
          descrption={"Escape the bustling city and reset your body and mind at The Marly Spa in style."}
        />
        <Zigzagimgleft
          title={'Classic Sea Facing Room'}
          descrption={"Enjoy the comfort of our 35m² Classic Sea Facing Room featuring a spacious bedroom with lounge area, en-suite bathroom and a 10m² balcony with sea views. Equipped with Smart TV, Marshall speaker, Nespresso coffee machine and minibar."}
          btn1={'Explore'}
          isSectionBtn={true}
          btn2={'Book Your Stay'}
          image={"../../image/Spa Page/Marly_Spa_1.jpg"}
          isOrder={true}
        />
        <Zifzagleft
          image={"../../image/Spa Page/Marly_Spa_2.jpg"}
          title={'Junior Sea Facing Suite'}
          descrption={"The Junior Sea Facing Suite of 45m² features a bedroom with a separate lounge area, an en-suite bathroom with a large rain shower and a 20m² balcony with sun loungers and expansive sea views. All suites feature a Smart TV, Marshall speaker, Nespresso coffee machine and minibar."}
          btn1={'Explore'}
          btn2={'Book Your Stay'}
        />
        <section className='common'>
          <div className='row'>
            <div className="col-sm-12 pt-100">
              <h1 className='mb-70 d-flex justify-content-center text-center'>Your sanctuary for self-care and wellbeing</h1>
              <div className='carousel-padding  main_swiper'>
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
                    <img className="d-block w-100" src="../../image/Spa Page/Marly_Spa_Slider_1.jpg" alt="First slide" />
                    <div className='d-flex mt-49 ms-168'>
                      <p className='m-0'>Experience our age defying manicure</p>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <img className="d-block w-100" src="../../image/Spa Page/Marly_Spa_Slider_1.jpg" alt="First slide" />
                    <div className='d-flex mt-49 ms-168'>
                      <p className='m-0'>Experience our age defying manicure</p>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <img className="d-block w-100" src="../../image/Spa Page/Marly_Spa_Slider_1.jpg" alt="First slide" />
                    <div className='d-flex mt-49 ms-168'>
                      <p className='m-0'>Experience our age defying manicure</p>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <img className="d-block w-100" src="../../image/Spa Page/Marly_Spa_Slider_1.jpg" alt="First slide" />
                    <div className='d-flex mt-49 ms-168'>
                      <p className='m-0'>Experience our age defying manicure</p>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <img className="d-block w-100" src="../../image/Spa Page/Marly_Spa_Slider_1.jpg" alt="First slide" />
                    <div className='d-flex mt-49 ms-168'>
                      <p className='m-0'>Experience our age defying manicure</p>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <img className="d-block w-100" src="../../image/Spa Page/Marly_Spa_Slider_1.jpg" alt="First slide" />
                    <div className='d-flex mt-49 ms-168'>
                      <p className='m-0'>Experience our AGE DEFYING MANICURE</p>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <img className="d-block w-100" src="../../image/Spa Page/Marly_Spa_Slider_1.jpg" alt="First slide" />
                    <div className='d-flex mt-49 ms-168'>
                      <p className='m-0'>Experience our age defying manicure</p>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <img className="d-block w-100" src="../../image/Spa Page/Marly_Spa_Slider_1.jpg" alt="First slide" />
                    <div className='d-flex mt-49 ms-168'>
                      <p className='m-0'>Experience our age defying manicure</p>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <img className="d-block w-100" src="../../image/Spa Page/Marly_Spa_Slider_1.jpg" alt="First slide" />
                    <div className='d-flex mt-49 ms-168'>
                      <p className='m-0'>Experience our age defying manicure</p>
                    </div>
                  </SwiperSlide>
                </Swiper>
              </div>
            </div>
            <div className='carousel-padding py-3 my-5'>
              <Carousel id='color-FAF8F4' class="carousel pt-72 pb-72">
                <Carousel.Item className="pb-38 pe-200">
                  <div className='d-flex justify-content-end text-right'>
                    <div className='mw-770'>
                      <h4>Hands down one of the best massages I’ve had, Zanele is a miracle worker. A must for anyone looking to relax in Camps Bay!</h4>
                      <p>-Elana Botha</p>
                    </div>
                  </div>
                </Carousel.Item>
                <Carousel.Item className="pb-38 pe-200">
                  <div className='d-flex justify-content-end text-right'>
                    <div className='mw-770'>
                      <h4>Hands down one of the best massages I’ve had, Zanele is a miracle worker. A must for anyone looking to relax in Camps Bay!</h4>
                      <p>-Elana Botha</p>
                    </div>
                  </div>
                </Carousel.Item>
                <Carousel.Item className="pb-38 pe-200">
                  <div className='d-flex justify-content-end text-right'>
                    <div className='mw-770'>
                      <h4>Hands down one of the best massages I’ve had, Zanele is a miracle worker. A must for anyone looking to relax in Camps Bay!</h4>
                      <p>-Elana Botha</p>
                    </div>
                  </div>
                </Carousel.Item>
              </Carousel>
            </div>
            <div className='carousel-padding mw-968'>
              <h1>Book your Marly Spa experience</h1>
              <p className='text-black-50 m-0 text-start'>Select an option below to make a booking:</p>
              <div className='mt-5'>
                <Accordion>
                  <h3 className="m-0 p-20">Book Services</h3>
                  <Accordion.Item eventKey="0">
                    <Accordion.Header>
                      <h5 className='text-secondary m-0 pe-3'>Body Scrub & Warp</h5>
                    </Accordion.Header>
                    <Accordion.Body className='py-0'>
                      <Accordion>
                        <Accordion.Item eventKey="0">
                          <Accordion.Header>
                            <h6 className='text-secondary m-0 pe-3'>Body Scrub & Warp</h6>
                          </Accordion.Header>
                          <Accordion.Body className='py-0'>
                            <form action="">
                              <div className='border-top border-dark-50 pt-3 pb-3'>
                                <div className='row'>
                                  <div className='col-md-6 col-12 d-flex'>
                                    <input type="checkbox" required className='me-3 col-1' />
                                    <label className='col-11' htmlFor="">
                                      <h6 className='m-0 fw-semibold'>Fire Polish</h6>
                                      <p className='m-0 text-black-50'>30 min</p>
                                    </label>
                                  </div>
                                  <div className='col-md-6 col-12 d-flex justify-content-end'>
                                    <img className='mt-3 me-3' src="../../image/Spa Page/svg/Comment.svg" width={16} height={16} alt="" />
                                    <select className='bg-transparent border-0 pe-3 text-right' id="num" value={total}
                                      onClick={(e) => setTotal(e.target.value)}>
                                      <option value="">Select</option>
                                      <option value="450">1</option>
                                      <option value="900">2</option>
                                      <option value="1350">3</option>
                                      <option value="1800">4</option>
                                    </select>
                                    <p className='m-0 ps-3 py-2'>R{total}</p>
                                    <div className='btn bg-dark text-light ms-3'>BOOK</div>
                                  </div>
                                </div>
                              </div>
                              <div className='border-top border-dark-50 pt-3'>
                                <div className='row'>
                                  <div className='col-md-6 col-12 d-flex'>
                                    <input type="checkbox" required className='me-3 col-1' />
                                    <label className='col-11' htmlFor="">
                                      <h6 className='m-0 fw-semibold'>Fire Polish & warp</h6>
                                      <p className='m-0 text-black-50'>60 min</p>
                                    </label>
                                  </div>
                                  <div className='col-md-6 col-12 d-flex justify-content-end'>
                                    <img className='mt-3 me-3' src="../../image/Spa Page/svg/Comment.svg" width={16} height={16} alt="" />
                                    <select className='bg-transparent border-0 pe-3 text-right' id="num_1" value={total_1}
                                      onClick={(e) => setTotal_1(e.target.value)}>
                                      <option value="">Select</option>
                                      <option value="950">1</option>
                                      <option value="1900">2</option>
                                      <option value="2850">3</option>
                                      <option value="3800">4</option>
                                    </select>
                                    <p className='m-0 ps-3 py-2'>R{total_1}</p>
                                    <div className='btn bg-dark text-light ms-3'>BOOK</div>
                                  </div>
                                </div>
                              </div>
                            </form>
                          </Accordion.Body>
                        </Accordion.Item>
                      </Accordion>
                    </Accordion.Body>
                  </Accordion.Item>
                  <Accordion.Item eventKey="1">
                    <Accordion.Header>
                      <h5 className='text-secondary m-0 pe-3'>Enhancer</h5>
                    </Accordion.Header>
                    <Accordion.Body className='py-0'>
                      <Accordion>
                        <Accordion.Item eventKey="1">
                          <Accordion.Header>
                            <h6 className='text-secondary m-0 pe-3'>Enhancer</h6>
                          </Accordion.Header>
                          <Accordion.Body className='py-0'>
                            <form action="">
                              <div className='border-top border-dark-50 pt-3 pb-3'>
                                <div className='row'>
                                  <div className='col-md-6 col-12 d-flex'>
                                    <input type="checkbox" required className='me-3 col-1' />
                                    <label className='col-11' htmlFor="">
                                      <h6 className='m-0 fw-semibold'>Fire Polish</h6>
                                      <p className='m-0 text-black-50'>30 min</p>
                                    </label>
                                  </div>
                                  <div className='col-md-6 col-12 d-flex justify-content-end'>
                                    <img className='mt-3 me-3' src="../../image/Spa Page/svg/Comment.svg" width={16} height={16} alt="" />
                                    <select className='bg-transparent border-0 pe-3 text-right' id="num" value={total}
                                      onClick={(e) => setTotal(e.target.value)}>
                                      <option value="">Select</option>
                                      <option value="450">1</option>
                                      <option value="900">2</option>
                                      <option value="1350">3</option>
                                      <option value="1800">4</option>
                                    </select>
                                    <p className='m-0 ps-3 py-2'>R{total}</p>
                                    <div className='btn bg-dark text-light ms-3'>BOOK</div>
                                  </div>
                                </div>
                              </div>
                              <div className='border-top border-dark-50 pt-3'>
                                <div className='row'>
                                  <div className='col-md-6 col-12 d-flex'>
                                    <input type="checkbox" required className='me-3 col-1' />
                                    <label className='col-11' htmlFor="">
                                      <h6 className='m-0 fw-semibold'>Fire Polish & warp</h6>
                                      <p className='m-0 text-black-50'>60 min</p>
                                    </label>
                                  </div>
                                  <div className='col-md-6 col-12 d-flex justify-content-end'>
                                    <img className='mt-3 me-3' src="../../image/Spa Page/svg/Comment.svg" width={16} height={16} alt="" />
                                    <select className='bg-transparent border-0 pe-3 text-right' id="num_1" value={total_1}
                                      onClick={(e) => setTotal_1(e.target.value)}>
                                      <option value="">Select</option>
                                      <option value="950">1</option>
                                      <option value="1900">2</option>
                                      <option value="2850">3</option>
                                      <option value="3800">4</option>
                                    </select>
                                    <p className='m-0 ps-3 py-2'>R{total_1}</p>
                                    <div className='btn bg-dark text-light ms-3'>BOOK</div>
                                  </div>
                                </div>
                              </div>
                            </form>
                          </Accordion.Body>
                        </Accordion.Item>
                      </Accordion>
                    </Accordion.Body>
                  </Accordion.Item>
                  <Accordion.Item eventKey="2">
                    <Accordion.Header>
                      <h5 className='text-secondary m-0 pe-3'>Facials</h5>
                    </Accordion.Header>
                    <Accordion.Body className='py-0'>
                      <Accordion>
                        <Accordion.Item eventKey="2">
                          <Accordion.Header>
                            <h6 className='text-secondary m-0 pe-3'>Facials</h6>
                          </Accordion.Header>
                          <Accordion.Body className='py-0'>
                            <form action="">
                              <div className='border-top border-dark-50 pt-3 pb-3'>
                                <div className='row'>
                                  <div className='col-md-6 col-12 d-flex'>
                                    <input type="checkbox" required className='me-3 col-1' />
                                    <label className='col-11' htmlFor="">
                                      <h6 className='m-0 fw-semibold'>Fire Polish</h6>
                                      <p className='m-0 text-black-50'>30 min</p>
                                    </label>
                                  </div>
                                  <div className='col-md-6 col-12 d-flex justify-content-end'>
                                    <img className='mt-3 me-3' src="../../image/Spa Page/svg/Comment.svg" width={16} height={16} alt="" />
                                    <select className='bg-transparent border-0 pe-3 text-right' id="num" value={total}
                                      onClick={(e) => setTotal(e.target.value)}>
                                      <option value="">Select</option>
                                      <option value="450">1</option>
                                      <option value="900">2</option>
                                      <option value="1350">3</option>
                                      <option value="1800">4</option>
                                    </select>
                                    <p className='m-0 ps-3 py-2'>R{total}</p>
                                    <div className='btn bg-dark text-light ms-3'>BOOK</div>
                                  </div>
                                </div>
                              </div>
                              <div className='border-top border-dark-50 pt-3'>
                                <div className='row'>
                                  <div className='col-md-6 col-12 d-flex'>
                                    <input type="checkbox" required className='me-3 col-1' />
                                    <label className='col-11' htmlFor="">
                                      <h6 className='m-0 fw-semibold'>Fire Polish & warp</h6>
                                      <p className='m-0 text-black-50'>60 min</p>
                                    </label>
                                  </div>
                                  <div className='col-md-6 col-12 d-flex justify-content-end'>
                                    <img className='mt-3 me-3' src="../../image/Spa Page/svg/Comment.svg" width={16} height={16} alt="" />
                                    <select className='bg-transparent border-0 pe-3 text-right' id="num_1" value={total_1}
                                      onClick={(e) => setTotal_1(e.target.value)}>
                                      <option value="">Select</option>
                                      <option value="950">1</option>
                                      <option value="1900">2</option>
                                      <option value="2850">3</option>
                                      <option value="3800">4</option>
                                    </select>
                                    <p className='m-0 ps-3 py-2'>R{total_1}</p>
                                    <div className='btn bg-dark text-light ms-3'>BOOK</div>
                                  </div>
                                </div>
                              </div>
                            </form>
                          </Accordion.Body>
                        </Accordion.Item>
                      </Accordion>
                    </Accordion.Body>
                  </Accordion.Item>
                  <Accordion.Item eventKey="3">
                    <Accordion.Header>
                      <h5 className='text-secondary m-0 pe-3'>Grooming</h5>
                    </Accordion.Header>
                    <Accordion.Body className='py-0'>
                      <Accordion>
                        <Accordion.Item eventKey="3">
                          <Accordion.Header>
                            <h6 className='text-secondary m-0 pe-3'>Grooming</h6>
                          </Accordion.Header>
                          <Accordion.Body className='py-0'>
                            <form action="">
                              <div className='border-top border-dark-50 pt-3 pb-3'>
                                <div className='row'>
                                  <div className='col-md-6 col-12 d-flex'>
                                    <input type="checkbox" required className='me-3 col-1' />
                                    <label className='col-11' htmlFor="">
                                      <h6 className='m-0 fw-semibold'>Fire Polish</h6>
                                      <p className='m-0 text-black-50'>30 min</p>
                                    </label>
                                  </div>
                                  <div className='col-md-6 col-12 d-flex justify-content-end'>
                                    <img className='mt-3 me-3' src="../../image/Spa Page/svg/Comment.svg" width={16} height={16} alt="" />
                                    <select className='bg-transparent border-0 pe-3 text-right' id="num" value={total}
                                      onClick={(e) => setTotal(e.target.value)}>
                                      <option value="">Select</option>
                                      <option value="450">1</option>
                                      <option value="900">2</option>
                                      <option value="1350">3</option>
                                      <option value="1800">4</option>
                                    </select>
                                    <p className='m-0 ps-3 py-2'>R{total}</p>
                                    <div className='btn bg-dark text-light ms-3'>BOOK</div>
                                  </div>
                                </div>
                              </div>
                              <div className='border-top border-dark-50 pt-3'>
                                <div className='row'>
                                  <div className='col-md-6 col-12 d-flex'>
                                    <input type="checkbox" required className='me-3 col-1' />
                                    <label className='col-11' htmlFor="">
                                      <h6 className='m-0 fw-semibold'>Fire Polish & warp</h6>
                                      <p className='m-0 text-black-50'>60 min</p>
                                    </label>
                                  </div>
                                  <div className='col-md-6 col-12 d-flex justify-content-end'>
                                    <img className='mt-3 me-3' src="../../image/Spa Page/svg/Comment.svg" width={16} height={16} alt="" />
                                    <select className='bg-transparent border-0 pe-3 text-right' id="num_1" value={total_1}
                                      onClick={(e) => setTotal_1(e.target.value)}>
                                      <option value="">Select</option>
                                      <option value="950">1</option>
                                      <option value="1900">2</option>
                                      <option value="2850">3</option>
                                      <option value="3800">4</option>
                                    </select>
                                    <p className='m-0 ps-3 py-2'>R{total_1}</p>
                                    <div className='btn bg-dark text-light ms-3'>BOOK</div>
                                  </div>
                                </div>
                              </div>
                            </form>
                          </Accordion.Body>
                        </Accordion.Item>
                      </Accordion>
                    </Accordion.Body>
                  </Accordion.Item>
                  <Accordion.Item eventKey="4">
                    <Accordion.Header>
                      <h5 className='text-secondary m-0 pe-3'>Hands & Feet</h5>
                    </Accordion.Header>
                    <Accordion.Body className='py-0'>
                      <Accordion>
                        <Accordion.Item eventKey="4">
                          <Accordion.Header>
                            <h6 className='text-secondary m-0 pe-3'>Hands & Feet</h6>
                          </Accordion.Header>
                          <Accordion.Body className='py-0'>
                            <form action="">
                              <div className='border-top border-dark-50 pt-3 pb-3'>
                                <div className='row'>
                                  <div className='col-md-6 col-12 d-flex'>
                                    <input type="checkbox" required className='me-3 col-1' />
                                    <label className='col-11' htmlFor="">
                                      <h6 className='m-0 fw-semibold'>Fire Polish</h6>
                                      <p className='m-0 text-black-50'>30 min</p>
                                    </label>
                                  </div>
                                  <div className='col-md-6 col-12 d-flex justify-content-end'>
                                    <img className='mt-3 me-3' src="../../image/Spa Page/svg/Comment.svg" width={16} height={16} alt="" />
                                    <select className='bg-transparent border-0 pe-3 text-right' id="num" value={total}
                                      onClick={(e) => setTotal(e.target.value)}>
                                      <option value="">Select</option>
                                      <option value="450">1</option>
                                      <option value="900">2</option>
                                      <option value="1350">3</option>
                                      <option value="1800">4</option>
                                    </select>
                                    <p className='m-0 ps-3 py-2'>R{total}</p>
                                    <div className='btn bg-dark text-light ms-3'>BOOK</div>
                                  </div>
                                </div>
                              </div>
                              <div className='border-top border-dark-50 pt-3'>
                                <div className='row'>
                                  <div className='col-md-6 col-12 d-flex'>
                                    <input type="checkbox" required className='me-3 col-1' />
                                    <label className='col-11' htmlFor="">
                                      <h6 className='m-0 fw-semibold'>Fire Polish & warp</h6>
                                      <p className='m-0 text-black-50'>60 min</p>
                                    </label>
                                  </div>
                                  <div className='col-md-6 col-12 d-flex justify-content-end'>
                                    <img className='mt-3 me-3' src="../../image/Spa Page/svg/Comment.svg" width={16} height={16} alt="" />
                                    <select className='bg-transparent border-0 pe-3 text-right' id="num_1" value={total_1}
                                      onClick={(e) => setTotal_1(e.target.value)}>
                                      <option value="">Select</option>
                                      <option value="950">1</option>
                                      <option value="1900">2</option>
                                      <option value="2850">3</option>
                                      <option value="3800">4</option>
                                    </select>
                                    <p className='m-0 ps-3 py-2'>R{total_1}</p>
                                    <div className='btn bg-dark text-light ms-3'>BOOK</div>
                                  </div>
                                </div>
                              </div>
                            </form>
                          </Accordion.Body>
                        </Accordion.Item>
                      </Accordion>
                    </Accordion.Body>
                  </Accordion.Item>
                  <Accordion.Item eventKey="5">
                    <Accordion.Header>
                      <h5 className='text-secondary m-0 pe-3'>Massage</h5>
                    </Accordion.Header>
                    <Accordion.Body className='py-0'>
                      <Accordion>
                        <Accordion.Item eventKey="5">
                          <Accordion.Header>
                            <h6 className='text-secondary m-0 pe-3'>Massage</h6>
                          </Accordion.Header>
                          <Accordion.Body className='py-0'>
                            <form action="">
                              <div className='border-top border-dark-50 pt-3 pb-3'>
                                <div className='row'>
                                  <div className='col-md-6 col-12 d-flex'>
                                    <input type="checkbox" required className='me-3 col-1' />
                                    <label className='col-11' htmlFor="">
                                      <h6 className='m-0 fw-semibold'>Fire Polish</h6>
                                      <p className='m-0 text-black-50'>30 min</p>
                                    </label>
                                  </div>
                                  <div className='col-md-6 col-12 d-flex justify-content-end'>
                                    <img className='mt-3 me-3' src="../../image/Spa Page/svg/Comment.svg" width={16} height={16} alt="" />
                                    <select className='bg-transparent border-0 pe-3 text-right' id="num" value={total}
                                      onClick={(e) => setTotal(e.target.value)}>
                                      <option value="">Select</option>
                                      <option value="450">1</option>
                                      <option value="900">2</option>
                                      <option value="1350">3</option>
                                      <option value="1800">4</option>
                                    </select>
                                    <p className='m-0 ps-3 py-2'>R{total}</p>
                                    <div className='btn bg-dark text-light ms-3'>BOOK</div>
                                  </div>
                                </div>
                              </div>
                              <div className='border-top border-dark-50 pt-3'>
                                <div className='row'>
                                  <div className='col-md-6 col-12 d-flex'>
                                    <input type="checkbox" required className='me-3 col-1' />
                                    <label className='col-11' htmlFor="">
                                      <h6 className='m-0 fw-semibold'>Fire Polish & warp</h6>
                                      <p className='m-0 text-black-50'>60 min</p>
                                    </label>
                                  </div>
                                  <div className='col-md-6 col-12 d-flex justify-content-end'>
                                    <img className='mt-3 me-3' src="../../image/Spa Page/svg/Comment.svg" width={16} height={16} alt="" />
                                    <select className='bg-transparent border-0 pe-3 text-right' id="num_1" value={total_1}
                                      onClick={(e) => setTotal_1(e.target.value)}>
                                      <option value="">Select</option>
                                      <option value="950">1</option>
                                      <option value="1900">2</option>
                                      <option value="2850">3</option>
                                      <option value="3800">4</option>
                                    </select>
                                    <p className='m-0 ps-3 py-2'>R{total_1}</p>
                                    <div className='btn bg-dark text-light ms-3'>BOOK</div>
                                  </div>
                                </div>
                              </div>
                            </form>
                          </Accordion.Body>
                        </Accordion.Item>
                      </Accordion>
                    </Accordion.Body>
                  </Accordion.Item>
                  <Accordion.Item eventKey="6">
                    <Accordion.Header>
                      <h5 className='text-secondary m-0 pe-3'>Packages</h5>
                    </Accordion.Header>
                    <Accordion.Body className='py-0'>
                      <Accordion>
                        <Accordion.Item eventKey="6">
                          <Accordion.Header>
                            <h6 className='text-secondary m-0 pe-3'>Packages</h6>
                          </Accordion.Header>
                          <Accordion.Body className='py-0'>
                            <form action="">
                              <div className='border-top border-dark-50 pt-3 pb-3'>
                                <div className='row'>
                                  <div className='col-md-6 col-12 d-flex'>
                                    <input type="checkbox" required className='me-3 col-1' />
                                    <label className='col-11' htmlFor="">
                                      <h6 className='m-0 fw-semibold'>Fire Polish</h6>
                                      <p className='m-0 text-black-50'>30 min</p>
                                    </label>
                                  </div>
                                  <div className='col-md-6 col-12 d-flex justify-content-end'>
                                    <img className='mt-3 me-3' src="../../image/Spa Page/svg/Comment.svg" width={16} height={16} alt="" />
                                    <select className='bg-transparent border-0 pe-3 text-right' id="num" value={total}
                                      onClick={(e) => setTotal(e.target.value)}>
                                      <option value="">Select</option>
                                      <option value="450">1</option>
                                      <option value="900">2</option>
                                      <option value="1350">3</option>
                                      <option value="1800">4</option>
                                    </select>
                                    <p className='m-0 ps-3 py-2'>R{total}</p>
                                    <div className='btn bg-dark text-light ms-3'>BOOK</div>
                                  </div>
                                </div>
                              </div>
                              <div className='border-top border-dark-50 pt-3'>
                                <div className='row'>
                                  <div className='col-md-6 col-12 d-flex'>
                                    <input type="checkbox" required className='me-3 col-1' />
                                    <label className='col-11' htmlFor="">
                                      <h6 className='m-0 fw-semibold'>Fire Polish & warp</h6>
                                      <p className='m-0 text-black-50'>60 min</p>
                                    </label>
                                  </div>
                                  <div className='col-md-6 col-12 d-flex justify-content-end'>
                                    <img className='mt-3 me-3' src="../../image/Spa Page/svg/Comment.svg" width={16} height={16} alt="" />
                                    <select className='bg-transparent border-0 pe-3 text-right' id="num_1" value={total_1}
                                      onClick={(e) => setTotal_1(e.target.value)}>
                                      <option value="">Select</option>
                                      <option value="950">1</option>
                                      <option value="1900">2</option>
                                      <option value="2850">3</option>
                                      <option value="3800">4</option>
                                    </select>
                                    <p className='m-0 ps-3 py-2'>R{total_1}</p>
                                    <div className='btn bg-dark text-light ms-3'>BOOK</div>
                                  </div>
                                </div>
                              </div>
                            </form>
                          </Accordion.Body>
                        </Accordion.Item>
                      </Accordion>
                    </Accordion.Body>
                  </Accordion.Item>
                </Accordion>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Best_of_Marly />
      <Footer />
    </div>
  )
}

export default Spa