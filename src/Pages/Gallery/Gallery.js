import React from 'react'
import { Route, Link, BrowserRouter as Router } from 'react-router-dom'
import Tabs from 'react-bootstrap/Tabs';
import Tab from 'react-bootstrap/Tab';
import Footer from '../../Components/Footer/Footer'
import Header from '../../Components/Header/Header'
import Best_of_Marly from '../../Components/Best_of_Marly/Best_of_Marly'
import './Gallery.css'
import ImgGrid from '../../Components/ImgGrid/ImgGrid';
import SectionHero from '../../Components/SectionHero/SectionHero';

const Gallery = () => {
    return (
        <div>
            <Header />
            <main>
                <SectionHero
                    image={"../../image/Gallery Page/Marly_Gallery.jpg"}
                    title={'Gallery'}
                    descrption={"Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."}
                />
                <section className='common carousel-padding pb-0 offer_imggrid gallery'>
                    <div className="mw-768">
                        <h1 className='pt-80'>Discover the beauty that is The Marly</h1>
                        <p className='text-start mw-622'>Id aliquet lectus proin nibh nisl condimentum id. Dui id ornare arcu odio ut sem nulla pharetra. Velit euismod in pellentesque massa placerat. </p>
                    </div>
                    <Tabs
                        defaultActiveKey="home"
                        id="noanim-tab-example"
                        className="mb-3 border-0 pt-80"
                    >
                        <Tab className='mt-80' eventKey="home" title="ALL">
                            <div className="row">
                                <ImgGrid
                                    image={"../../image/Gallery Page/Marly_Gallery_Tab_1.jpg"}
                                    isGalleryMargin={true}
                                />
                                <ImgGrid
                                    image={"../../image/Gallery Page/Marly_Gallery_Tab_2.jpg"}
                                    isGalleryMargin={true}
                                />
                                <ImgGrid
                                    image={"../../image/Gallery Page/Marly_Gallery_Tab_3.jpg"}
                                    isGalleryMargin={true}
                                />
                                <ImgGrid
                                    image={"../../image/Gallery Page/Marly_Gallery_Tab_4.jpg"}
                                    isGalleryMargin={true}
                                />
                                <ImgGrid
                                    image={"../../image/Gallery Page/Marly_Gallery_Tab_5.jpg"}
                                    isGalleryMargin={true}
                                />
                                <ImgGrid
                                    image={"../../image/Gallery Page/Marly_Gallery_Tab_6.jpg"}
                                    isGalleryMargin={true}
                                />
                                <div className='pt-80 d-flex justify-content-center'>
                                    <Link to="" exact><div className='border rounded-pill btn manu_title py-2 px-3 text-dark me-1'>LOAD MORE</div></Link>
                                </div>
                            </div>
                        </Tab>
                        <Tab className='mt-80' eventKey="1" title="STAY">
                            <div className="row">
                                <ImgGrid
                                    image={"../../image/Gallery Page/Marly_Gallery_Tab_1.jpg"}
                                    isGalleryMargin={true}
                                />
                                <ImgGrid
                                    image={"../../image/Gallery Page/Marly_Gallery_Tab_2.jpg"}
                                    isGalleryMargin={true}
                                />
                                <ImgGrid
                                    image={"../../image/Gallery Page/Marly_Gallery_Tab_3.jpg"}
                                    isGalleryMargin={true}
                                />
                                <ImgGrid
                                    image={"../../image/Gallery Page/Marly_Gallery_Tab_4.jpg"}
                                    isGalleryMargin={true}
                                />
                                <ImgGrid
                                    image={"../../image/Gallery Page/Marly_Gallery_Tab_5.jpg"}
                                    isGalleryMargin={true}
                                />
                                <ImgGrid
                                    image={"../../image/Gallery Page/Marly_Gallery_Tab_6.jpg"}
                                    isGalleryMargin={true}
                                />
                            </div>
                        </Tab>
                        <Tab className='mt-80' eventKey="2" title="SPA">
                            <div className="row">
                                <ImgGrid
                                    image={"../../image/Gallery Page/Marly_Gallery_Tab_1.jpg"}
                                    isGalleryMargin={true}
                                />
                                <ImgGrid
                                    image={"../../image/Gallery Page/Marly_Gallery_Tab_2.jpg"}
                                    isGalleryMargin={true}
                                />
                                <ImgGrid
                                    image={"../../image/Gallery Page/Marly_Gallery_Tab_3.jpg"}
                                    isGalleryMargin={true}
                                />
                                <ImgGrid
                                    image={"../../image/Gallery Page/Marly_Gallery_Tab_4.jpg"}
                                    isGalleryMargin={true}
                                />
                                <ImgGrid
                                    image={"../../image/Gallery Page/Marly_Gallery_Tab_5.jpg"}
                                    isGalleryMargin={true}
                                />
                                <ImgGrid
                                    image={"../../image/Gallery Page/Marly_Gallery_Tab_6.jpg"}
                                    isGalleryMargin={true}
                                />
                            </div>
                        </Tab>
                        <Tab className='mt-80' eventKey="3" title="EAT">
                            <div className="row">
                                <ImgGrid
                                    image={"../../image/Gallery Page/Marly_Gallery_Tab_1.jpg"}
                                    isGalleryMargin={true}
                                />
                                <ImgGrid
                                    image={"../../image/Gallery Page/Marly_Gallery_Tab_2.jpg"}
                                    isGalleryMargin={true}
                                />
                                <ImgGrid
                                    image={"../../image/Gallery Page/Marly_Gallery_Tab_3.jpg"}
                                    isGalleryMargin={true}
                                />
                                <ImgGrid
                                    image={"../../image/Gallery Page/Marly_Gallery_Tab_4.jpg"}
                                    isGalleryMargin={true}
                                />
                                <ImgGrid
                                    image={"../../image/Gallery Page/Marly_Gallery_Tab_5.jpg"}
                                    isGalleryMargin={true}
                                />
                                <ImgGrid
                                    image={"../../image/Gallery Page/Marly_Gallery_Tab_6.jpg"}
                                    isGalleryMargin={true}
                                />
                            </div>
                        </Tab>
                        <Tab className='mt-80' eventKey="4" title="EXPERIENCES">
                            <div className="row">
                                <ImgGrid
                                    image={"../../image/Gallery Page/Marly_Gallery_Tab_1.jpg"}
                                    isGalleryMargin={true}
                                />
                                <ImgGrid
                                    image={"../../image/Gallery Page/Marly_Gallery_Tab_2.jpg"}
                                    isGalleryMargin={true}
                                />
                                <ImgGrid
                                    image={"../../image/Gallery Page/Marly_Gallery_Tab_3.jpg"}
                                    isGalleryMargin={true}
                                />
                                <ImgGrid
                                    image={"../../image/Gallery Page/Marly_Gallery_Tab_4.jpg"}
                                    isGalleryMargin={true}
                                />
                                <ImgGrid
                                    image={"../../image/Gallery Page/Marly_Gallery_Tab_5.jpg"}
                                    isGalleryMargin={true}
                                />
                                <ImgGrid
                                    image={"../../image/Gallery Page/Marly_Gallery_Tab_6.jpg"}
                                    isGalleryMargin={true}
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

export default Gallery