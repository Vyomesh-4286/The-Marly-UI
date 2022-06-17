import React from 'react'
import { Route, Link, BrowserRouter as Router } from 'react-router-dom'
import './Zigzagimg.css'

const Zigzagimgleft = ({ image, title, descrption, descrption1, descrption2, btn1, btn2 }) => {
    return (
        <div>
            <section className='common'>
                <div className='row pt-80'>
                    <div className="col-md-6 col-12">
                        <img src={image} alt="" />
                    </div>
                    <div className="col-md-5 col-12 d-flex justify-content-center flex-column ms-auto">
                        <div className='md:mx-auto md:py-3'>
                            <h1 className='pb-4 m-0 mw-501 md:mx-auto'>{title}</h1>
                            <p className='pb-3 m-0 mw-391 md:mx-auto'>{descrption}</p>
                            <p className='pb-3 m-0 mw-391 md:mx-auto'>{descrption1}</p>
                            <p className='pb-3 m-0 mw-391 md:mx-auto'>{descrption2}</p>
                            <div className='pt-3 md:mx-auto'>
                                <Link to="/" exact><div className='border rounded-pill btn manu_title py-2 px-3 text-dark'>{btn1}</div></Link>
                                <Link to="/" exact><div id='bys_hover' className='btn manu_title py-2 px-3 text-dark'><span>{btn2}</span></div></Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Zigzagimgleft