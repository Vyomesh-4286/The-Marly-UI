import React from 'react'
import { Link } from 'react-router-dom'
import './Best_of_Marly.css';

const Best_of_Marly = () => {
    return (
        <div>
            <section id='color-E5E5E5' className='common'>
                <div className="row md:px-137 px-5">
                    <h1 className="col-md-12 text-center mt-109 mb-82">Explore the best of The Marly</h1>
                    <div className="col-md-4 col-12 mb-135">
                        <div>
                            <img className='w-100' src="../../image/Stay Page/Marly_Stay_1.jpg" height={"489px"} alt="" />
                            <div className=' d-flex justify-content-center'>
                                <div id='mw-299' className='mt-5 d-flex justify-content-center flex-column text-center'>
                                    <h1 className='pb-4'>Location</h1>
                                    <p className='m-0'>Located in sought-after Camps Bay, The Marly lies only seven minutes from Cape Town City Centre.</p>
                                    <div className='pt-3 d-flex justify-content-center'>
                                        <Link to="/" exact><div className='border rounded-pill btn manu_title py-2 px-3 text-dark me-1'>Explore</div></Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4 col-12 mb-135">
                        <div>
                            <img className='w-100' src="../../image/Stay Page/Marly_Stay_2.jpg" height={"489px"} alt="" />
                            <div className=' d-flex justify-content-center'>
                                <div id='mw-239' className='mt-5 d-flex justify-content-center flex-column text-center'>
                                    <h1 className='pb-4'>Experiences</h1>
                                    <p className='m-0'>Stay in luxury, eat whole-heartedly and unwind in tranquility at The Marly.</p>
                                    <div className='pt-3 d-flex justify-content-center'>
                                        <Link to="/" exact><div className='border rounded-pill btn manu_title py-2 px-3 text-dark me-1'>Explore</div></Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4 col-12 mb-135">
                        <div>
                            <img className='w-100' src="../../image/Stay Page/Marly_Stay_3.jpg" height={"489px"} alt="" />
                            <div className=' d-flex justify-content-center'>
                                <div id='mw-239' className='mt-5 d-flex justify-content-center flex-column text-center'>
                                    <h1 className='pb-4'>Promotions</h1>
                                    <p className='m-0'>Discover our special offers for every occasion, season and traveler.</p>
                                    <div className='pt-3 d-flex justify-content-center'>
                                        <Link to="/" exact><div className='border rounded-pill btn manu_title py-2 px-3 text-dark me-1'>Explore</div></Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Best_of_Marly