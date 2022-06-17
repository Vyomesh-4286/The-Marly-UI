import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Footer from '../../Components/Footer/Footer'
import Header from '../../Components/Header/Header'
import Best_of_Marly from '../../Components/Best_of_Marly/Best_of_Marly'
import Carousel from 'react-bootstrap/Carousel'
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'
import './OurStory.css';
import Zigzagimgright from '../../Components/Zigzagimg/Zigzagimgright'
import SectionHero from '../../Components/SectionHero/SectionHero'

const OurStory = () => {
    const values = [true];
    const [fullscreen, setFullscreen] = useState(true);
    const [show, setShow] = useState(false);

    function handleShow(breakpoint) {
        setFullscreen(breakpoint);
        setShow(true);
    }
    return (
        <div>
            <Header />
            <main>
                <SectionHero
                    image={"../../image/About Page/Marly_About.jpg"}
                    title={'Our Story'}
                    descrption={"Brought to life by The Kove Collection’s dedication to outstanding hospitality, The Marly sells a lifestyle, not just luxury accommodation."}
                />
                <Zigzagimgright
                    title={'Life is Better at The Marly'}
                    descrption={"Positioned in the trendy suburb of Camps Bay, The Marly Boutique Hotel & Spa offers a uniquely curated hospitality experience for travelers and locals alike. The 38-room luxury hotel boasts a rooftop swimming pool with remarkable 360-degree views of Cape Town’s iconic mountain ranges, a deluxe spa, gym and a tasteful collection of restaurants, cafés and bars neighboring the property."}
                    descrption2={"The M/arly can best be described as the perfect balance between understated luxury and playfulness. Paired with excellence in hospitality and a passionate on-the-ground team, you might never want to leave."}
                    btn1={'STAY WITH US'}
                    image={"../../image/About Page/Marly_About_1.jpg"}
                />
                <section className="common mt-282 mb-110">
                    <img className='w-100 h-100' src="../../image/About Page/Marly_About_2.jpg" alt="" />
                    <div className='video_position'>
                        <h1 className='mw-719'>The Marly - a destination in its entirety.</h1>
                        <div className='pt-3 d-flex'>
                            {values.map((v, idx) => (
                                <Button key={idx} className="me-2 mb-2" onClick={() => handleShow(v)}>
                                    <div id='contact_us' className=' rounded-pill btn manu_title py-2 px-3 text-white me-1'>WATCH VIDEO</div>
                                    {typeof v === 'string' && `below ${v.split('-')[0]}`}
                                </Button>
                            ))}
                            <Modal show={show} fullscreen={fullscreen} onHide={() => setShow(false)}>
                                <Modal.Header className='p-0' closeButton />
                                <Modal.Body className='p-0'>
                                    <video className="w-100 vh-100" src="../../image/About Page/video/Traveling through the Marly Hotel in Camps Bay, Cape Town.mp4" autoPlay controls />
                                </Modal.Body>
                            </Modal>
                        </div>
                    </div>
                </section>
                <section className='common mb-116'>
                    <div className='row'>
                        <div className="col-sm-12 pt-100">
                            <h1 className='mb-70 d-flex justify-content-center text-center'>Explore The Marly’s hidden gems</h1>
                            <div className='carousel-padding'>
                                <Carousel>
                                    <Carousel.Item>
                                        <img className="d-block w-100 carousel-item-size" src="../../image/About Page/Marly_About_Swiper_1.jpg" alt="First slide" />
                                        <div className='d-flex ms-68'>
                                            <p className='pe-3 m-0'>1 __ 4</p>
                                            <p className='m-0'>Exceptional views of South Africa’s most famous mountain</p>
                                        </div>
                                    </Carousel.Item>
                                    <Carousel.Item>
                                        <img className="d-block w-100 carousel-item-size" src="../../image/About Page/Marly_About_Swiper_1.jpg" alt="First slide" />
                                        <div className='d-flex ms-68'>
                                            <p className='pe-3 m-0'>2 __ 4</p>
                                            <p className='m-0'>Exceptional views of South Africa’s most famous mountain</p>
                                        </div>
                                    </Carousel.Item>
                                    <Carousel.Item>
                                        <img className="d-block w-100 carousel-item-size" src="../../image/About Page/Marly_About_Swiper_1.jpg" alt="First slide" />
                                        <div className='d-flex ms-68'>
                                            <p className='pe-3 m-0'>3 __ 4</p>
                                            <p className='m-0'>Exceptional views of South Africa’s most famous mountain</p>
                                        </div>
                                    </Carousel.Item>
                                    <Carousel.Item>
                                        <img className="d-block w-100 carousel-item-size" src="../../image/About Page/Marly_About_Swiper_1.jpg" alt="First slide" />
                                        <div className='d-flex ms-68'>
                                            <p className='pe-3 m-0'>4 __ 4</p>
                                            <p className='m-0'>Exceptional views of South Africa’s most famous mountain</p>
                                        </div>
                                    </Carousel.Item>
                                </Carousel>
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

export default OurStory