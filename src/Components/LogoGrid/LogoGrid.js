import React from 'react'
import { Route, Link, BrowserRouter as Router } from 'react-router-dom'
import './LogoGrid.css';

const LogoGrid = ({ image, isMaxWidth1, isMaxWidth2, isMaxWidth3, isMargin, isPadding, title, descrption, btn }) => {
    return (
        <div className={`col-md-4 col-sm-6 col-12 mb-90 imggrid ${isMargin && 'mb-0'} ${isPadding && 'pb-0'}`}>
            <img className='w-100' src={image} height={357} alt="" />
            <div className='d-flex justify-content-center'>
                <div className={`mw-235 mt-5 d-flex justify-content-center flex-column text-center ${isMaxWidth1 && 'mw-323'} ${isMaxWidth2 && 'mw-283'} ${isMaxWidth3 && 'mw-247'}`}>
                    <h2 className='pb-3'>{title}</h2>
                    <p className='pt-1 pb-3'>{descrption}</p>
                    <div className='pt-3 d-flex justify-content-center'>
                        <Link to="/" exact><div className='border rounded-pill btn manu_title py-2 px-3 text-dark me-1'>{btn}</div></Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default LogoGrid