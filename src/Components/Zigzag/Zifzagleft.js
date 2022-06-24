import React from 'react'
import { Route, Link, BrowserRouter as Router } from 'react-router-dom'
import './Zigzag.css';

const Zifzagleft = ({ img_anchor, image, isLogo, logo, title, isMap, descrption, descrption1, descrption2, isOrder, btn1, btn2, link }) => {
    return (
        <div>
            <section className='common'>
                <div className='d-md-flex py-80 md:mt-4'>
                    <div className={`col-md-6 col-12 ${isOrder && 'order-2'}`}>
                        {img_anchor}
                        <img className='w-100 img-hide' src={image} height={"510px"} alt="Marly Spa page Tab image - 1" />
                    </div>
                    <div className={"col-md-6 col-12 d-flex justify-content-center align-content-center flex-wrap"}>
                        <div className='md:mw-471 md:mx-4 md:m-5'>
                            <h1>{title}</h1>
                            {isLogo &&
                                <img className='mb-4' src={logo} alt="" />
                            }
                            <p className='mb-0'>{descrption}</p>
                            <p className='mb-0'>{descrption1}</p>
                            <p className='mb-0'>{descrption2}</p>
                            <div className='mt-3 d-flex'>
                                {link}
                                <Link to="/" exact><div className='border rounded-pill btn-hide btn manu_title py-2 px-3 text-dark me-1'>{btn1}</div></Link>
                                <Link to="/" exact><div id='bys_hover' className='btn-hide btn manu_title py-2 px-3 text-dark'><span>{btn2}</span></div></Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Zifzagleft