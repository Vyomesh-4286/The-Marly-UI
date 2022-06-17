import React from 'react'
import { Route, Link, BrowserRouter as Router } from 'react-router-dom'
import Footer from '../../Components/Footer/Footer'
import Header from '../../Components/Header/Header'
import Zifzagleft from '../../Components/Zigzag/Zifzagleft'
import Zigzagimgright from '../../Components/Zigzagimg/Zigzagimgright'
import Best_of_Marly from '../../Components/Best_of_Marly/Best_of_Marly'
import './Contact.css'
import SectionHero from '../../Components/SectionHero/SectionHero'

const Contact = () => {
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
                        <div className="col-sm-5 col-12 d-flex justify-content-center flex-column ms-auto">
                            <h1 className='pb-4 m-0 mw-501'>Let’s get in touch</h1>
                            <p className='pb-3 m-0 mw-391'>Tel.+27 (0) 21 437 1287</p>
                            <p className='pb-3 m-0 mw-391'>E-mail. dm@themarly.co.za </p>
                            <p className='pb-3 m-0 mw-391'>201           The Promenade, Victoria Road,<br />
                                Camps Bay, South Africa<br />
                                GPS: 34° 0’46.55″S 18° 27’3.06″E</p>
                            <div className='pt-3'>
                                <Link to="/" exact><div className='border rounded-pill btn manu_title py-2 px-3 text-dark'>READ MORE</div></Link>
                            </div>
                        </div>
                        <div className="col-sm-6 col-12">
                            <img src={"../../image/Contact Page/Marly_Contact_1.jpg"} alt="" />
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

export default Contact