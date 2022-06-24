import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation } from "swiper";
import { Link } from 'react-router-dom'
import Footer from '../../Components/Footer/Footer'
import Header from '../../Components/Header/Header'
import Best_of_Marly from '../../Components/Best_of_Marly/Best_of_Marly'
import './Location.css';
import Zifzagleft from "../../Components/Zigzag/Zifzagleft";
import SectionHero from "../../Components/SectionHero/SectionHero";
import Zigzagimgleft from "../../Components/Zigzagimg/Zigzagimgleft";

const Location = () => {
    return (
        <div>
            <Header />
            <main>
                <SectionHero
                    image={"../../image/Location Page/Marly_Location.jpg"}
                    title={'Discover Camps Bay'}
                    descrption={"Experience a luxury stay like no other at one of South Africa’s   most premier and exclusive beaches"}
                />
                <Zigzagimgleft
                    title={'Experience Camps Bay'}
                    descrption={"Camps Bay, under the Twelve Apostles mountain range, is a chic suburb on the trendy Atlantic Seaboard. Sidewalk cafes, bars and a casual, relaxed atmosphere make this spot a beachcomber’s paradise; while the sparkling nightlife attracts the young and the young at heart. It’s a mere seven minutes from the centre of Cape Town, one of the world’s most beautiful cities."}
                    descrption1={"Camps Bay gives its name to one of the city’s largest and most picturesque beaches."}
                    image={"../../image/Location Page/Marly_Location_1.jpg"}
                    isOrder={true}
                />
                <section className='common mt-0'>
                    <div id='color-FAF8F4' className='row'>
                        <div className="col-sm-12 pt-100">
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
                                        <img className="d-block w-100" src="../../image/Location Page/Marly_Location_swiper_1.jpg" alt="First slide" />
                                        <div className='d-flex mt-49 ms-168'>
                                            <p className='m-0'>Perfect positioning on  Camps Bay’s beachfront</p>
                                        </div>
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <img className="d-block w-100" src="../../image/Location Page/Marly_Location_swiper_1.jpg" alt="First slide" />
                                        <div className='d-flex mt-49 ms-168'>
                                            <p className='m-0'>Perfect positioning on  Camps Bay’s beachfront</p>
                                        </div>
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <img className="d-block w-100" src="../../image/Location Page/Marly_Location_swiper_1.jpg" alt="First slide" />
                                        <div className='d-flex mt-49 ms-168'>
                                            <p className='m-0'>Perfect positioning on  Camps Bay’s beachfront</p>
                                        </div>
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <img className="d-block w-100" src="../../image/Location Page/Marly_Location_swiper_1.jpg" alt="First slide" />
                                        <div className='d-flex mt-49 ms-168'>
                                            <p className='m-0'>Perfect positioning on  Camps Bay’s beachfront</p>
                                        </div>
                                    </SwiperSlide>
                                </Swiper>
                            </div>
                        </div>
                    </div>
                </section>
                <section className='common mt-0 intpoint_marly'>
                    <h1 className='mb-3'>Discover points of interest near The Marly</h1>
                    <p className='mw-546 mb-5'>The Marly will exceed all your expectations and is the ideal setting from where to explore all that the beautiful Mother City and surrounds have to offer.</p>
                    <div className="row ps-3 mt-3">
                        <div className="col-md-4 col-sm-6 col-12">
                            <div className='d-flex'>
                                <div>
                                    <img className='me-4' src="../../image/Location Page/svg/Marly_Location_svg_1.svg" alt="" />
                                </div>
                                <div className='ms-4'>
                                    <h2>V&A Waterfront</h2>
                                    <p>6km away</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4 col-sm-6 col-12">
                            <div className='d-flex'>
                                <div>
                                    <img className='me-4' src="../../image/Location Page/svg/Marly_Location_svg_2.svg" alt="" />
                                </div>
                                <div className='ms-4'>
                                    <h2>Table Mountain</h2>
                                    <p>6km away</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4 col-sm-6 col-12">
                            <div className='d-flex'>
                                <div>
                                    <img className='me-4' src="../../image/Location Page/svg/Marly_Location_svg_3.svg" alt="" />
                                </div>
                                <div className='ms-4'>
                                    <h2>Point of Interest</h2>
                                    <p>6km away</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4 col-sm-6 col-12">
                            <div className='d-flex'>
                                <div>
                                    <img className='me-4' src="../../image/Location Page/svg/Marly_Location_svg_4.svg" alt="" />
                                </div>
                                <div className='ms-4'>
                                    <h2>Point of Interest</h2>
                                    <p>6km away</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4 col-sm-6 col-12">
                            <div className='d-flex'>
                                <div>
                                    <img className='me-4 pe-1' src="../../image/Location Page/svg/Marly_Location_svg_5.svg" alt="" />
                                </div>
                                <div className='ms-4 ps-2'>
                                    <h2>Point of interest</h2>
                                    <p>6km away</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4 col-sm-6 col-12">
                            <div className='d-flex'>
                                <div>
                                    <img className='me-4' src="../../image/Location Page/svg/Marly_Location_svg_6.svg" alt="" />
                                </div>
                                <div className='ms-4'>
                                    <h2>Point of Interest</h2>
                                    <p>6km away</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <Zifzagleft
                    image={"../../image/Location Page/Marly_Location_2.jpg"}
                    title={'How to find us'}
                    descrption={"The Marly is located a mere 7 minutes from the Cape Town city centre, in the iconic seaside suburb of Camps Bay."}
                    descrption1={"201 The Promenade, Victoria Road, Camps Bay, South Africa"}
                    descrption2={"GPS: 33° 95’31.18″S 18° 37’73’03″E"}
                    btn1={'VIEW ON MAP'}
                />
            </main>
            <Best_of_Marly />
            <Footer />
        </div>
    )
}

export default Location