import React from 'react'
import { Route, Link, BrowserRouter as Router } from 'react-router-dom'
import './SectionHero.css';

const SectionHero = ({ image, title, descrption, btn }) => {
    return (
        <div>
            <section className='img-gradient'>
                <img className='w-100' src={image} alt="" />
                <div className='d-flex justify-content-center'>
                    <div className='container sectionhero_content'>
                        <div className='d-flex justify-content-center'>
                            <h1 className=''>{title}</h1>
                        </div>
                        <div className='pt-3 d-flex justify-content-center'>
                            <p className='w-50'>{descrption}</p>
                        </div>
                        <div className='pt-3 d-flex justify-content-center'>
                            <Link to="/" exact><div id='contact_us' className='rounded-pill btn manu_title py-2 px-3 text-white'>{btn}</div></Link>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default SectionHero