import React from 'react'
import { Route, Link, BrowserRouter as Router } from 'react-router-dom'
import './ImgGrid.css';

const ImgGrid = ({ image , isGalleryMargin, isMaxWidth1, isMaxWidth2, isMaxWidth3, isMaxWidth4, isMaxWidthblog1, isMaxWidthblog2, isMaxWidthblog3, isMargin, isPadding, title, descrption, btn }) => {
    return (
        <div className={`col-md-6 col-12 mb:mb-165 mb-4 imggrid ${isGalleryMargin && 'mb-4'} ${isMargin && 'mb-0'} ${isPadding && 'pb-0'}`}>
            <img className='w-100' src={image} height={357} alt="" />
            <div className="d-flex justify-content-center gallery">
                <div className={`mw-370 mt-5 d-flex justify-content-center flex-column text-center ${isMaxWidth1 && 'mw-474'} ${isMaxWidth2 && 'mw-502'} ${isMaxWidth3 && 'mw-559'} ${isMaxWidth4 && 'mw-535'} ${isMaxWidthblog1 && 'mw-430'} ${isMaxWidthblog2 && 'mw-517'} ${isMaxWidthblog3 && 'mw-459'}`}>
                    <h2 className='pb-3'>{title}</h2>
                    <p className={"pt-1 pb-3 mw-100"}>{descrption}</p>
                    <div className='pt-3 d-flex justify-content-center'>
                        <Link to="/" exact><div className='border rounded-pill btn manu_title py-2 px-3 text-dark me-1'>{btn}</div></Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ImgGrid