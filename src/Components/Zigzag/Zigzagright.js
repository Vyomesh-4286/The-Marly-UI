import React from 'react'
import { Route, Link, BrowserRouter as Router } from 'react-router-dom'
import './Zigzag.css';

const Zifzagright = ({ image, logo, title, descrption, descrption1, descrption2, btn1, btn2 }) => {
    return (
        <div>
            <section className='common mt-0'>
                <div className='d-md-flex pt-224'>
                    <div className="col-md-6 col-12 pt-120 ps-117">
                        <div className='mw-471 md:py-3'>
                            <h1>{title}</h1>
                            <img className='mb-4' src={logo} alt="" />
                            <p>{descrption}</p>
                            <p>{descrption1}</p>
                            <p>{descrption2}</p>
                            <div className='pt-3 d-flex'>
                                <Link to="/" exact><div className='border rounded-pill btn manu_title py-2 px-3 text-dark me-1'>{btn1}</div></Link>
                                <Link to="/" exact><div id='bys_hover' className='btn manu_title py-2 px-3 text-dark'><span>{btn2}</span></div></Link>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6 col-12">
                        <div className='md:ps-3'>
                            <img className='w-100' src={image} height={"510px"} alt="Marly Spa page Tab image - 1" />
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Zifzagright