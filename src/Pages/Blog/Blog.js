import React from 'react'
import { Route, Link, BrowserRouter as Router } from 'react-router-dom'
import Tabs from 'react-bootstrap/Tabs';
import Tab from 'react-bootstrap/Tab';
import Footer from '../../Components/Footer/Footer'
import Header from '../../Components/Header/Header'
import Best_of_Marly from '../../Components/Best_of_Marly/Best_of_Marly'
import './Blog.css';
import Zigzagimgright from '../../Components/Zigzagimg/Zigzagimgright';
import SectionHero from '../../Components/SectionHero/SectionHero';

const Blog = () => {
    return (
        <div>
            <Header />
            <main>
                <SectionHero
                    image={"../../image/Blog Page/Marly_Blog.jpg"}
                    title={'The Marly blog'}
                    descrption={"Discover the latest stories, insights and travel tips from The Marly"}
                />
                <div className='mb-200'>
                    <Zigzagimgright
                        title={'Making the most of The Marly in March'}
                        descrption={"The month of March marks a cool down in temperature and tempo after an exhilarating peak season in Cape Town. Find our team’s top recommendations for things to do in Cape Town this month and experience our city like a local."}
                        btn1={'READ MORE'}
                        image={"../../image/BLog Page/Marly_Blog_1.jpg"}
                    />
                </div>
                <section className='common mt-0 carousel-padding pb-0 offer_imggrid blog_content'>
                    <Tabs
                        defaultActiveKey="home"
                        id="noanim-tab-example"
                        className="mb-3 border-0"
                    >
                        <Tab className='mt-80' eventKey="home" title="ALL">
                            <div className="row">
                                <div className="col-md-6 col-12 mb-165">
                                    <img className='w-100' src={"../../image/Blog Page/Marly_Blog_Tab_1.jpg"} height={357} alt="" />
                                    <div className='d-flex justify-content-center'>
                                        <div className={"mw-430 mt-5 d-flex justify-content-center flex-column text-center"}>
                                            <h2 className={"pb-3"}>Celebrate May in the Mother City</h2>
                                            <div className='d-flex justify-content-center'>
                                                <p className={"mw-344 pt-1 pb-3"}>The allure of autumn in Cape Town and what lies in store for our guests this May. </p>
                                            </div>
                                            <div className='pt-3 d-flex justify-content-center'>
                                                <Link to="/" exact><div className='border rounded-pill btn manu_title py-2 px-3 text-dark me-1'>READ MORE</div></Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-6 col-12 mb-165">
                                    <img className='w-100' src={"../../image/Blog Page/Marly_Blog_Tab_1.jpg"} height={357} alt="" />
                                    <div className='d-flex justify-content-center'>
                                        <div className={"mw-517 mt-5 d-flex justify-content-center flex-column text-center"}>
                                            <h2 className={"pb-3"}>Make the most of your stay at The Marly</h2>
                                            <div className='d-flex justify-content-center'>
                                                <p className={"mw-370 pt-1 pb-3"}>Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit magna aliqua</p>
                                            </div>
                                            <div className='pt-3 d-flex justify-content-center'>
                                                <Link to="/" exact><div className='border rounded-pill btn manu_title py-2 px-3 text-dark me-1'>READ MORE</div></Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-6 col-12 mb-165">
                                    <img className='w-100' src={"../../image/Blog Page/Marly_Blog_Tab_1.jpg"} height={357} alt="" />
                                    <div className='d-flex justify-content-center'>
                                        <div className={"mw-459 mt-5 d-flex justify-content-center flex-column text-center"}>
                                            <h2 className={"pb-3"}>Make your weekend, More weekend</h2>
                                            <div className='d-flex justify-content-center'>
                                                <p className={"mw-370 pt-1 pb-3"}>Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit magna aliqua</p>
                                            </div>
                                            <div className='pt-3 d-flex justify-content-center'>
                                                <Link to="/" exact><div className='border rounded-pill btn manu_title py-2 px-3 text-dark me-1'>READ MORE</div></Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-6 col-12 mb-165">
                                    <img className='w-100' src={"../../image/Blog Page/Marly_Blog_Tab_1.jpg"} height={357} alt="" />
                                    <div className='d-flex justify-content-center'>
                                        <div className={"mw-531 mt-5 d-flex justify-content-center flex-column text-center"}>
                                            <h2 className={"pb-3"}>Savour winter in Camps Bay at The Marly</h2>
                                            <div className='d-flex justify-content-center'>
                                                <p className={"mw-370 pt-1 pb-3"}>Make the most of winter and take advantage of our low-season rates and special offers. </p>
                                            </div>
                                            <div className='pt-3 d-flex justify-content-center'>
                                                <Link to="/" exact><div className='border rounded-pill btn manu_title py-2 px-3 text-dark me-1'>READ MORE</div></Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='py-3 d-flex justify-content-center'>
                                <Link to="/blog" exact><div className='border rounded-pill btn manu_title py-2 px-3 text-white me-1'>READ MORE</div></Link>
                            </div>
                        </Tab>
                        <Tab className='mt-80' eventKey="1" title="STAY">
                            <div className="row">
                                <div className="col-md-6 col-12 mb-165">
                                    <img className='w-100' src={"../../image/Blog Page/Marly_Blog_Tab_1.jpg"} height={357} alt="" />
                                    <div className='d-flex justify-content-center'>
                                        <div className={"mw-430 mt-5 d-flex justify-content-center flex-column text-center"}>
                                            <h2 className={"pb-3"}>Celebrate May in the Mother City</h2>
                                            <div className='d-flex justify-content-center'>
                                                <p className={"mw-344 pt-1 pb-3"}>The allure of autumn in Cape Town and what lies in store for our guests this May. </p>
                                            </div>
                                            <div className='pt-3 d-flex justify-content-center'>
                                                <Link to="/" exact><div className='border rounded-pill btn manu_title py-2 px-3 text-dark me-1'>READ MORE</div></Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-6 col-12 mb-165">
                                    <img className='w-100' src={"../../image/Blog Page/Marly_Blog_Tab_1.jpg"} height={357} alt="" />
                                    <div className='d-flex justify-content-center'>
                                        <div className={"mw-517 mt-5 d-flex justify-content-center flex-column text-center"}>
                                            <h2 className={"pb-3"}>Make the most of your stay at The Marly</h2>
                                            <div className='d-flex justify-content-center'>
                                                <p className={"mw-370 pt-1 pb-3"}>Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit magna aliqua</p>
                                            </div>
                                            <div className='pt-3 d-flex justify-content-center'>
                                                <Link to="/" exact><div className='border rounded-pill btn manu_title py-2 px-3 text-dark me-1'>READ MORE</div></Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-6 col-12 mb-165">
                                    <img className='w-100' src={"../../image/Blog Page/Marly_Blog_Tab_1.jpg"} height={357} alt="" />
                                    <div className='d-flex justify-content-center'>
                                        <div className={"mw-459 mt-5 d-flex justify-content-center flex-column text-center"}>
                                            <h2 className={"pb-3"}>Make your weekend, More weekend</h2>
                                            <div className='d-flex justify-content-center'>
                                                <p className={"mw-370 pt-1 pb-3"}>Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit magna aliqua</p>
                                            </div>
                                            <div className='pt-3 d-flex justify-content-center'>
                                                <Link to="/" exact><div className='border rounded-pill btn manu_title py-2 px-3 text-dark me-1'>READ MORE</div></Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-6 col-12 mb-165">
                                    <img className='w-100' src={"../../image/Blog Page/Marly_Blog_Tab_1.jpg"} height={357} alt="" />
                                    <div className='d-flex justify-content-center'>
                                        <div className={"mw-531 mt-5 d-flex justify-content-center flex-column text-center"}>
                                            <h2 className={"pb-3"}>Savour winter in Camps Bay at The Marly</h2>
                                            <div className='d-flex justify-content-center'>
                                                <p className={"mw-370 pt-1 pb-3"}>Make the most of winter and take advantage of our low-season rates and special offers. </p>
                                            </div>
                                            <div className='pt-3 d-flex justify-content-center'>
                                                <Link to="/" exact><div className='border rounded-pill btn manu_title py-2 px-3 text-dark me-1'>READ MORE</div></Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Tab>
                        <Tab className='mt-80' eventKey="2" title="SPA">
                            <div className="row">
                                <div className="col-md-6 col-12 mb-165">
                                    <img className='w-100' src={"../../image/Blog Page/Marly_Blog_Tab_1.jpg"} height={357} alt="" />
                                    <div className='d-flex justify-content-center'>
                                        <div className={"mw-430 mt-5 d-flex justify-content-center flex-column text-center"}>
                                            <h2 className={"pb-3"}>Celebrate May in the Mother City</h2>
                                            <div className='d-flex justify-content-center'>
                                                <p className={"mw-344 pt-1 pb-3"}>The allure of autumn in Cape Town and what lies in store for our guests this May. </p>
                                            </div>
                                            <div className='pt-3 d-flex justify-content-center'>
                                                <Link to="/" exact><div className='border rounded-pill btn manu_title py-2 px-3 text-dark me-1'>READ MORE</div></Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-6 col-12 mb-165">
                                    <img className='w-100' src={"../../image/Blog Page/Marly_Blog_Tab_1.jpg"} height={357} alt="" />
                                    <div className='d-flex justify-content-center'>
                                        <div className={"mw-517 mt-5 d-flex justify-content-center flex-column text-center"}>
                                            <h2 className={"pb-3"}>Make the most of your stay at The Marly</h2>
                                            <div className='d-flex justify-content-center'>
                                                <p className={"mw-370 pt-1 pb-3"}>Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit magna aliqua</p>
                                            </div>
                                            <div className='pt-3 d-flex justify-content-center'>
                                                <Link to="/" exact><div className='border rounded-pill btn manu_title py-2 px-3 text-dark me-1'>READ MORE</div></Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-6 col-12 mb-165">
                                    <img className='w-100' src={"../../image/Blog Page/Marly_Blog_Tab_1.jpg"} height={357} alt="" />
                                    <div className='d-flex justify-content-center'>
                                        <div className={"mw-459 mt-5 d-flex justify-content-center flex-column text-center"}>
                                            <h2 className={"pb-3"}>Make your weekend, More weekend</h2>
                                            <div className='d-flex justify-content-center'>
                                                <p className={"mw-370 pt-1 pb-3"}>Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit magna aliqua</p>
                                            </div>
                                            <div className='pt-3 d-flex justify-content-center'>
                                                <Link to="/" exact><div className='border rounded-pill btn manu_title py-2 px-3 text-dark me-1'>READ MORE</div></Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-6 col-12 mb-165">
                                    <img className='w-100' src={"../../image/Blog Page/Marly_Blog_Tab_1.jpg"} height={357} alt="" />
                                    <div className='d-flex justify-content-center'>
                                        <div className={"mw-531 mt-5 d-flex justify-content-center flex-column text-center"}>
                                            <h2 className={"pb-3"}>Savour winter in Camps Bay at The Marly</h2>
                                            <div className='d-flex justify-content-center'>
                                                <p className={"mw-370 pt-1 pb-3"}>Make the most of winter and take advantage of our low-season rates and special offers. </p>
                                            </div>
                                            <div className='pt-3 d-flex justify-content-center'>
                                                <Link to="/" exact><div className='border rounded-pill btn manu_title py-2 px-3 text-dark me-1'>READ MORE</div></Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Tab>
                        <Tab className='mt-80' eventKey="3" title="EAT">
                            <div className="row">
                                <div className="col-md-6 col-12 mb-165">
                                    <img className='w-100' src={"../../image/Blog Page/Marly_Blog_Tab_1.jpg"} height={357} alt="" />
                                    <div className='d-flex justify-content-center'>
                                        <div className={"mw-430 mt-5 d-flex justify-content-center flex-column text-center"}>
                                            <h2 className={"pb-3"}>Celebrate May in the Mother City</h2>
                                            <div className='d-flex justify-content-center'>
                                                <p className={"mw-344 pt-1 pb-3"}>The allure of autumn in Cape Town and what lies in store for our guests this May. </p>
                                            </div>
                                            <div className='pt-3 d-flex justify-content-center'>
                                                <Link to="/" exact><div className='border rounded-pill btn manu_title py-2 px-3 text-dark me-1'>READ MORE</div></Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-6 col-12 mb-165">
                                    <img className='w-100' src={"../../image/Blog Page/Marly_Blog_Tab_1.jpg"} height={357} alt="" />
                                    <div className='d-flex justify-content-center'>
                                        <div className={"mw-517 mt-5 d-flex justify-content-center flex-column text-center"}>
                                            <h2 className={"pb-3"}>Make the most of your stay at The Marly</h2>
                                            <div className='d-flex justify-content-center'>
                                                <p className={"mw-370 pt-1 pb-3"}>Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit magna aliqua</p>
                                            </div>
                                            <div className='pt-3 d-flex justify-content-center'>
                                                <Link to="/" exact><div className='border rounded-pill btn manu_title py-2 px-3 text-dark me-1'>READ MORE</div></Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-6 col-12 mb-165">
                                    <img className='w-100' src={"../../image/Blog Page/Marly_Blog_Tab_1.jpg"} height={357} alt="" />
                                    <div className='d-flex justify-content-center'>
                                        <div className={"mw-459 mt-5 d-flex justify-content-center flex-column text-center"}>
                                            <h2 className={"pb-3"}>Make your weekend, More weekend</h2>
                                            <div className='d-flex justify-content-center'>
                                                <p className={"mw-370 pt-1 pb-3"}>Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit magna aliqua</p>
                                            </div>
                                            <div className='pt-3 d-flex justify-content-center'>
                                                <Link to="/" exact><div className='border rounded-pill btn manu_title py-2 px-3 text-dark me-1'>READ MORE</div></Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-6 col-12 mb-165">
                                    <img className='w-100' src={"../../image/Blog Page/Marly_Blog_Tab_1.jpg"} height={357} alt="" />
                                    <div className='d-flex justify-content-center'>
                                        <div className={"mw-531 mt-5 d-flex justify-content-center flex-column text-center"}>
                                            <h2 className={"pb-3"}>Savour winter in Camps Bay at The Marly</h2>
                                            <div className='d-flex justify-content-center'>
                                                <p className={"mw-370 pt-1 pb-3"}>Make the most of winter and take advantage of our low-season rates and special offers. </p>
                                            </div>
                                            <div className='pt-3 d-flex justify-content-center'>
                                                <Link to="/" exact><div className='border rounded-pill btn manu_title py-2 px-3 text-dark me-1'>READ MORE</div></Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Tab>
                        <Tab className='mt-80' eventKey="4" title="EXPERIENCES">
                            <div className="row">
                                <div className="col-md-6 col-12 mb-165">
                                    <img className='w-100' src={"../../image/Blog Page/Marly_Blog_Tab_1.jpg"} height={357} alt="" />
                                    <div className='d-flex justify-content-center'>
                                        <div className={"mw-430 mt-5 d-flex justify-content-center flex-column text-center"}>
                                            <h2 className={"pb-3"}>Celebrate May in the Mother City</h2>
                                            <div className='d-flex justify-content-center'>
                                                <p className={"mw-344 pt-1 pb-3"}>The allure of autumn in Cape Town and what lies in store for our guests this May. </p>
                                            </div>
                                            <div className='pt-3 d-flex justify-content-center'>
                                                <Link to="/" exact><div className='border rounded-pill btn manu_title py-2 px-3 text-dark me-1'>READ MORE</div></Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-6 col-12 mb-165">
                                    <img className='w-100' src={"../../image/Blog Page/Marly_Blog_Tab_1.jpg"} height={357} alt="" />
                                    <div className='d-flex justify-content-center'>
                                        <div className={"mw-517 mt-5 d-flex justify-content-center flex-column text-center"}>
                                            <h2 className={"pb-3"}>Make the most of your stay at The Marly</h2>
                                            <div className='d-flex justify-content-center'>
                                                <p className={"mw-370 pt-1 pb-3"}>Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit magna aliqua</p>
                                            </div>
                                            <div className='pt-3 d-flex justify-content-center'>
                                                <Link to="/" exact><div className='border rounded-pill btn manu_title py-2 px-3 text-dark me-1'>READ MORE</div></Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-6 col-12 mb-165">
                                    <img className='w-100' src={"../../image/Blog Page/Marly_Blog_Tab_1.jpg"} height={357} alt="" />
                                    <div className='d-flex justify-content-center'>
                                        <div className={"mw-459 mt-5 d-flex justify-content-center flex-column text-center"}>
                                            <h2 className={"pb-3"}>Make your weekend, More weekend</h2>
                                            <div className='d-flex justify-content-center'>
                                                <p className={"mw-370 pt-1 pb-3"}>Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit magna aliqua</p>
                                            </div>
                                            <div className='pt-3 d-flex justify-content-center'>
                                                <Link to="/" exact><div className='border rounded-pill btn manu_title py-2 px-3 text-dark me-1'>READ MORE</div></Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-6 col-12 mb-165">
                                    <img className='w-100' src={"../../image/Blog Page/Marly_Blog_Tab_1.jpg"} height={357} alt="" />
                                    <div className='d-flex justify-content-center'>
                                        <div className={"mw-531 mt-5 d-flex justify-content-center flex-column text-center"}>
                                            <h2 className={"pb-3"}>Savour winter in Camps Bay at The Marly</h2>
                                            <div className='d-flex justify-content-center'>
                                                <p className={"mw-370 pt-1 pb-3"}>Make the most of winter and take advantage of our low-season rates and special offers. </p>
                                            </div>
                                            <div className='pt-3 d-flex justify-content-center'>
                                                <Link to="/" exact><div className='border rounded-pill btn manu_title py-2 px-3 text-dark me-1'>READ MORE</div></Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Tab>
                    </Tabs>
                </section>
            </main>
            <Best_of_Marly />
            <Footer />
        </div>
    )
}

export default Blog