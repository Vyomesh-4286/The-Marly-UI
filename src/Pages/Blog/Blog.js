import React from 'react'
import { Route, Link, BrowserRouter as Router } from 'react-router-dom'
import Tabs from 'react-bootstrap/Tabs';
import Tab from 'react-bootstrap/Tab';
import Footer from '../../Components/Footer/Footer'
import Header from '../../Components/Header/Header'
import Best_of_Marly from '../../Components/Best_of_Marly/Best_of_Marly'
import './Blog.css';
import SectionHero from '../../Components/SectionHero/SectionHero';
import Zigzagimgleft from '../../Components/Zigzagimg/Zigzagimgleft';
import ImgGrid from '../../Components/ImgGrid/ImgGrid';

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
                <Zigzagimgleft
                    title={'Making the most of The Marly in March'}
                    descrption={"The month of March marks a cool down in temperature and tempo after an exhilarating peak season in Cape Town. Find our team’s top recommendations for things to do in Cape Town this month and experience our city like a local."}
                    btn1={'READ MORE'}
                    image={"../../image/BLog Page/Marly_Blog_1.jpg"}
                    isOrder={true}
                />
                <section className='common carousel-padding pb-0 offer_imggrid blog_content'>
                    <Tabs
                        defaultActiveKey="home"
                        id="noanim-tab-example"
                        className="mb-3 border-0"
                    >
                        <Tab className='mt-80' eventKey="home" title="ALL">
                            <div className="row">
                                <ImgGrid
                                    image={"../../image/Blog Page/Marly_Blog_Tab_1.jpg"}
                                    title={'Celebrate May in the Mother City'}
                                    descrption={"The allure of autumn in Cape Town and what lies in store for our guests this May."}
                                    btn={'READ MORE'}
                                    isMaxWidthblog1={true}
                                />
                                <ImgGrid
                                    image={"../../image/Blog Page/Marly_Blog_Tab_2.jpg"}
                                    title={'Make the most of your stay at The Marly'}
                                    descrption={"Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit magna aliqua"}
                                    btn={'READ MORE'}
                                    isMaxWidthblog2={true}
                                />
                                <ImgGrid
                                    image={"../../image/Blog Page/Marly_Blog_Tab_3.jpg"}
                                    title={'Make your weekend, More weekend'}
                                    descrption={"Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit magna aliqua"}
                                    btn={'READ MORE'}
                                    isMaxWidthblog3={true}
                                />
                                <ImgGrid
                                    image={"../../image/Blog Page/Marly_Blog_Tab_4.jpg"}
                                    title={'Savour winter in Camps Bay at The Marly'}
                                    descrption={"Make the most of winter and take advantage of our low-season rates and special offers."}
                                    btn={'READ MORE'}
                                    isMaxWidth4={true}
                                />
                            </div>
                            <div className='py-3 d-flex justify-content-center'>
                                <Link to="#" exact><div className='border rounded-pill btn manu_title py-2 px-3 text-dark me-1'>LOAD MORE</div></Link>
                            </div>
                        </Tab>
                        <Tab className='mt-80' eventKey="1" title="STAY">
                            <div className="row">
                                <ImgGrid
                                    image={"../../image/Blog Page/Marly_Blog_Tab_1.jpg"}
                                    title={'Celebrate May in the Mother City'}
                                    descrption={"The allure of autumn in Cape Town and what lies in store for our guests this May."}
                                    btn={'READ MORE'}
                                    isMaxWidthblog1={true}
                                />
                                <ImgGrid
                                    image={"../../image/Blog Page/Marly_Blog_Tab_2.jpg"}
                                    title={'Make the most of your stay at The Marly'}
                                    descrption={"Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit magna aliqua"}
                                    btn={'READ MORE'}
                                    isMaxWidthblog2={true}
                                />
                                <ImgGrid
                                    image={"../../image/Blog Page/Marly_Blog_Tab_3.jpg"}
                                    title={'Make your weekend, More weekend'}
                                    descrption={"Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit magna aliqua"}
                                    btn={'READ MORE'}
                                    isMaxWidthblog3={true}
                                />
                                <ImgGrid
                                    image={"../../image/Blog Page/Marly_Blog_Tab_4.jpg"}
                                    title={'Savour winter in Camps Bay at The Marly'}
                                    descrption={"Make the most of winter and take advantage of our low-season rates and special offers."}
                                    btn={'READ MORE'}
                                    isMaxWidth4={true}
                                />
                            </div>
                        </Tab>
                        <Tab className='mt-80' eventKey="2" title="SPA">
                            <div className="row">
                                <ImgGrid
                                    image={"../../image/Blog Page/Marly_Blog_Tab_1.jpg"}
                                    title={'Celebrate May in the Mother City'}
                                    descrption={"The allure of autumn in Cape Town and what lies in store for our guests this May."}
                                    btn={'READ MORE'}
                                    isMaxWidthblog1={true}
                                />
                                <ImgGrid
                                    image={"../../image/Blog Page/Marly_Blog_Tab_2.jpg"}
                                    title={'Make the most of your stay at The Marly'}
                                    descrption={"Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit magna aliqua"}
                                    btn={'READ MORE'}
                                    isMaxWidthblog2={true}
                                />
                                <ImgGrid
                                    image={"../../image/Blog Page/Marly_Blog_Tab_3.jpg"}
                                    title={'Make your weekend, More weekend'}
                                    descrption={"Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit magna aliqua"}
                                    btn={'READ MORE'}
                                    isMaxWidthblog3={true}
                                />
                                <ImgGrid
                                    image={"../../image/Blog Page/Marly_Blog_Tab_4.jpg"}
                                    title={'Savour winter in Camps Bay at The Marly'}
                                    descrption={"Make the most of winter and take advantage of our low-season rates and special offers."}
                                    btn={'READ MORE'}
                                    isMaxWidth4={true}
                                />
                            </div>
                        </Tab>
                        <Tab className='mt-80' eventKey="3" title="EAT">
                            <div className="row">
                                <ImgGrid
                                    image={"../../image/Blog Page/Marly_Blog_Tab_1.jpg"}
                                    title={'Celebrate May in the Mother City'}
                                    descrption={"The allure of autumn in Cape Town and what lies in store for our guests this May."}
                                    btn={'READ MORE'}
                                    isMaxWidthblog1={true}
                                />
                                <ImgGrid
                                    image={"../../image/Blog Page/Marly_Blog_Tab_2.jpg"}
                                    title={'Make the most of your stay at The Marly'}
                                    descrption={"Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit magna aliqua"}
                                    btn={'READ MORE'}
                                    isMaxWidthblog2={true}
                                />
                                <ImgGrid
                                    image={"../../image/Blog Page/Marly_Blog_Tab_3.jpg"}
                                    title={'Make your weekend, More weekend'}
                                    descrption={"Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit magna aliqua"}
                                    btn={'READ MORE'}
                                    isMaxWidthblog3={true}
                                />
                                <ImgGrid
                                    image={"../../image/Blog Page/Marly_Blog_Tab_4.jpg"}
                                    title={'Savour winter in Camps Bay at The Marly'}
                                    descrption={"Make the most of winter and take advantage of our low-season rates and special offers."}
                                    btn={'READ MORE'}
                                    isMaxWidth4={true}
                                />
                            </div>
                        </Tab>
                        <Tab className='mt-80' eventKey="4" title="EXPERIENCES">
                            <div className="row">
                                <ImgGrid
                                    image={"../../image/Blog Page/Marly_Blog_Tab_1.jpg"}
                                    title={'Celebrate May in the Mother City'}
                                    descrption={"The allure of autumn in Cape Town and what lies in store for our guests this May."}
                                    btn={'READ MORE'}
                                    isMaxWidthblog1={true}
                                />
                                <ImgGrid
                                    image={"../../image/Blog Page/Marly_Blog_Tab_2.jpg"}
                                    title={'Make the most of your stay at The Marly'}
                                    descrption={"Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit magna aliqua"}
                                    btn={'READ MORE'}
                                    isMaxWidthblog2={true}
                                />
                                <ImgGrid
                                    image={"../../image/Blog Page/Marly_Blog_Tab_3.jpg"}
                                    title={'Make your weekend, More weekend'}
                                    descrption={"Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit magna aliqua"}
                                    btn={'READ MORE'}
                                    isMaxWidthblog3={true}
                                />
                                <ImgGrid
                                    image={"../../image/Blog Page/Marly_Blog_Tab_4.jpg"}
                                    title={'Savour winter in Camps Bay at The Marly'}
                                    descrption={"Make the most of winter and take advantage of our low-season rates and special offers."}
                                    btn={'READ MORE'}
                                    isMaxWidth4={true}
                                />
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