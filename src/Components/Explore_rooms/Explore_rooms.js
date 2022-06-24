import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import "swiper/css/navigation";
import { Navigation } from "swiper";
import { Link } from 'react-router-dom'
import './Explore_rooms.css';

const Explore_rooms = () => {

    return (
        <div>
            <div id='facilities_swiper' className="common e_rooms container-fluid p-0">
                <div className='ps-4 sm:ps-87 md:ps-135 text-dark text-left'>
                    <h1>Explore our rooms</h1>
                    <p className='text-black-50'>Total luxury with uninterupted views of either ocean or mountain</p>
                    <div className='my-3 d-flex view_btn_position'>
                        <Link to="/stay" exact><div className='border rounded-pill btn manu_title py-2 px-3 text-dark me-1'>VIEW ALL ROOMS</div></Link>
                    </div>
                    <div>
                        <Swiper
                            slidesPerView={3.3}
                            breakpoints={{
                                0: {
                                    slidesPerView: 1.3
                                },
                                768: {
                                    slidesPerView: 1.6
                                },
                                992: {
                                    slidesPerView: 2.5
                                },
                                1024: {
                                    slidesPerView: 3.3
                                }
                            }}
                            navigation={true}
                            modules={[Navigation]}
                            spaceBetween={30}
                            loop={true}
                            className="mySwiper pt-92">
                            <SwiperSlide className='swiper'>
                                <div>
                                    <img className='w-100 mb-1' src="../../image/Facilities Page/Marly_Facilities_swiper_1.jpg" height={270} alt="Life_in_marly" />
                                    <div className='mt-3 ms-2'>
                                        <h5>Studio Sea Facing</h5>
                                        <p>The room is 30m² with a 10m² balcony.</p>
                                        <div className='pt-2 d-flex'>
                                            <Link to="/" exact><div id='bys_hover' className='btn manu_title p-0 text-dark'><span>EXPLORE</span></div></Link>
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div>
                                    <img className='w-100 mb-1' src="../../image/Facilities Page/Marly_Facilities_swiper_2.jpg" height={270} alt="Life_in_marly" />
                                    <div className='mt-3 ms-2'>
                                        <h5>Classic Sea Facing</h5>
                                        <p>The room is 35m² with a 10m² balcony.</p>
                                        <div className='pt-2 d-flex'>
                                            <Link to="/" exact><div id='bys_hover' className='btn manu_title p-0 text-dark'><span>EXPLORE</span></div></Link>
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div>
                                    <img className='w-100 mb-1' src="../../image/Facilities Page/Marly_Facilities_swiper_3.jpg" height={270} alt="Life_in_marly" />
                                    <div className='mt-3 ms-2'>
                                        <h5>Superior Sea Facing</h5>
                                        <p>The suite is 45m² with a 20m² balcony. </p>
                                        <div className='pt-2 d-flex'>
                                            <Link to="/" exact><div id='bys_hover' className='btn manu_title p-0 text-dark'><span>EXPLORE</span></div></Link>
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div>
                                    <img className='w-100 mb-1' src="../../image/Facilities Page/Marly_Facilities_swiper_4.jpg" height={270} alt="Life_in_marly" />
                                    <div className='mt-3 ms-2'>
                                        <h5>Junior Sea Facing</h5>
                                        <p>The suite is 45m² with a 20m² balcony. </p>
                                        <div className='pt-2 d-flex'>
                                            <Link to="/" exact><div id='bys_hover' className='btn manu_title p-0 text-dark'><span>EXPLORE</span></div></Link>
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>
                        </Swiper>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Explore_rooms