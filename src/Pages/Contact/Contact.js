import React from 'react'
import { Route, Link, BrowserRouter as Router } from 'react-router-dom'
import Footer from '../../Components/Footer/Footer'
import Header from '../../Components/Header/Header'
import Zifzagleft from '../../Components/Zigzag/Zifzagleft'
import Best_of_Marly from '../../Components/Best_of_Marly/Best_of_Marly'
import './Contact.css'
import SectionHero from '../../Components/SectionHero/SectionHero'

const Contact = () => {

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
            <Header />
            <main>
                <SectionHero
                    image={"../../image/Contact Page/Marly_Contact.jpg"}
                    title={'Contact Us'}
                    descrption={"Get in touch with The Marly"}
                />
                <section className='common'>
                    <div className='row pt-80'>
                        <div className="col-sm-5 col-12 d-flex align-content-center flex-wrap md:ms-auto">
                            <div className='md:mx-4 md:m-5'>
                                <h1 className='pb-4 m-0 mw-501'>Let’s get in touch</h1>
                                <Callto phone="+27 (0) 21 437 1287"><p className='pb-3 m-0 mw-391'>Tel.+27 (0) 21 437 1287</p></Callto>
                                <Mailto email="dm@themarly.co.za" subject="Hello & Welcome" body="Hello world!"><p className='pb-3 m-0 mw-391'>E-mail. dm@themarly.co.za </p></Mailto>
                                <a href='https://goo.gl/maps/DasxfSfmfTajpijy8'><p className='pb-3 m-0'>201           The Promenade, Victoria Road,<br />
                                    Camps Bay, South Africa<br />
                                    GPS: 34° 0’46.55″S 18° 27’3.06″E</p></a>
                                <div className='pt-3'>
                                    <Link to="/" exact><div className='border rounded-pill btn manu_title py-2 px-3 text-dark'>READ MORE</div></Link>
                                </div>
                            </div>
                        </div>
                        <div className='col-md-6 col-12 order-2'>
                            <img className='w-100' src="../../image/Contact Page/Marly_Contact_1.jpg" alt="" />
                        </div>
                    </div>
                </section>
                <section className='common'>
                    <div className='d-md-flex py-80 md:mt-4'>
                        <div className='col-md-6 col-12'>
                            <iframe className='w-100' src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3309.5833865849513!2d18.3768454!3d-33.9518419!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1dcc6652830846a1%3A0xfffb179bfc23627f!2sThe%20Marly%20Boutique%20Hotel%20and%20Spa!5e0!3m2!1sen!2sin!4v1655814470840!5m2!1sen!2sin" height="510" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                        </div>
                        <div className={"col-md-6 col-12 d-flex justify-content-center align-content-center flex-wrap"}>
                            <div className='md:mw-471 md:mx-4 md:m-5'>
                                <h1>How to find us</h1>
                                <p>The Marly is located a mere 7 minutes from the Cape Town city centre, in the iconic seaside suburb of Camps Bay.</p>
                                <p>201 The Promenade, Victoria Road, Camps Bay, South Africa<br /><br />
                                    GPS: 34° 0’46.55″S 18° 27’3.06″E</p>
                                <div className='mt-3 d-flex'>
                                    <a href='https://goo.gl/maps/DasxfSfmfTajpijy8'><div className='border rounded-pill btn manu_title py-2 px-3 text-dark me-1'>VIEW ON MAP</div></a>
                                </div>
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

export default Contact